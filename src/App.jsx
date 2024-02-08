import React, { Suspense } from "react";
// import ModelViewer from './components/ModelViewer';
import ConsumerNavBar from './components/ConsumerNavBar';
import './App.css';

function App() {
  return (
    <>
      <ConsumerNavBar />
      {/*3d model*/} 
      {/* <ModelViewer modelPath={"/3d/garden.glb"} /> */}
    </>
  )
}

export default App
