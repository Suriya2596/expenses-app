import React from "react";
import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
} from "@material-tailwind/react";
import { ExpensesForm } from "./ExpensesForm";
import { useDispatch } from "react-redux";
import { expensesUpdate } from "../../features/Expenses/ExpensesAction";

const ExpesnseEditModel = ({open,handleOpen,exp}) => {
    const dispatch = useDispatch()

    const handleFormSubmit = (req)=>{
        dispatch(expensesUpdate(req))
    }
    return (
        <>
            <div className='ml-auto'>
                <Button onClick={handleOpen}>Button</Button>
            </div>
            <Dialog open={open} size={"sm"} handler={handleOpen}>
                <DialogHeader>Create Expense</DialogHeader>
                <DialogBody divider>
                    <ExpensesForm handleOpen={handleOpen} handleFormSubmit={handleFormSubmit} exp={exp}/>
                </DialogBody>
            </Dialog>
        </>
    )
}

export default ExpesnseEditModel
