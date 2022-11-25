import React from "react";
import { ArrowButton } from "../../shared/ArrowButton";
import {data} from "../Gallery/galleryData"
import { FeaturedContainer, FeaturedContent, FeaturedText } from "./FeaturedElements";
import  heroImg  from '../../../assets/stories/desktop/moon-of-appalacia.jpg';
import  heroImgSmall  from '../../../assets/stories/tablet/moon-of-appalacia.jpg';
export default function Featured(){

  return (
    <FeaturedContainer bgImg={heroImg}>
      <FeaturedContent>
        <FeaturedText>
          <h4>last month's featured story</h4>
          <h1>HAZY FULL MOON OF APPALACHIA</h1>
          <div>
            <p>{data[0].date}</p>
            <p>by {data[0].author}</p>
          </div>
          <p>The dissected plateau area, while not actually made up of geological mountains, is popularly called "mountains," especially in eastern Kentucky and West Virginia, and while the ridges are not high, the terrain is extremely rugged.</p>
          <ArrowButton>
          <span>read the story</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="43" height="14">
             
              <g fill="none" fillRule="evenodd" stroke="#fff"><path d="M0 7h41.864M35.428 1l6 6-6 6"/></g>
            </svg>
          </ArrowButton>
        </FeaturedText>
      </FeaturedContent>
    </FeaturedContainer>
  )
}