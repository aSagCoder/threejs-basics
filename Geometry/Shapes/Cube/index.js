import * as THREE from "three";
import { OrbitControls } from "jsm/controls/OrbitControls.js";

console.log(`THREE REVISION: %c${THREE.REVISION}`, "color: #FFFF00");

const w = window.innerWidth;
const h = window.innerHeight;

// Create scene and camera
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, w / h, 0.1, 1000);
camera.position.z = 5;

// Create renderer
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(w, h);
document.body.appendChild(renderer.domElement);

// Add OrbitControls
new OrbitControls(camera, renderer.domElement);

// Create geometry and material, then mesh them together
const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshStandardMaterial({
    color: 0xffff00,
});
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

// Add a hemisphere light to the scene
const hemiLight = new THREE.HemisphereLight(0xffffff, 0x444444);
hemiLight.position.set(0, 20, 0);
scene.add(hemiLight);

function animate() {
    requestAnimationFrame(animate);

    // Rotate the cube for some animation
    cube.rotation.x += 0.001;
    cube.rotation.y += 0.002;

    // Render the scene with the camera
    renderer.render(scene, camera);
}

// Start the animation loop
animate();
