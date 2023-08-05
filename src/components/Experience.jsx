import React from "react"
import {
  VerticalTimeline,
  VerticalTimeLineElement,
} from "react-vertical-timeline-component"

import { motion } from "framer-motion"
import { styles } from "../styles"
import { experiences } from "../constants"
import { SectionWrapper } from "../hoc"
import { textVariant } from "../utils/motion"

const Experience = () => {
  return (
    <>
      <motion.dev variants={textVariant()}>
        <p className={styles.sectionSubText}>What I have done so far</p>
        <h2 className={styles.sectionHeadText}>Work Experience</h2>
      </motion.dev>
    </>
  )
}

export default Experience
