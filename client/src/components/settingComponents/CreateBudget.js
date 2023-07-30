import React from "react";
import {
    Card,
    CardBody,
    CardFooter,
    Button,
    Input,
} from "@material-tailwind/react";
import { RocketLaunchIcon } from "@heroicons/react/24/solid";
import { useDispatch } from "react-redux";
import { budgetCreate } from "../../features/Budget/BudgetAction";


export default function CreateBudget() {
    const dispatch = useDispatch()
    const data = {total:0}
    return (
        <Card className="mt-6 w-auto bg-drak-gray">
            <CardBody>
                <RocketLaunchIcon className="primary-cl w-12 h-12 mb-4" />
                <h5 className="mb-2 white-cl">
                    Budget
                </h5>
            </CardBody>
            <CardFooter className="pt-0">
                <Button color="amber" onClick={() => {
                    dispatch(budgetCreate(data))
                }}>Create Budget</Button>
            </CardFooter>
        </Card>
    );
}