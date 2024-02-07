import './App.css'
import React, { Suspense } from "react";
import ModelViewer from './components/ModelViewer';

function App() {
  return (
    <>
      <ModelViewer modelPath={"/3d/garden.glb"} />
    </>
  )
}

export default App
