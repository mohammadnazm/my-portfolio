import React from "react"
import { styles } from "../styles"

const SectionWrapper = (Component, idName) => {
  function HOC() {
    ;<motion.dev>
      <Component />
    </motion.dev>
  }
}

export default SectionWrapper
