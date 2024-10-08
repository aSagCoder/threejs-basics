import * as THREE from "three";

const w = window.innerWidth;
const h = window.innerHeight;
const renderer = new THREE.WebGLRenderer({antialias: true});
renderer.setSize(w,h);
document.body.appendChild(renderer.domElement);

const fov = 75; 
const aspect = w / h; 
const near = 0.1;
const far = 10;
const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
camera.position.z = 2;
const scene = new THREE.Scene();

const geo = new THREE.IcosahedronGeometry(1.0, 3); //change the values here to increase or decrease the details of the mesh 
const mat = new THREE.MeshStandardMaterial({
    color: 0xffff, 
    flatShading: true
});

const mesh = new THREE.Mesh(geo, mat); 
scene.add(mesh);

const hemiLight = new THREE.HemisphereLight(0xffff, 0x000000); 
scene.add(hemiLight);


function animate(t = 0)
{
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}
animate();
