import React from "react";
import { plans } from "./SelectionData";
import { SelectionCard, SelectionContainer, SelectionPlans, SelectionToggler } from "./SelectionElements";


export default function Selection(){
  

  const [currentPlan, setCurrentPlan] = React.useState("pro")
  const [isMonthly, setIsMonthly] = React.useState(true)

  const cards = plans.map(plan => (
    <SelectionCard
      className={plan.type === currentPlan ? "selected" : undefined}
    >

      <h2>{plan.type}</h2>
      <p>{plan.description}</p>
      <div>
        <span>${isMonthly ? plan.pricing : plan.pricing*10}.00</span>
        <p>
          {isMonthly ? "per month" : "per year"}
        </p>
      </div>
      <button onClick={(e)=>handleClickPlan(e)}>pick plan</button>
    </SelectionCard>
  ))

  function handleToggler(){
    setIsMonthly(!isMonthly)
    console.log("clicked toggler, ", isMonthly)
  }

  function handleClickPlan(e){
    const type = (e.target.parentNode.firstChild.textContent)
    setCurrentPlan(type)
  }

  return (
    <SelectionContainer>
    <SelectionToggler isMonthly={isMonthly}>
      Monthly
      <span onClick={handleToggler}></span>
      Yearly
    </SelectionToggler>
    <SelectionPlans>
      {cards}
    </SelectionPlans>
    </SelectionContainer>
  )
}