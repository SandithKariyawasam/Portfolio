import React, { useRef, useContext } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { ThemeContext } from '../../context/ThemeContext'

function SpinningBox() {
  const ref = useRef()
  const { theme } = useContext(ThemeContext);

  // Rotate the box every animation frame
  useFrame(() => {
    ref.current.rotation.x += 0.01
    ref.current.rotation.y += 0.01
  })

  return (
    <mesh ref={ref} scale={1.5}>
      <boxGeometry args={[2.5, 2.5, 2.5]} />   {/* width, height, depth */}
      <meshStandardMaterial color={theme.threeDColor || '#4270f4'} metalness={0.0} roughness={0.3} />
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
      camera={{ position: [0, 0, 6] }}
    >
      <ambientLight intensity={0.6} />
      <directionalLight position={[2, 2, 3]} />

      <SpinningBox />

      <OrbitControls enableZoom={false} />
    </Canvas>
  )
}