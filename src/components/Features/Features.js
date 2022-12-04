import BetaInvite from "../shared/BetaInvite";
import { FeaturesContainer, FeaturesContent, FeaturesTextContainer, FeaturesImg } from "./FeaturesElements";
import  bgImg  from '../../assets/features/desktop/hero.jpg';
import FeaturesGrid from "./featuresGrid/FeaturesGrid"
import React from "react";

export default function Features(props){

  React.useEffect(()=>{
    document.title = props.title || "";
  }, [props.title])


  return (
    <>

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
    </>
  )
}