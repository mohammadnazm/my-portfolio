import { useState, useRef } from "react"
import { motion } from "framer-motion"
import emailjs from "@emailjs/browser"

import { styles } from "../styles"
import { EarthCanvas, StarsCanvas } from "./canvas"
import { SectionWrapper } from "../hoc"
import { slideIn } from "../utils/motion"
import { toast } from "react-toastify"

// Public Key ==> GCU31Zsy4hd69zWwl
// Template ID ==> template_jkbtb8n
// Service ID ==> service_mj25bv7

const Contact = () => {
  const formRef = useRef()
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [loading, setLoading] = useState(false)

  const handleChange = e => {
    const { name, value } = e.target
    setForm({ ...form, [name]: value })
  }

  const handleSubmit = e => {
    e.preventDefault()
    setLoading(true)

    if (form.email === "" || form.message === "" || form.name === "") {
      toast.warning("Please fill out all fields.", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 3000, // Set the auto-close duration in milliseconds (e.g., 3000ms = 3 seconds)
        pauseOnHover: true, // Pause the timer when hovering over the toast
        draggable: true, // Allow dragging the toast notification
        closeButton: true, // Show a close button to dismiss the toast
        hideProgressBar: true, // Hide the progress bar
      })
      setLoading(false)
      return
    }

    emailjs
      .send(
        "service_mj25bv7",
        "template_jkbtb8n",
        {
          from_name: form.name,
          to_name: "Mohammad Nazm",
          from_email: "mohammadnazm.anwar@gmail.com",
          message: form.message,
        },
        "GCU31Zsy4hd69zWwl"
      )
      .then(
        () => {
          setLoading(false)
          toast.success("Thank you. I will get back you as soon as possible", {
            position: toast.POSITION.TOP_RIGHT,
          })
        },
        error => {
          setLoading(false)
          console.log(error)
          toast.error("Oops! Something went wrong.", {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 3000, // Set the auto-close duration in milliseconds (e.g., 3000ms = 3 seconds)
            pauseOnHover: true, // Pause the timer when hovering over the toast
            draggable: true, // Allow dragging the toast notification
            closeButton: true, // Show a close button to dismiss the toast
            hideProgressBar: true, // Hide the progress bar
          })
        }
      )
  }

  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.dev
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <p className={styles.sectionHeadText}>Contact.</p>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Mohammad Nazm</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name"
              className="bt-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
            ></input>
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email"
              className="bt-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
            ></input>
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea
              type="text"
              rows="7"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What do you want to say"
              className="bt-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
            ></textarea>
            <button
              type="submit"
              className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl"
              onClick={() => handleSubmit}
            >
              {loading ? "Sending..." : "Send"}
            </button>
          </label>
        </form>
      </motion.dev>
      <motion.dev
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
        <StarsCanvas />
      </motion.dev>
    </div>
  )
}

export default SectionWrapper(Contact, "contact")
