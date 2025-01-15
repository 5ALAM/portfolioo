import React, { Suspense, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF, useAnimations } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Earth = () => {
  const earth = useGLTF("./planet/scene.gltf");
  const { actions } = useAnimations(earth.animations, earth.scene);

  useEffect(() => {
    if (actions) {
      actions?.[Object.keys(actions)[0]]?.play(); // Play the first animation
    }
  }, [actions]);

  return (
    <primitive object={earth.scene} scale={2.5} position-y={-1} rotation-y={0} /> // Lower the model
  );
};

const EarthCanvas = () => {
  return (
    <Canvas
      frameloop="demand"
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-10, 5, 14], // Adjusted for a slight top-down view
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enableZoom={true} // Allow zoom
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 4} // Slightly lower so it's not fully top-down
        />

        {/* Lighting */}
        <ambientLight intensity={0.5} />
        <directionalLight
          position={[5, 5, 5]}
          intensity={1}
          castShadow={true}
        />

        <Earth />
        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default EarthCanvas;
