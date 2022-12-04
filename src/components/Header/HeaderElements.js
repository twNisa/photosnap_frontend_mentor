import styled from "styled-components"
import {NavLink} from "react-router-dom"

export const HeaderContainer = styled.header`
  background: #fff;
  width: 100vw;
  
`

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1100px;
  margin: 0 auto;
  text-transform: uppercase;
  padding: 1rem 2rem;
  
`

export const NavLogoContainer = styled.div`
  cursor: pointer;
  padding: 1rem 0;
`

export const NavList = styled.ul`
  list-style: none;
  display: flex;
  gap: 1rem;
  a{
    text-decoration: none;
    color: black;
    font-weight: bold;
    position: relative;
    padding-bottom: 2px;
  }
  a:after{
    content:"";
    position: absolute;
    background: -webkit-linear-gradient(30deg, #D16BA5, #86A8E7, #5FFBF1);
    height: 2px;
    width: 100%;
    left: 0;
    bottom: 0;
    transform: scaleX(0);
    transition: transform .3s ease-in;
  }
  a:hover:after{
    transform: scaleX(1);
    transform-origin: center center;
    transition-duration: .4s;
  }
  a.active:after{
    transform: scaleX(1);
  }

  @media screen and (max-width:767px){
        outline:0;
        border:0;
        min-width:100%;
        align-items: flex-start;
    }

`

export const NavButton = styled.div`
  border: none;
  color: white;
  height: 2.5rem;
  width: 10rem;
  display: flex;
  justify-content: center;
  align-items: center;
  letter-spacing: .1rem;
  font-size: .8rem;
  text-transform: uppercase;
  cursor: pointer;
  font-weight:600;
  overflow: hidden;
  position: relative;
  background-color: black;
  z-index: 20;

  .hover{
    content: "";
    position: absolute;
    top: 0;
    left: -2;
    z-index: 10;
    height: 2.5rem;
    width: 13rem;
    background: rgb(233, 233, 233);
    transform: skewX(-20deg) translateX(-100%);
    transition: all .4s ease-in;
    z-index: -10;
  }

  &:hover{
    
    .hover{
      background: -webkit-linear-gradient(30deg, #D16BA5, #86A8E7, #5FFBF1);
      
      transform: translateX(0);
    }
  }
`


export const MobileNav = styled.div`
`