import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

import Meshes from "./Meshes";

export default function World() {
  return (
    <Canvas>
      <OrbitControls />
      <Meshes />
    </Canvas>
  );
}
