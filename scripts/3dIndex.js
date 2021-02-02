import * as THREE from 'https://unpkg.com/three/build/three.module.js';
import { OrbitControls } from 'https://unpkg.com/three/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'https://unpkg.com/three/examples/jsm/loaders/GLTFLoader.js'; 


const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
const renderer = new THREE.WebGLRenderer();
scene.background = new THREE.Color( 0x131417)
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

// For responsivenss with different screen sizes
window.addEventListener('resize', function() 
{
  let width = window.innerWidth;
  let height = window.innerHeight;
  renderer.setSize( width, height );
  camera.aspect = width / height;
  camera.updateProjectionMatrix();
});

// const axesHelper = new THREE.AxesHelper( 5 );
// scene.add( axesHelper );



const ambient1 = new THREE.PointLight(0xffffff, 20);
scene.add(ambient1);
ambient1.position.set(100, 0, 0);

const ambient2 = new THREE.AmbientLight(0xfffff, 5);
scene.add(ambient2);
ambient2.position.set(50, 5, 0);

// const loader = new GLTFLoader();
// loader.load('js/scene.gltf', function(gltf) {
//   scene.add( gltf.scene );
// }, undefined, function(error) {
//     console.error( error );
//   });

const controls = new OrbitControls( camera, renderer.domElement);
// camera.position.set( 0, 20, 100 );
controls.update();

const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial( { color: 0xff84 } );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

camera.position.z = 5;

const animate = function () {
  requestAnimationFrame( animate );

  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;

  renderer.render( scene, camera );
};

animate();