import React from "react"
import { HomeContainer } from "./HomeElements"
import MainStack from "./MainStack/MainStack"
import Gallery from "./gallery/Gallery"
import Features from "./features/Features"

export default function Home(){
  return (
    <HomeContainer>
      <MainStack />
      <Gallery />
      <Features />
    </HomeContainer>
  )
}