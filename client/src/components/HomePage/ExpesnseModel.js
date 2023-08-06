import React from "react";
import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
} from "@material-tailwind/react";
import { ExpensesForm } from "./ExpensesForm";

const ExpesnseModel = () => {
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => setOpen(!open);
    return (
        <>
            <div className='ml-auto'>
                <Button onClick={handleOpen}>Button</Button>
            </div>
            <Dialog open={open} size={"sm"} handler={handleOpen}>
                <DialogHeader>Create Expense</DialogHeader>
                <DialogBody divider>
                    <ExpensesForm handleOpen={handleOpen}/>
                </DialogBody>
            </Dialog>
        </>
    )
}

export default ExpesnseModel
