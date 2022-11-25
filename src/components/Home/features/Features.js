import React from "react";
import { data } from "./featuresData";
import { FeaturesContainer, FeaturesItem, FeaturesContent } from "./FeaturesElements";
export default function Features(){
  const features = data.map(item => (
    <FeaturesItem>
      <div>
        <img src={item.icon} alt={item.alt}></img>

      </div>
      <h2>{item.title}</h2>
      <p>{item.desc}</p>
    </FeaturesItem>
  ))
  return (
    <FeaturesContainer>
      <FeaturesContent>
        {features}
      </FeaturesContent>
    </FeaturesContainer>
  )
}