import React from "react";
import BetaInvite from "../shared/BetaInvite";
import { PricingContainer, PricingTextContainer, PricingImg } from "./PricingElements";
import bgImg from "../../assets/pricing/desktop/hero.jpg"
import Selection from "./Selection/Selection";
import Compare from "./Compare/Compare";
export default function Pricing(){

  return (
    <>
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
    </>
  )
}