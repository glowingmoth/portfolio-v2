import * as THREE from 'https://unpkg.com/three/build/three.module.js';
import { OrbitControls } from 'https://unpkg.com/three/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'https://unpkg.com/three/examples/jsm/loaders/GLTFLoader.js'; 

const renderer = new THREE.WebGLRenderer({alpha: true});
renderer.setClearColor( 0x000000, 0 );

const fov = 45;
const aspect = 2;
const near = 0.1;
const far = 500;
const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
camera.position.z = 30;

const scene = new THREE.Scene();
// scene.background = new THREE.Color( 0x131417)




const cameraPole = new THREE.Object3D();
scene.add(cameraPole);
cameraPole.add(camera);

{
  const color = 0xFFFFFF;
  const intensity = 1;
  const light = new THREE.DirectionalLight(color, intensity);
  light.position.set(-1, 2, 4);
  camera.add(light);
}

const boxWidth = 0.04;
const boxHeight = 0.04;
const boxDepth = 0.04;
const geometry = new THREE.BoxGeometry(boxWidth, boxHeight, boxDepth);

function rand(min, max) {
  if (max === undefined) {
    max = min;
    min = 0;
  }
  return min + (max - min) * Math.random();
}


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



const ambient1 = new THREE.PointLight(0xffffff, 1);
scene.add(ambient1);
ambient1.position.set(0, 0, 0);



// const loader = new GLTFLoader();
// loader.load('js/scene.gltf', function(gltf) {
//   scene.add( gltf.scene );
// }, undefined, function(error) {
//     console.error( error );
//   });

const controls = new OrbitControls( camera, renderer.domElement);
// camera.position.set( 0, 20, 100 );
controls.update();


const numObjects = 100;
for (let i = 0; i < numObjects; ++i) {
  const material = new THREE.MeshPhongMaterial( { 
    color: 'white' 
  } );
  
 const cube = new THREE.Mesh( geometry, material );
 scene.add( cube );

 cube.position.set(rand(-20, 20), rand(-20, 20), rand(-20, 20));
 cube.rotation.set(rand(Math.PI), rand(Math.PI), 0);
 cube.scale.set(rand(3, 6), rand(3, 6), rand(3, 6));

}

const animate = function () {
  requestAnimationFrame( animate );

  // cube.rotation.x += 0.01;
  // cube.rotation.y += 0.01;
  cameraPole.rotation.y += 0.001;

  renderer.render( scene, camera );
};

animate();
