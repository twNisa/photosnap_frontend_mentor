import React from "react";
import BetaInvite from "../shared/BetaInvite";
import { PricingContainer, PricingTextContainer, PricingImg } from "./PricingElements";
import bgImg from "../../assets/pricing/desktop/hero.jpg"
import Selection from "./Selection/Selection";
import Compare from "./Compare/Compare";
import { animations, pageTransition } from "../shared/animations";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";

export default function Pricing(props){

  React.useEffect(()=>{
    document.title = props.title || "";
  }, [props.title])
  const location = useLocation()
  return (
    <motion.div
      key={location}
      initial="initial"
      animate="in"
      exit="out"
      variants={animations}
      transition={pageTransition}
    >
    <PricingContainer>
        <PricingTextContainer>
        <div>
          <h1>pricing</h1>
          <p>Create a your stories, Photosnap is a platform for photographers and visual storytellers. It's the simple way to create and share your photos.</p>
        </div>
          
        </PricingTextContainer>
        <PricingImg bgImg={bgImg} />
    </PricingContainer>
      <Selection />
      <Compare />
      <BetaInvite />
    </motion.div>
  )
}