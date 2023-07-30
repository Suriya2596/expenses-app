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


export default function EditBudget() {
    const dispatch = useDispatch()
    const [editBudget, setEditBudget] = React.useState(false)

    const handleEditBudget = () => {
        setEditBudget(!editBudget)
    }

    const budget = useSelector((state) => {
        return state.budget
    })


    return (
        <Card className="mt-6 w-auto bg-drak-gray">
            <CardBody>
                <RocketLaunchIcon className="primary-cl w-12 h-12 mb-4" />
                <h5 className="mb-2 white-cl">
                    Budget
                </h5>
                {!editBudget && budget && budget.budgetData && <h4 className="primary-cl">{budget.budgetData.total}</h4>}
            </CardBody>
            <CardFooter className="pt-0">
                <>
                    <Button color="amber" onClick={handleEditBudget}>Edit Budget</Button>
                </>
            </CardFooter>
        </Card>
    );
}