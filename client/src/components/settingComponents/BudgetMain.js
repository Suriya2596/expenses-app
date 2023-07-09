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
import { budgetCreate } from "../../features/Budget/BudgetAction";


export default function BudgetMain() {
  const dispatch = useDispatch()
  const [editBudget,setEditBudget] = React.useState(false)

  const handleEditBudget = ()=>{
    setEditBudget(!editBudget)
  }
  return (
    <Card className="mt-6 w-auto bg-drak-gray">
      <CardBody>
        <RocketLaunchIcon className="primary-cl w-12 h-12 mb-4" />
        <h5 className="mb-2 white-cl">
          Budget
        </h5>
        <h4 className="primary-cl">0</h4>
        {editBudget && <form><Input color="white" label="Edit Budget" /></form> }
      </CardBody>
      <CardFooter className="pt-0">
        {<Button color="amber" onClick={()=>{
          dispatch(budgetCreate())
        }}>Edit the Budget</Button>}
      </CardFooter>
    </Card>
  );
}