import styled, { keyframes } from "styled-components";

const anim = {
  textLoop: keyframes` 
    0% {
      background-position: 200% center;
    }
    50%{
      background-position: 0% right;
    }
    100%{
      background-position: 200% left;
    }
  `,
  gitLoop: keyframes`
      0% {
        background-color: white;
        opacity: 1;
      }
      35%{
        background-color: cyan;
        opacity: .8;
      }
      75%{
        background-color: pink;
        opacity: .6;
      }
      100%{
        background-color: yellow;
        opacity: .8;
      }
  `
}

export const FooterContainer = styled.footer`
  background: black;
  width: 100vw;
`

export const FooterContent = styled.div`
  max-width: 1100px;

  padding: 3rem 2rem 2rem 2rem;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  &>div:first-of-type{
    display: flex;
    justify-content: space-between;
    gap: 2rem;

    @media (width < 740px) {
      flex-direction: column;
    }
  }
  @media (width < 650px) {
      flex-direction: column;
      align-items: center;
      text-align: center;
  }
`

export const FooterLogo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media (width < 740px) {
    gap: 2rem;
  }
 
`
export const FooterSocials = styled.ul`
  display: flex;
  justify-content: space-between;
  gap: .5rem;
  padding: 0;
  margin: 0;
  a{
    display: flex;
    width: 1.5rem;
    height: 1.5rem;
  }
  a > img{
    filter: brightness(10)
  }
  a:hover > img{
    filter: brightness(1);
    transition: all .4s ease;
  }
  @media (width < 740px) {
      justify-content: flex-start;
      
  }
  @media (width < 650px) {

    justify-content: center;
  }
`
export const FooterList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  a{
    color: white;
    text-decoration: none;
    text-transform: uppercase;
    transition: opacity .4s ease;
  }
  a:hover{
    opacity: .5;
  }
  @media (width < 740px) {
      flex-direction: row;
    }
`

export const FooterSide = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: right;
  align-items: flex-end;
  
  button{
    align-self: flex-end;
  }

  & > div{
    color: white;
    opacity: .5;

    a{
      text-decoration: none;
      
  
    }

    & p:nth-of-type(1) a{
      background: -webkit-linear-gradient(30deg, #D16BA5, #86A8E7, #5FFBF1);
      background-size: 200%;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      color:white;
     }
      
    & p:nth-of-type(2) a {
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      animation: ${anim.gitLoop} 5s linear infinite;
    }
  } 
  
  @media (width < 650px) {
      padding: 2rem;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      gap: 1rem;
      text-align: center;

      & >button{
        align-self: center;
      }
  }
`