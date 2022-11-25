import styled from "styled-components"

export const SelectionContainer = styled.section`
  max-width: 1100px;
  margin: 0 auto;
  padding: 2rem;

`

export const SelectionPlans = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  gap: 1rem;
  justify-content: center;
  @media (width < 1075px){
    flex-direction: column;
  }
`
export const SelectionToggler = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  font-weight: bold;
  position: relative;
  gap: 1rem;
  span{
    width: 4rem;
    height: 1.6rem;
    cursor: pointer;
    padding: .2rem;
    border-radius: 2rem;
    background-color: #ccc;
    -webkit-transition: .4s;
    transition: .4s;
    position: relative;
    display: flex;
    align-items: center;
  
    &:before{  
      content: "";
      width: 1.4rem;
      height: 1.4rem;
      background-color: black;
      border-radius: 50%;
      transition: transform .4s ease;
      transform: translateX(${props => props.isMonthly ? "0" : "2.2rem"});
      position: absolute;

    }
  }
`

export const SelectionCard = styled.div`
  background-color: rgb(245, 245, 245);
  width: 20rem;
  padding: 3rem 1rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  gap: 2rem;
  h2{
    color: black;
    text-transform: capitalize;
  }
  p{
    opacity: .7;
  }
  &>div{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;


    span{
      font-size: 2rem;
      color: black;
      font-weight: bold;
    }
  }
  button{
    text-transform: uppercase;
    width: 100%;
    height: 3rem;
    cursor: pointer;
    border: none;
    background-color: black;
    color: white;
    display: flex;
    justify-content:center;
    align-items: center;
    font-weight: bold;
    position: relative;
    letter-spacing: .08rem;
    
    &:after{
      content: "";
      position: absolute;
      height: .2rem;
      width: 100%;
      background: -webkit-linear-gradient(30deg, #D16BA5, #86A8E7, #5FFBF1);
      transform: scaleX(0);
      transition: all .3s ease-in;
      bottom: 0;
      left: 0;
    }
    &:hover{
      color: black;
      background-color: rgb(190, 190, 190);
      transition: all .3s ease-in;
    }
    &:hover:after{
      transform: scaleX(1);
    }

  }

  &.selected{
    background-color: black;
    padding:  4rem 1rem;
    color:white;
    h2{
      color: white;
    }
    div{
      span{
        color: white;
      }
      
    }
    &:before{
      content: "";
      position: absolute;
      height: .5rem;
      width: 100%;
      background: -webkit-linear-gradient(30deg, #D16BA5, #86A8E7, #5FFBF1);
      top: 0;
      left: 0;
    }

    button{
      color: black;
      background-color: rgb(240, 240, 240);

      &:hover{
        background-color: rgb(190, 190, 190);
        transition: all .3s ease-in;

      }
    }
  }

  @media (width < 1075px){
    width: 100%;
    align-items: flex-start;
    & > p{
      max-width: 20rem;
      text-align: start;
    }
    &> div{
      align-self: flex-end;
      position: absolute;
    }
    &.selected{
      &:before{
        content: "";
        position: absolute;
        height: 100%;
        width: .5rem;
        background: -webkit-linear-gradient(30deg, #D16BA5, #86A8E7, #5FFBF1);
        top: 0;
        left: 0;
      }
    }
    button{
      max-width: 20rem;
    }
  }

  @media (width < 750px){
    align-items: center;
    & > p{
      text-align: center;
    }
    & > div{
      position: relative;
      align-self: center;
    }
    &.selected{
      &:before{
        content: "";
        position: absolute;
        height: .5rem;
        width: 100%;
        background: -webkit-linear-gradient(30deg, #D16BA5, #86A8E7, #5FFBF1);
        top: 0;
        left: 0;
      }
    }
  }

`