import React, { useRef, useContext, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { ThemeContext } from '../../context/ThemeContext'

// --- DNA Helix ---
function DNAHelix() {
  const group = useRef()
  const { theme } = useContext(ThemeContext)
  const color = theme.threeDColor || '#4270f4'

  const helixPoints = useMemo(() => {
    const strand1 = [], strand2 = []
    for (let i = 0; i < 40; i++) {
      const t = (i / 40) * Math.PI * 4
      const radius = 1.0
      strand1.push({ x: Math.cos(t) * radius, y: i * 0.18 - 3.5, z: Math.sin(t) * radius })
      strand2.push({ x: Math.cos(t + Math.PI) * radius, y: i * 0.18 - 3.5, z: Math.sin(t + Math.PI) * radius })
    }
    return { strand1, strand2 }
  }, [])

  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    group.current.rotation.y = t * 0.18
  })

  return (
    <group ref={group} position={[-4.5, 0, -2]}>
      {helixPoints.strand1.map((p, i) => (
        <mesh key={`s1-${i}`} position={[p.x, p.y, p.z]}>
          <sphereGeometry args={[0.09, 8, 8]} />
          <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.6} />
        </mesh>
      ))}
      {helixPoints.strand2.map((p, i) => (
        <mesh key={`s2-${i}`} position={[p.x, p.y, p.z]}>
          <sphereGeometry args={[0.09, 8, 8]} />
          <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.6} transparent opacity={0.7} />
        </mesh>
      ))}
      {helixPoints.strand1.filter((_, i) => i % 3 === 0).map((p, i) => {
        const q = helixPoints.strand2[i * 3]
        const mid = { x: (p.x + q.x) / 2, y: (p.y + q.y) / 2, z: (p.z + q.z) / 2 }
        const len = Math.sqrt((p.x - q.x) ** 2 + (p.y - q.y) ** 2 + (p.z - q.z) ** 2)
        return (
          <mesh key={`link-${i}`} position={[mid.x, mid.y, mid.z]}>
            <boxGeometry args={[len, 0.025, 0.025]} />
            <meshBasicMaterial color={color} transparent opacity={0.4} />
          </mesh>
        )
      })}
    </group>
  )
}

// --- Central Pulsing Orb ---
function CentralOrb() {
  const ref = useRef()
  const ringRef = useRef()
  const { theme } = useContext(ThemeContext)
  const color = theme.threeDColor || '#4270f4'

  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    const pulse = 1.0 + Math.sin(t * 1.5) * 0.08
    ref.current.scale.setScalar(pulse)
    ringRef.current.rotation.x = t * 0.4
    ringRef.current.rotation.z = t * 0.3
  })

  return (
    <group position={[1.5, 0, 0]}>
      <mesh ref={ref}>
        <sphereGeometry args={[0.85, 32, 32]} />
        <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.4} metalness={0.8} roughness={0.1} transparent opacity={0.6} />
      </mesh>
      <mesh>
        <sphereGeometry args={[0.4, 16, 16]} />
        <meshBasicMaterial color="#ffffff" transparent opacity={0.15} />
      </mesh>
      <mesh ref={ringRef}>
        <torusGeometry args={[1.4, 0.03, 8, 60]} />
        <meshBasicMaterial color={color} transparent opacity={0.5} />
      </mesh>
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[1.8, 0.02, 8, 60]} />
        <meshBasicMaterial color={color} transparent opacity={0.25} />
      </mesh>
    </group>
  )
}

// --- Orbiting Gems ---
function OrbitingGems() {
  const group = useRef()
  const { theme } = useContext(ThemeContext)
  const color = theme.threeDColor || '#4270f4'

  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    group.current.rotation.y = t * 0.25
    group.current.rotation.x = t * 0.08
  })

  const gems = useMemo(() =>
    Array.from({ length: 6 }, (_, i) => ({
      angle: (i / 6) * Math.PI * 2,
      radius: 3.2,
      elevation: (Math.random() - 0.5) * 1.5
    })), []
  )

  return (
    <group ref={group} position={[1.5, 0, 0]}>
      {gems.map((g, i) => (
        <mesh key={i} position={[Math.cos(g.angle) * g.radius, g.elevation, Math.sin(g.angle) * g.radius]}>
          <octahedronGeometry args={[0.22, 0]} />
          <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.5} metalness={0.4} roughness={0.1} />
        </mesh>
      ))}
    </group>
  )
}

// --- Animated Star ---
function AnimatedStar({ x, y, z, speed, offset, size, color }) {
  const ref = useRef()
  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    ref.current.position.y = y + Math.sin(t * speed + offset) * 0.4
  })
  return (
    <mesh ref={ref} position={[x, y, z]}>
      <sphereGeometry args={[size, 6, 6]} />
      <meshBasicMaterial color={color} transparent opacity={0.7} />
    </mesh>
  )
}

// --- Floating Constellation Cloud ---
function ConstellationCloud() {
  const group = useRef()
  const { theme } = useContext(ThemeContext)
  const color = theme.threeDColor || '#4270f4'
  const count = 35

  const points = useMemo(() =>
    Array.from({ length: count }, () => ({
      x: (Math.random() - 0.5) * 18,
      y: (Math.random() - 0.5) * 12,
      z: (Math.random() - 0.5) * 8 - 3,
      speed: 0.1 + Math.random() * 0.25,
      offset: Math.random() * Math.PI * 2,
      size: 0.04 + Math.random() * 0.07
    })), []
  )

  const lineGeometry = useMemo(() => {
    const verts = []
    for (let i = 0; i < points.length; i++) {
      for (let j = i + 1; j < points.length; j++) {
        const dx = points[i].x - points[j].x
        const dy = points[i].y - points[j].y
        const dz = points[i].z - points[j].z
        const dist = Math.sqrt(dx * dx + dy * dy + dz * dz)
        if (dist < 4.5) {
          verts.push(points[i].x, points[i].y, points[i].z)
          verts.push(points[j].x, points[j].y, points[j].z)
        }
      }
    }
    const geo = new THREE.BufferGeometry()
    geo.setAttribute('position', new THREE.Float32BufferAttribute(verts, 3))
    return geo
  }, [points])

  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    group.current.rotation.y = t * 0.04
  })

  return (
    <group ref={group}>
      <lineSegments geometry={lineGeometry}>
        <lineBasicMaterial color={color} transparent opacity={0.12} />
      </lineSegments>
      {points.map((p, i) => (
        <AnimatedStar key={i} {...p} color={color} />
      ))}
    </group>
  )
}

// --- Large Background Torus ---
function BackgroundTorus() {
  const ref = useRef()
  const { theme } = useContext(ThemeContext)
  const color = theme.threeDColor || '#4270f4'

  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    ref.current.rotation.x = t * 0.06
    ref.current.rotation.z = t * 0.04
  })

  return (
    <mesh ref={ref} position={[1.5, 0, -4]}>
      <torusGeometry args={[5, 0.08, 12, 100]} />
      <meshBasicMaterial color={color} transparent opacity={0.15} />
    </mesh>
  )
}

export default function ThreeBackground() {
  return (
    <Canvas
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: -1,
        width: '100%',
        height: '100%',
      }}
      camera={{ position: [0, 0, 9] }}
    >
      <ambientLight intensity={0.4} />
      <directionalLight position={[5, 5, 5]} intensity={1.0} />
      <pointLight position={[0, 0, 3]} intensity={0.8} color={0x4466ff} />
      <pointLight position={[-5, -5, -3]} intensity={0.3} color={0x8844ff} />

      <BackgroundTorus />
      <ConstellationCloud />
      <DNAHelix />
      <CentralOrb />
      <OrbitingGems />
    </Canvas>
  )
}