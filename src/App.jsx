import React, { Suspense } from "react";
import ModelViewer from './components/ModelViewer';
import NavBar from './components/navBar';
import './App.css';

function App() {
  return (
    <>
      <NavBar />
      <ModelViewer modelPath={"/3d/garden.glb"} />
    </>
  )
}

export default App
