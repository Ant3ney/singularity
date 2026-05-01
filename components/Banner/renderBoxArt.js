import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js';
import { MeshoptDecoder } from 'three/examples/jsm/libs/meshopt_decoder.module.js';

function renderBoxArt({ container, boxArt }) {
	if (!container) return () => {};

	const ownerWindow = container.ownerDocument?.defaultView;
	if (!ownerWindow) return () => {};

	while (container.firstChild) {
		container.removeChild(container.firstChild);
	}

	let disposed = false;
	let mixer;
	let gltfScene;

	const getSize = () => ({
		width: Math.max(1, container.offsetWidth || container.clientWidth || 1),
		height: Math.max(1, container.offsetHeight || container.clientHeight || 1),
	});

	const { width, height } = getSize();
	const scene = new THREE.Scene();
	const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
	camera.position.set(0, 0, 3);

	const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
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
		event.preventDefault();
	};

	const handleContextRestored = () => {
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

			const box = new THREE.Box3().setFromObject(gltfScene);
			const center = box.getCenter(new THREE.Vector3());
			camera.position.set(center.x + 0.38, center.y, center.z + (0 * box.getSize(new THREE.Vector3()).length()));
			camera.lookAt(center);

			if (gltf.animations?.length) {
				mixer = new THREE.AnimationMixer(gltfScene);
				const action = mixer.clipAction(gltf.animations[0]);
				action.play();
			}
		},
		undefined,
		(err) => {
			if (!disposed) console.error('GLTF load error:', err);
		}
	);

	const clock = new THREE.Clock();
	renderer.setAnimationLoop(() => {
		if (disposed) return;

		renderer.render(scene, camera);
		const delta = clock.getDelta();
		if (mixer) mixer.update(delta);
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
