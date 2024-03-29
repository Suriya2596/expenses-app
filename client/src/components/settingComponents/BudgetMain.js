import React from "react";
import {
  Card,
  CardBody,
  CardFooter,
  Button,
} from "@material-tailwind/react";
import { MoonIcon } from "@heroicons/react/24/solid";
import { useDispatch, useSelector } from "react-redux";
import { budgetList } from "../../features/Budget/BudgetAction";
import BudgetForm from "./BudgetForm";


export default function BudgetMain() {
  const dispatch = useDispatch()
  const [editBudget, setEditBudget] = React.useState(false)

  React.useEffect(() => {
    dispatch(budgetList())
  }, [dispatch])

  const handleEditBudget = () => {
    setEditBudget(!editBudget)
  }

  const budget = useSelector((state) => {
    return state.budget
  })


  return (
    <Card className="mt-6 w-auto bg-drak-gray">
      <CardBody>
        <MoonIcon className="primary-cl w-12 h-12 mb-4" />
        <h5 className="mb-2 white-cl">
          Budget
        </h5>
        {!editBudget && budget && budget.budgetData && <h4 className="primary-cl">{budget.budgetData.total}</h4>}
        {
          editBudget && <BudgetForm handleEditBudget={handleEditBudget} />
        }
      </CardBody>
      <CardFooter className="pt-0">
        <>
          {!editBudget && <Button color="amber" onClick={handleEditBudget}>Edit Budget</Button>}
        </>
      </CardFooter>
    </Card>
  );
}