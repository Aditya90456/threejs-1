import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
const scene = new THREE.Scene();

      // Camera set kiya
      const camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
      );
      camera.position.z = 5;

      // Renderer setup
      const renderer = new THREE.WebGLRenderer();
      renderer.setSize(window.innerWidth, window.innerHeight);
      document.body.appendChild(renderer.domElement);

      // Ek cube add kiya
      const geometry = new THREE.BoxGeometry();
      const material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true });
      const cube = new THREE.Mesh(geometry, material);
      scene.add(cube);

      // Axis helper (X = red, Y = green, Z = blue) 
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true; // Damping effect
controls.minAzimuthAngle = -Math.PI / 4; // Minimum horizontal angle
controls.maxAzimuthAngle = Math.PI / 4;

      // Animation loop
      function animate() { 
    requestAnimationFrame(animate);
        controls.update(); // Update controls
    renderer.render(scene, camera);
      }
      animate();