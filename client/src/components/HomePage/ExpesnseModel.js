import React from "react";
import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
} from "@material-tailwind/react";
import { ExpensesForm } from "./ExpensesForm";
import { useDispatch } from "react-redux";
import { expensesCreate } from "../../features/Expenses/ExpensesAction";

const ExpesnseModel = () => {
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => setOpen(!open);
    const dispatch = useDispatch()

    const handleFormSubmit = (req)=>{
        dispatch(expensesCreate(req))
    }
    return (
        <>
            <div className='ml-auto'>
                <Button onClick={handleOpen}>Button</Button>
            </div>
            <Dialog open={open} size={"sm"} handler={handleOpen}>
                <DialogHeader>Create Expense</DialogHeader>
                <DialogBody divider>
                    <ExpensesForm handleOpen={handleOpen} handleFormSubmit={handleFormSubmit}/>
                </DialogBody>
            </Dialog>
        </>
    )
}

export default ExpesnseModel
