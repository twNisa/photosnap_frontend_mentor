import styled from "styled-components";
import { ArrowButton } from "../../shared/ArrowButton";

export const FeaturedContainer = styled.section`
  width: 100vw;
  background-image: url(${props => props.bgImg});
  height: 46rem;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
`
export const FeaturedContent = styled.div`
  /* padding: 4rem; */
  
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  max-width: 1100px;
  width: 100%;
  

  
`
export const FeaturedText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 25rem;
  position: relative;
  padding: 2rem;
 
 
  h4, h1{
    text-transform: uppercase;
  }
  h4{
    font-size: .9rem;
  }
  h1{
    max-width: 10ch;
    font-size: 3rem;
  }
  p{
    opacity: .6;
  }
  &>div{
    display: flex;
    gap: 1rem;

    & p:nth-of-type(2){
      color: white;
      opacity: 1;
    }
  }
  ${ArrowButton} {
    margin-top: 1rem;
  }

  @media(width < 750px){
    h1{
      font-size: 2rem;
    }
  }

`