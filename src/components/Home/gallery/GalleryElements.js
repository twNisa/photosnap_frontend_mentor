import styled from "styled-components";

export const GalleryContainer = styled.section`
  width: 100vw;
  display: grid;
  grid-template-rows: auto;
  grid-template-columns: repeat(auto-fit, minmax(22rem, 1fr));
  gap: 0;

  @media (width < 750px) {
    display: flex;
    flex-direction: column;
  }
`

export const GalleryItemContainer = styled.div`
  height: 35rem;
  width: 100%;
  overflow: hidden;
  position: relative;
  cursor: pointer;
  display: inline-block;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  
  & >div:first-of-type{
    background-image: url(${props => props.bgImg});
    background-color: gray;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 100%;
    width: 100%;
    
    transition: all .4s ease;
  }
  & >div:first-of-type:before{
    content: '';
    position: absolute;
    z-index: 1;
    width: 100%;
    height: 100%;
    background: linear-gradient(rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.2) 60%, rgba(0, 0, 0, 0.9) 100%);
  }
  &:hover >div:first-of-type{
    transform: scale(1.2);
    
  }

  &:before{
    content: "";
    height: .5rem;
    width: 0%;
    background: -webkit-linear-gradient(30deg, #D16BA5, #86A8E7, #5FFBF1);
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 20;
    transition: all .4s ease;
  }

  &:hover:before{
    width: 100%;
  }

  @media (width < 750px) {
    height: 22rem;
  }
`

export const GalleryText = styled.div`
  padding: 0 4rem;
  width: 100%;
  position: absolute;
  margin-bottom: 2rem;
  color:white;
  display: flex;
  flex-direction: column;
  gap: .5rem;
  z-index: 5;
  h2,
  p span{
    text-transform: capitalize;
  }
  & > span {
    padding-top: .5rem;
    border-top: 1px solid gray;
    display: flex;
    justify-content: space-between;
    color: gray;
    font-weight: bold;
    transition: all .4s ease .2s;
    padding-bottom: 1rem;
    g {
      stroke: gray
    }
    
  }

  ${GalleryItemContainer}:hover & > span{
    color: white;
    
    g {
      stroke: white
    }

  }

`
