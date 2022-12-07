import React from "react"
import { HomeContainer } from "./HomeElements"
import MainStack from "./MainStack/MainStack"
import Gallery from "./gallery/Gallery"
import Features from "./features/Features"
import {motion} from "framer-motion"
import {animations, pageTransition} from "../shared/animations"
import { useLocation } from "react-router-dom"

export default function Home(props){

  React.useEffect(()=>{
    document.title = props.title || "";
  }, [props.title])

  const location = useLocation()
  return (
    <motion.HomeContainer
      key={location}
      initial="initial"
      animate="in"
      exit="out"
      variants={animations}
      transition={pageTransition}

    >

      <MainStack />
      <Gallery />
      <Features />
    </motion.HomeContainer>
  )
}