import styled from "styled-components";

export const FeaturesContainer = styled.section`
  width: 100vw;
  display: flex;
  align-items: center;
  height: 30rem;
  background-color: black;
  justify-content: space-between;

  @media(width < 765px){
    flex-direction: column-reverse;
    height: 35rem;
  }
`

export const FeaturesTextContainer = styled.section`
  
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  height: 10rem;
  min-width: 28rem;
  position: relative;
  flex: 1 1 22rem;
  & > div{
    max-width: 28rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding: 0 2rem;

  }
  & > div > h1{
    text-transform: uppercase;
    font-size: 3rem;
    
  } 
  & > div >  p{
    opacity: .7;
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
  @media(width < 765px){
    padding: 4rem 2rem;
    width: 100%;
    & >div{
      width: 100%;
      gap: 1rem;

      & h1{
        font-size: 2rem;
      }
    }
  }
`

export const FeaturesImg = styled.div`
  flex: 1 1 40rem;
  background-image: url(${props => props.bgImg});
  height: 100%;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  @media(width < 765px){
    width: 100%;
  }
  
`