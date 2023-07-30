import React from "react";
import {
  Card,
  CardBody,
  CardFooter,
  Button,
  Input,
} from "@material-tailwind/react";
import { RocketLaunchIcon } from "@heroicons/react/24/solid";
import { useDispatch, useSelector } from "react-redux";
import EditBudget from "./EditBudget";
import CreateBudget from "./CreateBudget";


export default function BudgetMain() {

  const budget = useSelector((state) => {
    return state.budget
  })
  return (
    <>
      {
        budget && budget.budgetData && Object.keys(budget.budgetData).length > 0 ? (
          <>
            <EditBudget />
          </>
        ) : (
          <>
            <CreateBudget />
          </>
        )
      }
    </>
  );
}