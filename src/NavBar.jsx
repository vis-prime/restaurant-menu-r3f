import { OrbitControls, Sparkles, View } from "@react-three/drei"
import { Model, ModelLighting } from "./Model"

function NavBar() {
  return (
    <div className="flex flex-col items-center justify-center py-2 md:py-3 bg-pink-100/50 border-b border-gray-200 flex-shrink-0">
      <div className="flex flex-row items-center justify-center">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-wide text-gray-800">
          Sakura Dining
        </h1>
        <NavBarModel />
      </div>
      <p className="text-gray-600 text-sm md:text-base mb-1 md:mb-2">
        Authentic Japanese Cuisine
      </p>
    </div>
  )
}

function NavBarModel() {
  return (
    <View className="w-24 h-16 md:w-32 md:h-24 inline-block overflow-hidden">
      <ModelLighting cameraPos={[0, 0.1, 0.3]} />

      <Model url="/riceball.glb" />
      <OrbitControls makeDefault enablePan={false} enableZoom={false} />
    </View>
  )
}

export default NavBar
