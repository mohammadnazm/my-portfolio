import React, { Suspense } from "react"
import { Canvas } from "@react-three/fiber"
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei"

import CanvasLoader from "../Loader"
import Computers from "./Computers"

const Ball = props => {
  const [decal] = useTexture([props.imgUrl])
  return <div>Ball</div>
}

const BallCanvas = ({ icon }) => {
  return (
    <Canvas frameLoop="demand" gl={{ preserveDrawingBuffer: true }}>
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} />
        <Computers isMobile={isMobile} />
        <Ball imgUrl={icon} />
      </Suspense>

      <Preload all />
    </Canvas>
  )
}

export default Ball
