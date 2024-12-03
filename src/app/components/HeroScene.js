'use client'; // Ensure this is a client-side component

import { useEffect } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'; 
export default function HeroScene() {
  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.getElementById('threejs-container').appendChild(renderer.domElement);

 
    const light = new THREE.AmbientLight(0x404040, 1); // Ambient light
    scene.add(light);
    
   
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1.5);
    directionalLight.position.set(5, 5, 5).normalize();
    scene.add(directionalLight);

    
    const loader = new GLTFLoader();
    loader.load(
      '/models3/scene.gltf', 
      (gltf) => {
        const model = gltf.scene;
        scene.add(model);

        
        model.scale.set(2, 2, 2);
        model.position.set(0, -1, 0);
      },
      undefined, 
      (error) => {
        console.error('Error loading model:', error);
      }
    );

    
    camera.position.z = 40;

   
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.25;
    controls.screenSpacePanning = false;
    controls.enableZoom = false;

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      controls.update();
      scene.rotation.y += 0.001; 
      renderer.render(scene, camera);
    };
    animate();

   
    const onWindowResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', onWindowResize);

   
    return () => {
      window.removeEventListener('resize', onWindowResize);
      controls.dispose(); 
      renderer.dispose();
    };
  }, []);

  return (
    <div id="threejs-container" style={{ width: '100%', height: '100vh', margin: 0, padding: 0, overflow: 'hidden' }}  />
  );
}
