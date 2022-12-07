import React from "react"
import Featured from "./Featured/Featured"
import Gallery from "./Gallery/Gallery"
import { motion } from "framer-motion"
import { animations, pageTransition } from "../shared/animations"
import { useLocation } from "react-router-dom"

export default function Stories(props){
  
  React.useEffect(()=>{
    document.title = props.title || "";
  }, [props.title])
  const location = useLocation();
  return (
    <motion.section className="stories"
      key={location}
      initial="out"
      animate="in"
      exit="out"
      variants={animations}
      transition={pageTransition}

    >

      <Featured />
      <Gallery/>
    </motion.section>

  )
}