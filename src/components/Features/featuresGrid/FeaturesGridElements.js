import styled from "styled-components";

export const FeaturesContainer = styled.section`
  width: 100vw;
  margin-bottom: 4rem;
`
export const FeaturesContent = styled.div`
  max-width: 1100px;
  padding: 2rem;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 2rem;
`
export const FeaturesItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 20rem;
  height: 16rem;
  text-align: center;
  div{
    height:7.2rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  div img{
    max-width: 100%;
    display: block;
  }
  h2{
    font-weight: bold;
    font-size: 1.2rem;
  }
`