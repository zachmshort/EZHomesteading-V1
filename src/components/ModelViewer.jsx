import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import GltfModel from "./GltfModel";

const ModelViewer = ({ modelPath, scale = 1, position = [0, 0, 0]}) => {
  return (
    <Canvas style={{ width: '100vw', height: '100vh' }} camera={{ position: [-8, 8, 8], rotation: [-0.3, 0, 0] }}>
      <pointLight intensity={50} position={[6,4,-7]} />
      <pointLight intensity={50} position={[-1, 5, 5]}/>
      <ambientLight intensity={.01}/>
      <Suspense fallback={null}>
        <GltfModel modelPath={modelPath} scale={scale} position={position} />
        <OrbitControls/>
      </Suspense>
    </Canvas>
  );
};

export default ModelViewer;