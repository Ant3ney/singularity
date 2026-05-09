import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js';
import { MeshoptDecoder } from 'three/examples/jsm/libs/meshopt_decoder.module.js';

function renderBoxArt({ container, boxArt, onLoaded, onError, onFrame }) {
	if (!container) return () => {};

	const ownerWindow = container.ownerDocument?.defaultView;
	if (!ownerWindow) return () => {};

	while (container.firstChild) {
		container.removeChild(container.firstChild);
	}

	let disposed = false;
	let mixer;
	let gltfScene;
	let loadedCallbackPending = false;
	let loadedCallbackSent = false;
	let contextLost = false;
	let errorCallbackSent = false;
	let renderedModelFrames = 0;

	const reportError = (err) => {
		if (disposed || errorCallbackSent) return;

		errorCallbackSent = true;
		if (typeof onError === 'function') {
			onError(err);
		}
	};

	const getSize = () => ({
		width: Math.max(1, container.offsetWidth || container.clientWidth || 1),
		height: Math.max(1, container.offsetHeight || container.clientHeight || 1),
	});

	const { width, height } = getSize();
	const scene = new THREE.Scene();
	const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
	camera.position.set(0, 0, 3);

	let renderer;
	try {
		renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
	} catch (err) {
		if (typeof onError === 'function') {
			onError(err);
		}
		return () => {};
	}
	renderer.setPixelRatio(Math.min(ownerWindow.devicePixelRatio || 1, 2));
	renderer.setSize(width, height);
	renderer.setClearColor(0xffffff, 0);
	renderer.domElement.style.position = 'absolute';
	container.appendChild(renderer.domElement);

	scene.add(new THREE.AmbientLight(0xffffff, 3));

	const resizeRenderer = () => {
		if (disposed) return;

		const nextSize = getSize();
		camera.aspect = nextSize.width / nextSize.height;
		camera.updateProjectionMatrix();
		renderer.setPixelRatio(Math.min(ownerWindow.devicePixelRatio || 1, 2));
		renderer.setSize(nextSize.width, nextSize.height);
	};

	const handleContextLost = (event) => {
		if (disposed) return;

		contextLost = true;
		event.preventDefault();
		reportError(new Error('Three.js box art WebGL context lost'));
	};

	const handleContextRestored = () => {
		if (disposed) return;

		contextLost = false;
		resizeRenderer();
	};

	ownerWindow.addEventListener('resize', resizeRenderer);
	renderer.domElement.addEventListener('webglcontextlost', handleContextLost, false);
	renderer.domElement.addEventListener('webglcontextrestored', handleContextRestored, false);

	const dracoLoader = new DRACOLoader();
	dracoLoader.setDecoderPath('/draco/');

	const gltfLoader = new GLTFLoader();
	gltfLoader.setDRACOLoader(dracoLoader);
	gltfLoader.setMeshoptDecoder(MeshoptDecoder);

	gltfLoader.load(
		boxArt,
		(gltf) => {
			if (disposed) {
				disposeObject(gltf.scene);
				return;
			}

			gltfScene = gltf.scene;
			scene.add(gltfScene);
			scene.updateMatrixWorld(true);

			const box = new THREE.Box3().setFromObject(gltfScene);
			const center = box.getCenter(new THREE.Vector3());
			camera.position.set(center.x + 0.38, center.y, center.z + (0 * box.getSize(new THREE.Vector3()).length()));
			camera.lookAt(center);

			if (gltf.animations?.length) {
				mixer = new THREE.AnimationMixer(gltfScene);
				const action = mixer.clipAction(gltf.animations[0]);
				action.play();
			}

			try {
				renderer.compile(scene, camera);
			} catch (err) {
				reportError(err);
				return;
			}

			renderedModelFrames = 0;
			loadedCallbackPending = true;
		},
		undefined,
		(err) => {
			if (!disposed) {
				console.error('GLTF load error:', err);
				reportError(err);
			}
		}
	);

	const isReadyToReport = () => {
		const canvas = renderer.domElement;
		const context = renderer.getContext();

		return Boolean(
			loadedCallbackPending
			&& !loadedCallbackSent
			&& gltfScene
			&& gltfScene.parent === scene
			&& canvas
			&& canvas.isConnected
			&& canvas.parentNode === container
			&& canvas.width > 1
			&& canvas.height > 1
			&& !contextLost
			&& (!context || typeof context.isContextLost !== 'function' || !context.isContextLost())
			&& renderedModelFrames >= 2
		);
	};

	const clock = new THREE.Clock();
	renderer.setAnimationLoop(() => {
		if (disposed) return;

		try {
			const delta = clock.getDelta();
			if (mixer) mixer.update(delta);
			renderer.render(scene, camera);
			if (typeof onFrame === 'function') {
				onFrame();
			}
		} catch (err) {
			reportError(err);
			return;
		}

		if (loadedCallbackPending && gltfScene && !contextLost) {
			renderedModelFrames += 1;
		}

		if (isReadyToReport()) {
			loadedCallbackPending = false;
			loadedCallbackSent = true;
			if (typeof onLoaded === 'function') {
				onLoaded();
			}
		}
	});

	return () => {
		if (disposed) return;
		disposed = true;

		ownerWindow.removeEventListener('resize', resizeRenderer);
		renderer.domElement.removeEventListener('webglcontextlost', handleContextLost, false);
		renderer.domElement.removeEventListener('webglcontextrestored', handleContextRestored, false);

		renderer.setAnimationLoop(null);

		if (mixer) {
			mixer.stopAllAction();
			mixer.uncacheRoot(gltfScene);
		}

		disposeObject(scene);
		dracoLoader.dispose();
		renderer.dispose();

		if (typeof renderer.forceContextLoss === 'function') {
			renderer.forceContextLoss();
		}

		if (renderer.domElement.parentNode) {
			renderer.domElement.parentNode.removeChild(renderer.domElement);
		}
	};
}

function disposeObject(root) {
	root.traverse((object) => {
		if (object.geometry) {
			object.geometry.dispose();
		}

		if (object.material) {
			const materials = Array.isArray(object.material) ? object.material : [object.material];
			materials.forEach(disposeMaterial);
		}
	});
}

function disposeMaterial(material) {
	Object.keys(material).forEach((key) => {
		const value = material[key];
		if (value && typeof value === 'object' && value.isTexture) {
			value.dispose();
		}
	});

	material.dispose();
}

export default renderBoxArt;
