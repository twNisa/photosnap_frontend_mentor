import React from "react"
import Featured from "./Featured/Featured"
import Gallery from "./Gallery/Gallery"
export default function Stories(){
  return (
    <section className="stories">
      <Featured />
      <Gallery/>
    </section>

  )
}