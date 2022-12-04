import React from "react"
import Featured from "./Featured/Featured"
import Gallery from "./Gallery/Gallery"
export default function Stories(props){
  
  React.useEffect(()=>{
    document.title = props.title || "";
  }, [props.title])

  return (
    <section className="stories">
      <Featured />
      <Gallery/>
    </section>

  )
}