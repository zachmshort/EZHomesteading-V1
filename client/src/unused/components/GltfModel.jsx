import React, { useRef, useState } from "react";
import { useLoader, useFrame } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const GltfModel = ({ modelPath, position = [0, 0, 0] }) => {
  const ref = useRef();
  const gltf = useLoader(GLTFLoader, modelPath);
  const [hovered, hover] = useState(false);

  //rotation
  useFrame((state, delta) => (ref.current.rotation.y += 0.002));
  return (
    <>
      <primitive
        ref={ref}
        object={gltf.scene}
        position={position}
        // scale={hovered ? scale * 1.007 : scale} //scale on hover
        onPointerOver={(event) => hover(true)}
        onPointerOut={(event) => hover(false)}
      />
    </>
  );
};

export default GltfModel;