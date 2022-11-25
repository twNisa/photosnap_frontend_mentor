import styled from "styled-components";

export const CompareContainer = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 3rem;
  margin-bottom: 6rem;
  h2{
    font-size: 3rem;
    text-transform: uppercase;
  }
`

export const CompareTable = styled.table`
  margin-top: 2rem;
  max-width: 700px;
  width: 100%;
  table{
    text-transform: uppercase;
    border-spacing: 0;
    width: 100%;
    thead{
      background-color: #343a40;
      color: white;
      th:first-of-type{
        text-align: start;
      }
      th{
        text-align: center;
        font-weight: bold;
        padding: 1rem;
      }
    }
    
    tbody{
      font-weight: bold;
      color: #343a40;
      tr:hover{
        color: #212529;
        background-color: rgba(0,0,0,.075)
      }
      td:first-of-type{
        text-align: start;
      }
      td{
        text-align: center;
        border-bottom: 1px solid #dee2e6 ;
        padding: 1rem;
        cursor: pointer;
        
      }
      td img{

      }
    }
    
  }
`