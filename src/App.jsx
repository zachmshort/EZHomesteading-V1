import React, { Suspense } from "react";

import { Outlet } from 'react-router-dom';
import './App.css';
// import ModelViewer from './components/ModelViewer';

function App() {
  return (
    <>
      <Outlet />
      {/*3d model*/} 
      {/* <ModelViewer modelPath={"/3d/garden.glb"} /> */}
    </>
  )
}

export default App
