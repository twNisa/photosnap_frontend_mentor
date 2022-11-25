import styled from "styled-components";

export const ArrowButton = styled.button`

  background: none;
  color: ${({bgWhite}) => bgWhite ? "black" : "white"};
  position: relative;
  text-transform: uppercase;
  align-self: flex-start;
  display: flex;
  gap: .5rem;
  border: none;
  padding: 0;
  cursor: pointer;
  font-weight: bold;
  span{
    position: relative;
    padding-bottom: .5rem;
  }


  &:hover > svg{
    transform: translateX(1rem);
    transition: all .3s ease .4s;
  }
  & > svg g{
    stroke: ${({bgWhite}) => bgWhite ? "black" : "white"};

  }
  & span:before{
    content: "";
    position: absolute;
    background: -webkit-linear-gradient(30deg, #D16BA5, #86A8E7, #5FFBF1);
    height: 2px;
    width: 100%;
    left: 0;
    bottom: 0;
    transform: scaleX(0);
    transition: transform .3s ease-in;
    transform-origin: right center;
  }
  &:hover span:before{
    transform: scaleX(1);
    transform-origin: left center;
    transition-duration: .4s;
  }
`