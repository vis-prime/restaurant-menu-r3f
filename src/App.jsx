import { useState } from "react"
import { View } from "@react-three/drei"

import { Canvas } from "@react-three/fiber"
import Menu from "./Menu"
import NavBar from "./NavBar"
import ItemPreview from "./ItemPreview"
import * as THREE from "three"

function App() {
  const [selectedItem, setSelectedItem] = useState(null)
  return (
    <>
      <Canvas
        tonemapping={THREE.ACESFilmicToneMapping}
        className="!fixed w-full h-full z-50"
        eventSource={document.getElementById("root")}
      >
        <View.Port />
      </Canvas>

      <div className="h-screen flex flex-col">
        <NavBar />
        <div className="flex-1 flex flex-col md:flex-row overflow-hidden min-h-0">
          <Menu selectedItem={selectedItem} setSelectedItem={setSelectedItem} />
          <ItemPreview selectedItem={selectedItem} />
        </div>
      </div>
    </>
  )
}

export default App
