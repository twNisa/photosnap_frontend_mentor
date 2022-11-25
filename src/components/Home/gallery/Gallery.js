import { GalleryContainer, GalleryItemContainer, GalleryText } from "./GalleryElements";
import {data} from "./galleryData"
import React from "react";
export default function Gallery(){
  const gallery = data.map(item => (
    <GalleryItemContainer key={item.id} bgImg={item.img}>
      <div>  
      </div>
      <GalleryText>
          <h2>{item.heading}</h2>
          <p>by <span>{item.by}</span></p>
          <span>
            read story  
            <svg xmlns="http://www.w3.org/2000/svg" width="43" height="14">
                
                <g fill="none" fillRule="evenodd" stroke="#fff"><path d="M0 7h41.864M35.428 1l6 6-6 6"/></g>
            </svg>
          </span>
        </GalleryText>
    </GalleryItemContainer>
  ))
  return (
    <GalleryContainer>
      {gallery}
    </GalleryContainer>
  )

}