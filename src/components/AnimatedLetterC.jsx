import { useEffect, useRef } from "react";
import * as THREE from "three";
import { FontLoader } from "three/examples/jsm/loaders/FontLoader.js";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry.js";
import fontJson from "three/examples/fonts/helvetiker_bold.typeface.json";

export default function AnimatedLetterC() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;

    if (!container) {
      return undefined;
    }

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(38, 1, 0.1, 100);
    camera.position.set(0, 0.15, 9.5);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.setClearColor(0x000000, 0);
    renderer.domElement.style.width = "100%";
    renderer.domElement.style.height = "100%";
    renderer.domElement.style.display = "block";
    container.appendChild(renderer.domElement);

    const group = new THREE.Group();
    scene.add(group);

    const ambientLight = new THREE.AmbientLight(0xffffff, 1.8);
    scene.add(ambientLight);

    const hemisphereLight = new THREE.HemisphereLight(0xffffff, 0x2a2838, 1.4);
    hemisphereLight.position.set(0, 8, 0);
    scene.add(hemisphereLight);

    const keyLight = new THREE.DirectionalLight(0xffffff, 2.3);
    keyLight.position.set(4, 6, 8);
    keyLight.castShadow = true;
    scene.add(keyLight);

    const rimLight = new THREE.PointLight(0xe2a9f1, 24, 18, 2);
    rimLight.position.set(-5, 1, -3);
    scene.add(rimLight);

    const font = new FontLoader().parse(fontJson);
    const letterGeometry = new TextGeometry("C", {
      font,
      size: 2.45,
      depth: 0.7,
      curveSegments: 18,
      bevelEnabled: true,
      bevelThickness: 0.08,
      bevelSize: 0.06,
      bevelOffset: 0,
      bevelSegments: 8,
    });
    letterGeometry.center();

    const letterMaterial = new THREE.MeshPhysicalMaterial({
      color: "#e2a9f1",
      emissive: "#4b295c",
      emissiveIntensity: 0.45,
      metalness: 0.25,
      roughness: 0.18,
      clearcoat: 1,
      clearcoatRoughness: 0.15,
    });

    const letterMesh = new THREE.Mesh(letterGeometry, letterMaterial);
    letterMesh.castShadow = true;
    letterMesh.receiveShadow = true;
    group.add(letterMesh);

    const haloGeometry = new THREE.TorusGeometry(1.95, 0.06, 16, 120);
    const haloMaterial = new THREE.MeshBasicMaterial({
      color: "#12cd47",
      transparent: true,
      opacity: 0.55,
    });
    const halo = new THREE.Mesh(haloGeometry, haloMaterial);
    halo.position.set(0, -0.1, -0.7);
    halo.rotation.x = 0.35;
    halo.rotation.z = -0.35;
    group.add(halo);

    const orbGeometry = new THREE.SphereGeometry(0.28, 32, 32);
    const orbMaterial = new THREE.MeshStandardMaterial({
      color: "#ff0000",
      emissive: "#ff0000",
      emissiveIntensity: 0.9,
      roughness: 0.35,
      metalness: 0.15,
    });
    const orb = new THREE.Mesh(orbGeometry, orbMaterial);
    orb.position.set(-1.75, 1.2, -1.3);
    group.add(orb);

    const pointer = { x: 0, y: 0 };
    const clock = new THREE.Clock();
    let animationFrameId = 0;

    const resizeRenderer = () => {
      const { clientWidth, clientHeight } = container;
      if (!clientWidth || !clientHeight) {
        return;
      }

      renderer.setSize(clientWidth, clientHeight, false);
      camera.aspect = clientWidth / clientHeight;
      camera.updateProjectionMatrix();
    };

    resizeRenderer();

    const resizeObserver = new ResizeObserver(() => {
      resizeRenderer();
    });
    resizeObserver.observe(container);

    const handlePointerMove = (event) => {
      const rect = container.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width;
      const y = (event.clientY - rect.top) / rect.height;

      pointer.x = (x - 0.5) * 2;
      pointer.y = (y - 0.5) * 2;
    };

    const handlePointerLeave = () => {
      pointer.x = 0;
      pointer.y = 0;
    };

    container.addEventListener("pointermove", handlePointerMove);
    container.addEventListener("pointerleave", handlePointerLeave);

    const animate = () => {
      const elapsed = clock.getElapsedTime();
      const targetRotationX = -pointer.y * 0.28 + Math.sin(elapsed * 0.85) * 0.04;
      const targetRotationY = pointer.x * 0.42 - 0.22;

      group.rotation.x += (targetRotationX - group.rotation.x) * 0.08;
      group.rotation.y += (targetRotationY - group.rotation.y) * 0.08;
      group.position.y = Math.sin(elapsed * 1.4) * 0.12;

      halo.rotation.z += 0.01;
      orb.position.y = 1.2 + Math.sin(elapsed * 2.2) * 0.12;
      orb.position.x = -1.75 + Math.cos(elapsed * 1.7) * 0.08;

      renderer.render(scene, camera);
      animationFrameId = window.requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.cancelAnimationFrame(animationFrameId);
      resizeObserver.disconnect();
      container.removeEventListener("pointermove", handlePointerMove);
      container.removeEventListener("pointerleave", handlePointerLeave);

      group.traverse((child) => {
        if (child.isMesh) {
          child.geometry?.dispose();

          if (Array.isArray(child.material)) {
            child.material.forEach((material) => material.dispose());
          } else {
            child.material?.dispose();
          }
        }
      });

      renderer.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      aria-label="Animacion 3D de la letra C"
      style={{
        width: "100%",
        height: "100%",
        minHeight: 0,
        position: "relative",
        overflow: "hidden",
        cursor: "grab",
      }}
    />
  );
}
