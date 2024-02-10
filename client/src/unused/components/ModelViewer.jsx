import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import GltfModel from "./pages/GltfModel";
import * as THREE from 'three';

const ModelViewer = ({ modelPath, scale = 1, position = [0, 0, 0]}) => {
  return (
    <Canvas style={{ width: '100vw', height: '100vh' }} camera={{ position: [-8, 8, 8], rotation: [-0.3, 0, 0] }}>
      <pointLight intensity={.4} position={[5,10,-1]} color={new THREE.Color(255, 220, 100)}/>
      <pointLight intensity={.75} position={[-1, 5, 7]} color={new THREE.Color(255, 220, 100)}/>
      {/* <ambientLight intensity={.2}/> */}
      <Suspense fallback={null}>
        <GltfModel modelPath={modelPath} scale={scale} position={position} />
        <OrbitControls/>
      </Suspense>
    </Canvas>
  );
};

export default ModelViewer;
