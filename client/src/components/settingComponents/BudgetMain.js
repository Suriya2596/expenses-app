import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { budgetList } from "../../features/Budget/BudgetAction";
import EditBudget from "./EditBudget";

export default function BudgetMain() {

  const dispatch = useDispatch()


  React.useEffect(()=>{
    dispatch(budgetList())
  },[])

  const budget = useSelector((state) => {
    return state.budget
  })

  
  return (
    <>
      {
        budget && budget.budgetData && Object.keys(budget.budgetData).length > 0 && 
          <EditBudget />
      }
    </>
  );
}