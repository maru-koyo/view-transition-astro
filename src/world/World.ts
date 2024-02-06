import * as THREE from "three";

const canvas = { init };
function init() {
  const canvasEl = document.querySelector("#world")!;
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );

  const renderer = new THREE.WebGLRenderer({
    canvas: canvasEl,
    antialias: true,
    precision: "mediump",
  });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setClearColor(0xffffff, 1);

  const geometry = new THREE.BoxGeometry(1, 1, 1);
  const material = new THREE.ShaderMaterial({
    vertexShader: `
    void main() {
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0);
    }
    `,
    fragmentShader: `
    void main() {
      gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);
    }
    `,
  });
  const cube = new THREE.Mesh(geometry, material);
  scene.add(cube);

  camera.position.z = 5;

  function animate() {
    requestAnimationFrame(animate);

    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    renderer.render(scene, camera);
  }

  animate();
}

export default canvas;
