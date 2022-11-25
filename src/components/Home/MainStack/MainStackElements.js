import styled from "styled-components"

export const MainStackContainer = styled.section`
  width: 100vw;
  display: flex;
  flex-direction: column;
`

export const MainStackItem = styled.section`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  background: ${({bgWhite})=> bgWhite? "#fff" : "#000"};
  &:first-of-type div:first-of-type:before{
      content: "";
      position: absolute;
      height: 100%;
      width: .5rem;
      background: -webkit-linear-gradient(90deg, #D16BA5, #86A8E7, #5FFBF1);
      top: 0;
      left: 0;
    }

  &:nth-child(even){
    flex-direction: row-reverse;
    
  }
  & > div:first-of-type{
  }
  & > div:last-of-type{
    flex: 1 1 60rem;
    height: 40rem;
  }
  & div:last-of-type img{
    object-fit: cover;
    width: 100%;
    height: 100%;
    display: block;
  }
  
  @media(width < 750px){
    
    flex-direction: column-reverse;
    /* height: 40rem; */
    & > div:first-of-type{
      padding: 2rem;
      flex: 1;
      & h2{
        font-size: 2rem;
      }
      & > div{
        align-items: flex-start;
      }
    }
    & > div:last-of-type{
      max-height: 24rem;
      width: 100%;

    }
    &:nth-child(even){
    flex-direction: column-reverse;
    
    }
  }
  
`

export const MainStackItemText = styled.div`
    display: flex;
    height: 100%;
    width: 100%;
    position: relative;
    align-items: center;
    justify-content: center;
    flex: 1 1 40rem;
    min-width: 30rem;

    & div{
      padding: 0 2rem;
      display: flex;
      flex-direction: column;
      gap: 2rem;
      align-items: center;
      max-width: 30rem;
      h2{
        text-transform: uppercase;
        max-width: 16ch;
        color: ${({bgWhite}) => bgWhite ?"black" : "white"};
        font-size: 3rem;
      }
      p{
        color: gray;

        color: "gray"
      }
  }
  @media(width < 750px){
    min-width: 0rem;
  }
`