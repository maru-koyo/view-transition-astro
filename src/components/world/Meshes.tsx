import { useFrame } from "@react-three/fiber";
import { useState } from "react";
import { motion } from "framer-motion-3d";
export default function Meshes() {
  const [active, setActive] = useState(false);
  useFrame(() => {});
  const vertexShader = `
  varying vec2 vUv;
  void main(){
  vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;
  const fragmentShader = `
  varying vec2 vUv;
  void main(){
    gl_FragColor = vec4(vUv,1.,1.);
  }
`;

  return (
    <>
      <motion.mesh
        transition={{
          duration: 0.3,
        }}
        animate={{ scale: active ? 1.25 : 1 }}
        onClick={() => setActive(!active)}
      >
        <planeGeometry args={[4, 3]} />
        <shaderMaterial
          vertexShader={vertexShader}
          fragmentShader={fragmentShader}
        />
      </motion.mesh>
    </>
  );
}
