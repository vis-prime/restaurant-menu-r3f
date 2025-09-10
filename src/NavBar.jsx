import { OrbitControls, View } from "@react-three/drei"
import { Model, ModelLighting } from "./Model"
import { Cherry } from "lucide-react"
import { motion } from "motion/react"

function NavBar() {
  return (
    <div className="flex flex-col items-center justify-center py-2 md:py-3 bg-gradient-to-r from-emerald-50 via-teal-50 to-emerald-100 border-b-2 border-emerald-200/60 flex-shrink-0 shadow-sm backdrop-blur-sm">
      <motion.div
        className="flex flex-row items-center justify-center gap-3 group"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.div
          whileHover={{ rotate: 360, scale: 1.1 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <Cherry className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 text-emerald-600 group-hover:text-emerald-700 transition-colors duration-300 ease-in-out drop-shadow-sm" />
        </motion.div>
        <motion.h1
          className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-wide text-gray-800 drop-shadow-sm group-hover:text-emerald-700 transition-colors duration-300 ease-in-out"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          whileHover={{ scale: 1.05 }}
        >
          Sakura Dining
        </motion.h1>
        <div className="transform group-hover:scale-105 transition-transform duration-300 ease-in-out">
          <NavBarModel />
        </div>
      </motion.div>
      <motion.p
        className="text-gray-600 text-sm md:text-base mb-1 md:mb-2 font-medium tracking-wide opacity-90 hover:opacity-100 transition-opacity duration-200"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 0.9, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        whileHover={{
          opacity: 1,
          scale: 1.02,
          transition: { duration: 0.2 },
        }}
      >
        Authentic Japanese Cuisine
      </motion.p>
    </div>
  )
}

function NavBarModel() {
  return (
    <div className="relative">
      <View className="w-24 h-16 md:w-32 md:h-24 inline-block overflow-hidden">
        <ModelLighting cameraPos={[0, 0.1, 0.3]} />
        <Model url="./riceball.glb" />
        <OrbitControls makeDefault enablePan={false} enableZoom={false} />
      </View>
      <div className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-300 rounded-full opacity-60 animate-pulse"></div>
      <div
        className="absolute -bottom-1 -left-1 w-2 h-2 bg-teal-300 rounded-full opacity-50 animate-pulse"
        style={{ animationDelay: "0.5s" }}
      ></div>
    </div>
  )
}

export default NavBar
