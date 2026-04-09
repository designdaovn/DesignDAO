"use client"

import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import { Float } from "@react-three/drei"
import type * as THREE from "three"

export function House3D() {
  const groupRef = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.1 + state.pointer.x * 0.2
      groupRef.current.rotation.x = state.pointer.y * 0.1
    }
  })

  return (
    <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
      <group ref={groupRef} position={[0, -0.5, 0]} scale={1.2}>
        {/* Foundation/Platform */}
        <mesh position={[0, -0.6, 0]}>
          <boxGeometry args={[3.5, 0.2, 3]} />
          <meshStandardMaterial color="#2d3436" />
        </mesh>

        {/* Main House Body */}
        <mesh position={[0, 0.3, 0]}>
          <boxGeometry args={[2.5, 1.6, 2]} />
          <meshStandardMaterial color="#f9ca24" />
        </mesh>

        {/* Glass Windows Front */}
        <mesh position={[0, 0.3, 1.01]}>
          <boxGeometry args={[2.2, 1.3, 0.05]} />
          <meshStandardMaterial color="#74b9ff" transparent opacity={0.6} metalness={0.8} roughness={0.1} />
        </mesh>

        {/* Glass Windows Side */}
        <mesh position={[1.26, 0.3, 0]}>
          <boxGeometry args={[0.05, 1.3, 1.7]} />
          <meshStandardMaterial color="#74b9ff" transparent opacity={0.6} metalness={0.8} roughness={0.1} />
        </mesh>

        {/* Window Frames */}
        <mesh position={[0, 0.3, 1.02]}>
          <boxGeometry args={[0.05, 1.4, 0.02]} />
          <meshStandardMaterial color="#2d3436" />
        </mesh>
        <mesh position={[0, 0.3, 1.02]}>
          <boxGeometry args={[2.3, 0.05, 0.02]} />
          <meshStandardMaterial color="#2d3436" />
        </mesh>

        {/* Roof Base */}
        <mesh position={[0, 1.3, 0]} rotation={[0, 0, 0]}>
          <boxGeometry args={[2.8, 0.15, 2.3]} />
          <meshStandardMaterial color="#636e72" />
        </mesh>

        {/* Roof Slanted Part 1 */}
        <mesh position={[-0.5, 1.7, 0]} rotation={[0, 0, Math.PI * 0.12]}>
          <boxGeometry args={[1.6, 0.1, 2.3]} />
          <meshStandardMaterial color="#2d3436" />
        </mesh>

        {/* Roof Slanted Part 2 */}
        <mesh position={[0.7, 1.55, 0]} rotation={[0, 0, -Math.PI * 0.08]}>
          <boxGeometry args={[1.4, 0.1, 2.3]} />
          <meshStandardMaterial color="#2d3436" />
        </mesh>

        {/* Solar Panels */}
        <group position={[-0.5, 1.85, 0]} rotation={[0, 0, Math.PI * 0.12]}>
          {[-0.5, 0, 0.5].map((z, i) => (
            <mesh key={i} position={[0, 0.05, z * 1.3]}>
              <boxGeometry args={[1.2, 0.08, 0.55]} />
              <meshStandardMaterial color="#1e3a5f" metalness={0.9} roughness={0.2} />
            </mesh>
          ))}
          {/* Solar Panel Grid Lines */}
          {[-0.5, 0, 0.5].map((z, i) => (
            <group key={`grid-${i}`} position={[0, 0.1, z * 1.3]}>
              {[-0.4, -0.2, 0, 0.2, 0.4].map((x, j) => (
                <mesh key={j} position={[x, 0, 0]}>
                  <boxGeometry args={[0.02, 0.01, 0.5]} />
                  <meshStandardMaterial color="#0a1628" />
                </mesh>
              ))}
            </group>
          ))}
        </group>

        {/* Terrace/Deck */}
        <mesh position={[1.5, -0.4, 0]}>
          <boxGeometry args={[0.8, 0.1, 2]} />
          <meshStandardMaterial color="#8b7355" />
        </mesh>

        {/* Terrace Railing Posts */}
        {[-0.8, 0, 0.8].map((z, i) => (
          <mesh key={i} position={[1.85, 0, z]}>
            <boxGeometry args={[0.05, 0.8, 0.05]} />
            <meshStandardMaterial color="#2d3436" />
          </mesh>
        ))}

        {/* Terrace Railing Top */}
        <mesh position={[1.85, 0.35, 0]}>
          <boxGeometry args={[0.08, 0.05, 2]} />
          <meshStandardMaterial color="#2d3436" />
        </mesh>

        {/* Plants/Grass */}
        {[
          [-1.5, -0.45, 0.8],
          [-1.5, -0.45, -0.8],
          [1.5, -0.45, 1.2],
        ].map((pos, i) => (
          <mesh key={i} position={pos as [number, number, number]}>
            <sphereGeometry args={[0.2, 8, 8]} />
            <meshStandardMaterial color="#27ae60" />
          </mesh>
        ))}

        {/* Door */}
        <mesh position={[-0.6, -0.1, 1.01]}>
          <boxGeometry args={[0.5, 0.9, 0.05]} />
          <meshStandardMaterial color="#2d3436" />
        </mesh>
      </group>
    </Float>
  )
}
