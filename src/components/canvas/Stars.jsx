import { useState, useRef, Suspense } from "react"
import { Canvas, useFrame } from "react-three-fiber"
import { Points, PointMaterial, Preload } from "@react-three/drei"

const Stars = () => {
  return (
    <div className="w-full h-full absolute inset-0 z-[-1]">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Suspense fallback={null}>
          <Stars />
        </Suspense>
      </Canvas>
    </div>
  )
}

export default Stars
