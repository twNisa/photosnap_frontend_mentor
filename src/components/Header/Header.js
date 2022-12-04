import React from "react"
import { HeaderContainer, Nav, NavLogoContainer, NavList, NavButton, MobileNav } from "./HeaderElements"
import {NavLink} from "react-router-dom"
import logo from "../../assets/shared/desktop/logo-black.svg"
import {slide as Menu} from "react-burger-menu"
import { MobileStyleHelper } from "./MobileStyleHelper"

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

  const [isMenuOpen, setIsMenuOpen] = React.useState(false)
  function handleStateChange(currentState){
    setIsMenuOpen(currentState.isOpen)
  }
  function closeMenu(){
    setIsMenuOpen(false)
  }


  return (
    <HeaderContainer>
      <Nav>
        <NavLogoContainer>
          <NavLink to="/photosnap_frontend_mentor/">
            <img src={logo} alt="photosnap" />
          </NavLink>
        </NavLogoContainer>

        {isMobile ? 
          <Menu 
          
            isOpen={isMenuOpen} 
            styles={MobileStyleHelper}
            onStateChange={(currentState) => handleStateChange(currentState)}
            right
          >
          <NavList>
              <NavLink
                onClick={()=> closeMenu()}
                to="/photosnap_frontend_mentor/stories"
              >
              stories
              </NavLink>
              <NavLink                
                onClick={()=> closeMenu()}
                to="/photosnap_frontend_mentor/features"
              >
              features
              </NavLink>
              <NavLink 
                onClick={()=> closeMenu()}
                to="/photosnap_frontend_mentor/pricing"
              >
              pricing
              </NavLink>
          </NavList>

          <NavButton>
              <div className="hover"></div>
              <span>get an invite</span>
          </NavButton>
        </Menu>
        :   
          <>
            <NavList>
              <NavLink
                to="/photosnap_frontend_mentor/stories"
              >
              stories
              </NavLink>
              <NavLink to="/photosnap_frontend_mentor/features"
              >
              features
              </NavLink>
              <NavLink to="/photosnap_frontend_mentor/pricing"
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