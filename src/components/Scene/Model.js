import React, { useRef, useState, useEffect } from "react";
import { MeshTransmissionMaterial, useGLTF, Text } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useControls } from "leva";
import { Leva } from "leva";

export default function Model() {
  const { nodes } = useGLTF("/medias/smile.glb");
  const smile = useRef(null);

  // State for responsive scale
  const [scale, setScale] = useState(1);

  // Set up rotation animation
  useFrame(() => {
    smile.current.rotation.x += 0.02;
  });

  // Leva controls for material properties
  const materialProps = useControls({
    thickness: { value: 0.35, min: 0, max: 3, step: 0.05 },
    roughness: { value: 0.1, min: 0, max: 1, step: 0.1 },
    transmission: { value: 1, min: 0, max: 1, step: 0.1 },
    ior: { value: 1.2, min: 0, max: 3, step: 0.1 },
    chromaticAberration: { value: 0.52, min: 0, max: 1 },
    backside: { value: true },
  });

  // Update scale based on window width
  useEffect(() => {
    const updateScale = () => {
      const width = window.innerWidth;
      setScale(width < 768 ? 2.5 : 4.5); // Smaller scale on mobile, default on desktop
    };

    // Initial scale setting
    updateScale();

    // Listen to resize events
    window.addEventListener("resize", updateScale);
    return () => window.removeEventListener("resize", updateScale);
  }, []);

  return (
    <group position={[0, 1, 0]} scale={scale}>
      <Leva hidden />
      <Text
        font={"/fonts/PPNeueMontreal-Bold.otf"}
        position={[0, 0, -1]}
        fontSize={0.5}
        color="white"
        anchorX="center"
        anchorY="middle"
      >
        Ciao!
      </Text>
      <mesh ref={smile} {...nodes.Cylinder}>
        <MeshTransmissionMaterial {...materialProps} />
      </mesh>
    </group>
  );
}
