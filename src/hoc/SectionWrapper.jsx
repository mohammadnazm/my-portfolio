import { motion } from "framer-motion"

import { styles } from "../styles"
import { staggerContainer } from "../utils/motion"

const StarWrapper = (Component, idName) =>
  function HOC() {
    return (
      <motion.section
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewPort={`${styles.padding} max-w-7xl mx-auto relative z-0`}
      >
        <Component />
      </motion.section>
    )
  }

export default StarWrapper
