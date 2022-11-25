import React from "react"
import { FooterContainer, FooterContent, FooterLogo, FooterList, FooterSide, FooterSocials } from "./FooterElements"
import {NavLink} from "react-router-dom"
import logo from "../../assets/shared/desktop/logo-white.svg"
import faceBook from '../../assets/shared/desktop/facebook.svg'
import instagram from '../../assets/shared/desktop/instagram.svg'
import youtube from '../../assets/shared/desktop/youtube.svg'
import pinterest from '../../assets/shared/desktop/pinterest.svg'
import twitter from '../../assets/shared/desktop/twitter.svg'
import { ArrowButton } from "../shared/ArrowButton"
export default function Footer(){
  return (
    <FooterContainer>
      <FooterContent>
        <div>
          <FooterLogo>
            <NavLink to="/">
              <img src={logo} alt="photosnap" />
            </NavLink>
            <FooterSocials>
              <a href="#">
                <img src={faceBook} alt="facebook" />
              </a>
              <a href="#">
                <img src={instagram} alt="instagram" />
              </a>
              <a href="#">
                <img src={youtube} alt="youtube" />
              </a>
              <a href="#">
                <img src={pinterest} alt="pinterest" />
              </a>
              <a href="#">
                <img src={twitter} alt="twitter" />
              </a>
            </FooterSocials>
          </FooterLogo>
          <FooterList>
            <NavLink
              to="/"
            >
            home
            </NavLink>
            <NavLink
              to="/stories"
            >
            stories
            </NavLink>
            <NavLink to="/features"
            >
            features
            </NavLink>
            <NavLink to="/pricing"
            >
            pricing
            </NavLink>
          </FooterList>
        </div>
        <FooterSide>
          
          <ArrowButton>
            <span>get an invite</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="43" height="14">
             
              <g fill="none" fillRule="evenodd" stroke="#fff"><path d="M0 7h41.864M35.428 1l6 6-6 6"/></g>
            </svg>
          </ArrowButton>
          <div>
            <p>
            Challenge by <a href="https://www.frontendmentor.io/challenges/photosnap-multipage-website-nMDSrNmNW" target="_blank">Front end mentor</a>
            </p>
            <p>
            made by <a href="#" target="_blank">twNisa</a>
            </p>
          </div>
        </FooterSide>
      </FooterContent>

    </FooterContainer>
  )
}