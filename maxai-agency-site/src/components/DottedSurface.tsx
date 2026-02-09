"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export function DottedSurface({
  className = "",
}: {
  className?: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Respect reduced motion + avoid heavy WebGL on tiny screens.
    // On small screens we keep a CSS fallback background (see return JSX below).
    const prefersReduced = window.matchMedia?.("(prefers-reduced-motion: reduce)")
      .matches;
    const isSmall = window.innerWidth < 640;
    if (prefersReduced || isSmall) return;

    const SEPARATION = 120;
    const AMOUNTX = 44;
    const AMOUNTY = 64;

    const scene = new THREE.Scene();
    scene.fog = new THREE.Fog(0x050507, 1600, 6500);

    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      1,
      10000
    );
    camera.position.set(0, 340, 1180);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(scene.fog.color, 0);
    container.appendChild(renderer.domElement);

    // Geometry
    const positions: number[] = [];
    const colors: number[] = [];

    const geometry = new THREE.BufferGeometry();
    for (let ix = 0; ix < AMOUNTX; ix++) {
      for (let iy = 0; iy < AMOUNTY; iy++) {
        const x = ix * SEPARATION - (AMOUNTX * SEPARATION) / 2;
        const y = 0;
        const z = iy * SEPARATION - (AMOUNTY * SEPARATION) / 2;
        positions.push(x, y, z);

        // Slightly tinted dots (futuristic) — keep subtle.
        const t = (ix / AMOUNTX) * 0.7 + (iy / AMOUNTY) * 0.3;
        const r = 160 + Math.floor(60 * Math.sin(t * Math.PI));
        const g = 170 + Math.floor(50 * Math.sin(t * Math.PI * 1.3));
        const b = 230 + Math.floor(25 * Math.sin(t * Math.PI * 1.7));
        colors.push(r / 255, g / 255, b / 255);
      }
    }

    geometry.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(positions, 3)
    );
    geometry.setAttribute("color", new THREE.Float32BufferAttribute(colors, 3));

    const material = new THREE.PointsMaterial({
      size: 6,
      vertexColors: true,
      transparent: true,
      opacity: 0.45,
      sizeAttenuation: true,
      depthWrite: false,
    });

    const points = new THREE.Points(geometry, material);
    scene.add(points);

    let count = 0;
    let raf = 0;

    const animate = () => {
      raf = requestAnimationFrame(animate);

      const posAttr = geometry.attributes.position as THREE.BufferAttribute;
      const arr = posAttr.array as Float32Array;

      let i = 0;
      for (let ix = 0; ix < AMOUNTX; ix++) {
        for (let iy = 0; iy < AMOUNTY; iy++) {
          const idx = i * 3;
          arr[idx + 1] =
            Math.sin((ix + count) * 0.28) * 28 +
            Math.sin((iy + count) * 0.36) * 28;
          i++;
        }
      }
      posAttr.needsUpdate = true;

      points.rotation.y = Math.sin(count * 0.02) * 0.05;
      renderer.render(scene, camera);
      count += 0.08;
    };

    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("resize", onResize);
    animate();

    return () => {
      window.removeEventListener("resize", onResize);
      cancelAnimationFrame(raf);
      scene.remove(points);
      geometry.dispose();
      material.dispose();
      renderer.dispose();
      if (renderer.domElement.parentElement === container) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`pointer-events-none fixed inset-0 z-0 ${className}`}
    >
      {/* CSS fallback (mobile / reduced motion): subtle futuristic gradient */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-70"
        style={{
          background:
            "radial-gradient(900px 600px at 20% 10%, rgba(99,102,241,0.22), transparent 60%), radial-gradient(700px 520px at 80% 18%, rgba(236,72,153,0.18), transparent 55%), radial-gradient(700px 520px at 55% 90%, rgba(34,211,238,0.14), transparent 60%)",
        }}
      />
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.32]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.12) 1px, transparent 0)",
          backgroundSize: "22px 22px",
          maskImage:
            "radial-gradient(700px 520px at 30% 20%, black 35%, transparent 78%)",
          WebkitMaskImage:
            "radial-gradient(700px 520px at 30% 20%, black 35%, transparent 78%)",
        }}
      />
    </div>
  );
}
