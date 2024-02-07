import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import GltfModel from "./GltfModel";

const ModelViewer = ({ modelPath, scale = 100, position = [0, 0, 0], cameraPosition = [0, 0, 1000] }) => {
  return (
    <Canvas style={{ width: '100vw', height: '100vh' }}>
      <ambientLight intensity={1} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <pointLight position={[-10, -10, -10]} />
      <Suspense fallback={null}>
        <GltfModel modelPath={modelPath} scale={scale} position={position} />
        <OrbitControls 
        enableZoom={true}
        enableRotate={true}
        enablePan={true}
        enableDamping={true}
        dampingFactor={0.1}
        minDistance={1}
        maxDistance={1000}
        minPolarAngle={0}
        maxPolarAngle={Math.PI / 2}
        target={[0, 0, 0]} // Target position (center of the scene)
        initialPosition={cameraPosition} // Initial camera position
        />
      </Suspense>
    </Canvas>
  );
};

export default ModelViewer;