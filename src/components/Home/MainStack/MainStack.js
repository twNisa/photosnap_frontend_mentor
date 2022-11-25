import {data} from "./MainStackData"
import { MainStackContainer, MainStackItem, MainStackItemText } from "./MainStackElements"
import { ArrowButton } from "../../shared/ArrowButton"
export default function MainStack(){
  console.log(data)
  const stackItems = data.map(item => (
    <MainStackItem key={item.id} bgWhite={item.bgWhite}>
      <MainStackItemText bgWhite={item.bgWhite}>
        <div>
          <h2>{item.heading}</h2>
          <p>{item.info}</p>
          <ArrowButton bgWhite={item.bgWhite}>
            <span>{item.btnText}</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="43" height="14">   
              <g fill="none" fillRule="evenodd" stroke="#fff"><path d="M0 7h41.864M35.428 1l6 6-6 6"/></g>
            </svg>
          </ArrowButton>  
        </div>
        
      </MainStackItemText>
      <div>
        <img src={item.img} alt={item.alt} />
      </div>  
      
    </MainStackItem>
  ))
  return (
    <MainStackContainer>
      {stackItems}
    </MainStackContainer>
  )
}