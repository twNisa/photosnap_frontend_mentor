import BetaInvite from "../shared/BetaInvite";
import { FeaturesContainer, FeaturesContent, FeaturesTextContainer, FeaturesImg } from "./FeaturesElements";
import  bgImg  from '../../assets/features/desktop/hero.jpg';
import FeaturesGrid from "./featuresGrid/FeaturesGrid"
import React from "react";
import { animations, pageTransition } from "../shared/animations";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";


export default function Features(props){

  React.useEffect(()=>{
    document.title = props.title || "";
  }, [props.title])

  const location = useLocation()
  return (
    <motion.div
      key={location}
      initial="out"
      animate="in"
      exit="out"
      variants={animations}
      transition={pageTransition}
    >

      <FeaturesContainer>
          <FeaturesTextContainer>
          <div>
            <h1>features</h1>
            <p>We make sure all of our features are designed to be loved by every aspiring and even professional photograpers who wanted to share their stories.</p>
          </div>
            
          </FeaturesTextContainer>
          <FeaturesImg bgImg={bgImg} />
      </FeaturesContainer>
      <FeaturesGrid/>
      <BetaInvite />
    </motion.div>
  )
}