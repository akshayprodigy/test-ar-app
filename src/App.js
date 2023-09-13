import React from 'react';
import { Canvas } from '@react-three/fiber';
import { XR, useXR } from '@react-three/xr';
import * as THREE from 'three';

function GroundDetector() {
  const { isPresenting } = useXR();

  const handleTap = (event) => {
    if (!isPresenting) return;

    event.hitTest(new THREE.Vector3()).then((hit) => {
      if (hit) {
        placeObjectAt(hit.point);
      }
    });
  };

  const placeObjectAt = (position) => {
    // This is a placeholder. In a real scenario, you'd add the object to the Three.js scene.
    console.log(`Placing object at: ${position.x}, ${position.y}, ${position.z}`);
  };

  return <mesh onClick={handleTap} />;
}

function App() {
  return (
    <Canvas>
      <XR>
        <ambientLight />
        <GroundDetector />
      </XR>
    </Canvas>
  );
}

export default App;