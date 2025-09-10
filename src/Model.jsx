import {
  Center,
  ContactShadows,
  Environment,
  PerspectiveCamera,
  useGLTF,
} from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import { Suspense } from "react"

function Model({ url, ...props }) {
  const { scene } = useGLTF(url)

  useFrame((state, delta) => {
    scene.rotation.y += delta * 0.2
  })
  return (
    <Suspense fallback={null}>
      <Center>
        <primitive object={scene} {...props} />
        <ContactShadows opacity={0.2} scale={0.2} blur={2} far={1} />
      </Center>
    </Suspense>
  )
}

function ModelLighting({ color, cameraPos = [0, 0.275, 0.275] }) {
  return (
    <>
      {color && <color attach="background" args={[color]} />}
      <pointLight position={[1, 1, -1]} color="yellow" intensity={1} />
      <Environment preset="dawn" />
      <PerspectiveCamera
        makeDefault
        fov={30}
        near={0.01}
        far={10}
        position={cameraPos}
      />
    </>
  )
}

export { Model, ModelLighting }
