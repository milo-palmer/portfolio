/* eslint-disable react/no-unknown-property */
import { useGLTF } from '@react-three/drei'
import { useFrame, useThree } from '@react-three/fiber'
import { useRef } from 'react'

function ReactLogo() {
  const logo = useGLTF('/models/react_logo.glb')
  const model = useRef()
  const { camera } = useThree()
  camera.position.z = 4
  let mouse = {}

  window.addEventListener('mousemove', (event) => {
    mouse = {
      X: event.clientX / 1400 - 0.7,
      Y: event.clientY / 700 - 0.5,
    }
  })

  useFrame((state, delta) => {
    model.current.rotation.x = mouse.Y
    model.current.rotation.y = mouse.X
  })

  return (
    <>
      <ambientLight />
      <primitive ref={model} object={logo.scene} />
    </>
  )
}

export default ReactLogo
