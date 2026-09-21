"use client";

import {
  ContactShadows,
  Environment,
  Float,
  PerspectiveCamera,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import type { RefObject } from "react";
import * as THREE from "three";

type HeroSceneProps = {
  tvRef: RefObject<THREE.Group | null>;
};

function TVModel({ tvRef }: { tvRef: RefObject<THREE.Group | null> }) {
  return (
    <group ref={tvRef}>
      {/* TV outer body */}
      <mesh castShadow receiveShadow>
        <boxGeometry args={[5.8, 3.45, 0.18]} />
        <meshPhysicalMaterial
          color="#05060a"
          metalness={0.82}
          roughness={0.19}
          clearcoat={0.65}
          clearcoatRoughness={0.16}
        />
      </mesh>

      {/* Front bezel */}
      <mesh position={[0, 0, 0.105]}>
        <boxGeometry args={[5.68, 3.33, 0.035]} />
        <meshPhysicalMaterial
          color="#0a0b10"
          metalness={0.28}
          roughness={0.18}
          clearcoat={0.85}
          clearcoatRoughness={0.12}
        />
      </mesh>

      {/* Screen */}
      <mesh position={[0, 0, 0.13]}>
        <boxGeometry args={[5.45, 3.08, 0.025]} />
        <meshPhysicalMaterial
          color="#09112c"
          metalness={0.06}
          roughness={0.1}
          clearcoat={1}
          clearcoatRoughness={0.08}
          emissive="#162574"
          emissiveIntensity={0.22}
        />
      </mesh>

      {/* Screen glass reflection */}
      <mesh position={[-1.35, 0.35, 0.15]} rotation={[0, 0, -0.2]}>
        <planeGeometry args={[0.95, 3.7]} />
        <meshBasicMaterial
          color="#ffffff"
          transparent
          opacity={0.045}
          depthWrite={false}
        />
      </mesh>

      {/* Rear mounting plate */}
      <mesh position={[0, 0, -0.2]} castShadow>
        <boxGeometry args={[1.65, 1.7, 0.14]} />
        <meshPhysicalMaterial
          color="#171a20"
          metalness={0.9}
          roughness={0.23}
        />
      </mesh>

      {/* Horizontal mount rail */}
      <mesh position={[0, 0, -0.31]} castShadow>
        <boxGeometry args={[2.45, 0.12, 0.13]} />
        <meshPhysicalMaterial
          color="#272b32"
          metalness={0.96}
          roughness={0.19}
        />
      </mesh>

      {/* Vertical wall bracket */}
      <mesh position={[0, 0, -0.43]} castShadow>
        <boxGeometry args={[0.15, 2.15, 0.17]} />
        <meshPhysicalMaterial
          color="#292d34"
          metalness={0.97}
          roughness={0.2}
        />
      </mesh>

      {/* Bottom support detail */}
      <mesh position={[0, -0.83, -0.35]} castShadow>
        <boxGeometry args={[1.38, 0.1, 0.11]} />
        <meshPhysicalMaterial
          color="#20242a"
          metalness={0.9}
          roughness={0.23}
        />
      </mesh>

      {/* Wall anchors */}
      {[-0.58, 0.58].map((x) => (
        <mesh key={x} position={[x, 0.55, -0.51]} castShadow>
          <cylinderGeometry args={[0.06, 0.06, 0.18, 18]} />
          <meshPhysicalMaterial
            color="#464b53"
            metalness={0.96}
            roughness={0.18}
          />
        </mesh>
      ))}

      {[-0.58, 0.58].map((x) => (
        <mesh key={`bottom-${x}`} position={[x, -0.55, -0.51]} castShadow>
          <cylinderGeometry args={[0.06, 0.06, 0.18, 18]} />
          <meshPhysicalMaterial
            color="#464b53"
            metalness={0.96}
            roughness={0.18}
          />
        </mesh>
      ))}
    </group>
  );
}

function Wall() {
  return (
    <group>
      {/* Main architectural wall */}
      <mesh position={[0, 0, -0.75]} receiveShadow>
        <boxGeometry args={[18, 12, 0.3]} />
        <meshPhysicalMaterial
          color="#cfd3d8"
          roughness={0.92}
          metalness={0.02}
        />
      </mesh>

      {/* Recess behind television */}
      <mesh position={[0, 0, -0.56]} receiveShadow>
        <boxGeometry args={[7.2, 4.5, 0.08]} />
        <meshPhysicalMaterial
          color="#b7bcc4"
          roughness={0.94}
          metalness={0.01}
        />
      </mesh>

      {/* Architectural accent strip */}
      <mesh position={[0, -2.35, -0.55]}>
        <boxGeometry args={[8.5, 0.04, 0.04]} />
        <meshBasicMaterial color="#aeb3bb" />
      </mesh>
    </group>
  );
}

function Floor() {
  return (
    <mesh
      position={[0, -3.4, -0.2]}
      rotation={[-Math.PI / 2, 0, 0]}
      receiveShadow
    >
      <planeGeometry args={[20, 16]} />
      <meshPhysicalMaterial color="#b7bcc3" roughness={0.86} metalness={0.03} />
    </mesh>
  );
}

function Scene({ tvRef }: { tvRef: RefObject<THREE.Group | null> }) {
  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 0.15, 9.2]} fov={36} />

      <ambientLight intensity={1.1} />

      <directionalLight
        position={[4, 6, 7]}
        intensity={2.6}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />

      {/* DTV blue rim light */}
      <pointLight
        position={[-4, 1.4, 4]}
        intensity={9}
        distance={12}
        color="#2a358f"
      />

      {/* Cool blue fill */}
      <pointLight
        position={[4, -1, 3]}
        intensity={5}
        distance={10}
        color="#5360c2"
      />

      <Environment preset="city" environmentIntensity={0.32} />

      <Wall />
      <Floor />

      <Float speed={0.65} rotationIntensity={0.025} floatIntensity={0.08}>
        <TVModel tvRef={tvRef} />
      </Float>

      <ContactShadows
        position={[0, -2.98, 0]}
        opacity={0.35}
        scale={11}
        blur={2.8}
        far={6}
      />
    </>
  );
}

export function HeroScene({ tvRef }: HeroSceneProps) {
  return (
    <div className="absolute inset-0">
      <Canvas
        shadows
        dpr={[1, 1.75]}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "high-performance",
        }}
      >
        <Scene tvRef={tvRef} />
      </Canvas>
    </div>
  );
}
