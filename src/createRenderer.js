import 'three';
import getCoords from './getCoords';
// import 'three/OrbitControls';
/* global THREE */

const createRenderer = (container) => {
  const scene = new THREE.Scene();

  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  container.appendChild(renderer.domElement);

  const width = 100;
  const A = 1.6;

  const geometry = new THREE.BoxGeometry( width * A, width, 1 );
  const material = new THREE.MeshBasicMaterial( { color: 0x0000ff } );
  const cubeTemplate = new THREE.Mesh( geometry, material );

  const coords = getCoords(75, A);
  const R = 500;
  
  const positions = coords.map(({ theta, phi }) => {
    const x = R * Math.sin(theta) * Math.cos(phi);
    const y = R * Math.sin(theta) * Math.sin(phi);
    const z = R * Math.cos(theta);
    return new THREE.Vector3(x, y ,z);
  });

  positions.forEach(pos => {
    const cube = cubeTemplate.clone();
    cube.position.copy(pos);
    scene.add(cube);
  });

  const animate = () => {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
  }

  window.camera = camera;

  return animate;
};

export default createRenderer;
