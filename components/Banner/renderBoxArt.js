import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js';
import { MeshoptDecoder } from 'three/examples/jsm/libs/meshopt_decoder.module.js';

async function renderBoxArt(window, boxArt, query) {
	const document = window.document;
	const renderElementToSelect = document.querySelector(query);
	const iW = renderElementToSelect?.offsetWidth ?? 0;
	const iH = renderElementToSelect?.offsetHeight ?? 0;

	const scene = new THREE.Scene();
	const camera = new THREE.PerspectiveCamera(75, iW / iH, 0.1, 1000);
	camera.position.set(0, 0, 3);

	const renderer = new THREE.WebGLRenderer({ antialias: true });
	renderer.setSize(iW, iH);
	renderer.setClearColor(0xffffff, 0);
	renderer.domElement.style.position = 'absolute';
	renderElementToSelect.appendChild(renderer.domElement);

	scene.add(new THREE.AmbientLight(0xffffff, 3));

	const dracoLoader = new DRACOLoader();
	dracoLoader.setDecoderPath('/draco/');

	const gltfLoader = new GLTFLoader();
	gltfLoader.setDRACOLoader(dracoLoader);          // ✅ for Draco meshes
	gltfLoader.setMeshoptDecoder(MeshoptDecoder);    // ✅ for Meshopt “super compressed” files

	let mixer;
	gltfLoader.load(
		boxArt, 
		(gltf) => {
			scene.add(gltf.scene);

			const box = new THREE.Box3().setFromObject(gltf.scene);
			const center = box.getCenter(new THREE.Vector3());
			camera.position.set(center.x + 0.38, center.y, center.z + (0 *  box.getSize(new THREE.Vector3()).length()));
			camera.lookAt(center);

			mixer = new THREE.AnimationMixer(gltf.scene)
			const clip = gltf.animations[0]
			const action = mixer.clipAction(clip)
			action.play()
		},
		undefined,
		(err) => console.error('GLTF load error:', err)
	);

	const clock = new THREE.Clock()
	renderer.setAnimationLoop(() => { 
		renderer.render(scene, camera)
		const delta = clock.getDelta()
		if (mixer) mixer.update(delta)
	});
}

export default renderBoxArt;
