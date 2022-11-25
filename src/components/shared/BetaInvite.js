import { ArrowButton } from "./ArrowButton";
import React from "react";
import styled from "styled-components";
import bgImg from "../../assets/shared/desktop/bg-beta.jpg"

const BetaInviteContainer = styled.section`
  background-image: url(${props => props.bgImg});
  width: 100vw;
  height: 15rem;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  text-transform: uppercase;
  color: white;
  position: relative;

  & > div{
    padding: 0 2rem;
    display: flex;
    max-width: 1100px;
    height: 100%;
    margin: 0 auto;
    justify-content: space-between;
    align-items: center;
    
    h1{
      font-size: 2.2rem;
      max-width: 14ch;
    }
    & > div{
      display: flex;
      align-items: center;
    }
  }

  &:before{
    content: "";
    position: absolute;
    height: 100%;
    width: .5rem;
    background: -webkit-linear-gradient(90deg, #D16BA5, #86A8E7, #5FFBF1);
    top: 0;
    left: 0;
  }

  @media (width < 650px) {
    & > div{
      flex-direction: column;
      padding: 2rem;
      align-items:flex-start;
      
      h1{
        font-size: 2rem;
      }
    }
      
  }
`

export default function BetaInvite(){
  return (
    <BetaInviteContainer bgImg={bgImg}>
      <div>
        <h1>
          we're in beta. get your invite today!
        </h1>
        <div>
        <ArrowButton>
          <span>get an invite</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="43" height="14">
            <g fill="none" fillRule="evenodd" stroke="#fff"><path d="M0 7h41.864M35.428 1l6 6-6 6"/></g>
          </svg>
        </ArrowButton>
        </div>
        
      </div>
    </BetaInviteContainer>
  )
}