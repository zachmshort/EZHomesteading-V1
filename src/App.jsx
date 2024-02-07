import './App.css'
import React, { Suspense } from "react";
import ModelViewer from './components/ModelViewer';

function App() {
  return (
    <>
      <ModelViewer scale={40} modelPath={"/3d/garden.glb"} />
    </>
  )
}

export default App
