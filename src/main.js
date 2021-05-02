import '../style.css'
import * as THREE from 'three';
import SceneManager from './sceneManager/scene';
import * as dat from 'dat.gui'; 
import Particles from './geometry/particles';

// const gui = new dat.GUI();

const canvas = document.querySelector('#canvas');
const scene = new SceneManager(canvas);
scene.scene.background = 0x000000;
scene.addOrbitControl();

//texture loader
const textureLoader = new THREE.TextureLoader();
const start01 = textureLoader.load('./texture/star_01.png');
const start08 = textureLoader.load('./texture/star_08.png');
const dirt03 = textureLoader.load('./texture/star_07.png');
const start05 = textureLoader.load('./texture/star_05.png');

const particles = new Particles(start01);
scene.add(particles.particles);

const particles2 = new Particles(start08);
scene.add(particles2.particles);

const particles3 = new Particles(start05);
scene.add(particles3.particles);

const particles4 = new Particles(dirt03);
scene.add(particles4.particles);

const clock = new THREE.Clock();
const animate = () => {
	const elapsedTime = clock.getElapsedTime();

	particles.particles.rotation.y = elapsedTime * 0.005;
	particles2.particles.rotation.y = - elapsedTime * 0.005;
	particles3.particles.rotation.y = elapsedTime * 0.005;
	particles4.particles.rotation.y = - elapsedTime * 0.005;

	scene.onUpdate();
	scene.onUpdateStats();
	requestAnimationFrame( animate );
};

animate();