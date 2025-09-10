import { useState } from "react"
import { View, OrbitControls } from "@react-three/drei"

import "./App.css"
import { Canvas } from "@react-three/fiber"
// import Lenis from "lenis"
import Menu from "./Menu"
import NavBar from "./NavBar"
import ItemPreview from "./ItemPreview"

// Use lenis smooth scroll
// const lenis = new Lenis({ syncTouch: true })
// Integrate into fibers own raf loop instead of opening another
// addEffect((t) => lenis.raf(t))

function App() {
  const [selectedItem, setSelectedItem] = useState(null)
  return (
    <>
      <Canvas
        className="!fixed w-full h-full z-50"
        eventSource={document.getElementById("root")}
      >
        <View.Port />
      </Canvas>

      <div className="h-screen flex flex-col">
        <NavBar />
        <div className="flex-1 flex flex-col md:flex-row overflow-hidden min-h-0">
          <Menu setSelectedItem={setSelectedItem} />
          <ItemPreview selectedItem={selectedItem} />
        </div>
      </div>
    </>
  )
}

export default App
