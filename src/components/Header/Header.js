import React from "react"
import { HeaderContainer, Nav, NavLogoContainer, NavList, NavButton, MobileNav } from "./HeaderElements"
import {NavLink} from "react-router-dom"
import logo from "../../assets/shared/desktop/logo-black.svg"

export default function Header(){
  const [width, setWidth] = React.useState(window.innerWidth);

  function handleWindowSizeChange() {
      setWidth(window.innerWidth);
  }

  React.useEffect(() => {
      window.addEventListener('resize', handleWindowSizeChange);
      return () => {
          window.removeEventListener('resize', handleWindowSizeChange);
      }
  }, []);
  
  const isMobile = width <= 750;

  return (
    <HeaderContainer>
      <Nav>
        <NavLogoContainer>
          <NavLink to="/">
            <img src={logo} alt="photosnap" />
          </NavLink>
        </NavLogoContainer>

        {isMobile ? 
          <MobileNav />
        : 
          <>
            <NavList>
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
            </NavList>

            <NavButton>
            <div className="hover"></div>
            <span>get an invite</span>
            </NavButton>
          </>
        }
        
       
      </Nav>
    </HeaderContainer>
  )
}