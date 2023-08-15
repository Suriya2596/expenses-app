import React from "react";
import {
    Card,
    Input,
    Button,
    DialogFooter,
} from "@material-tailwind/react";
import { useDispatch, useSelector } from "react-redux";
import { categoryList } from "../../features/category/CategoryAction";
import { totalBudgetExpesnse } from "../../features/Expenses/ExpensesAction";

export function ExpensesForm({ handleOpen, handleFormSubmit, exp }) {
    const dispatch = useDispatch()

    React.useEffect(() => {
        dispatch(categoryList())
    }, [dispatch])

    const categories = useSelector((state) => {
        return state.category
    })

    const [title, setTitle] = React.useState(exp.title?exp.title:"")
    const [amount, setAmount] = React.useState(exp.amount?exp.amount:"")
    const [expenseDate, setExpenseDate] = React.useState(exp.expenseDate?exp.expenseDate.slice(0, 10):"")
    const [category, setCategory] = React.useState(exp.category?exp.category:"")
    const [formError, setFormError] = React.useState({})
    let formErr = {}

    const resolve = () => {
        setTitle("")
        setAmount("")
        setExpenseDate("")
        setCategory("")
        handleOpen()
        dispatch(totalBudgetExpesnse())
    }

    const handleFormError = () => {
        if (title.trim().length === 0) {
            formErr.title = "Required"
        }
        if (amount.length === 0) {
            formErr.amount = "Required"
        }
        if (expenseDate.toString().length === 0) {
            formErr.expenseDate = "Required"
        }
        if (category.trim().length === 0) {
            formErr.category = "Required"
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        handleFormError()
        if (Object.keys(formErr).length > 0) {
            setFormError(formErr)
        } else {
            const data = {
                title, amount, expenseDate, category
            }
            const req = {
                data, resolve,_id:exp._id
            }
            handleFormSubmit(req)
        }
    }

    return (
        <Card color="transparent" shadow={false}>
            <form className="mt-8 mb-2 " onSubmit={handleSubmit}>
                <div className="mb-4 flex flex-col gap-6">
                    <div>
                        <Input size="lg" label="Title" type="text" name="title" value={title} onChange={(e) => {
                            setTitle(e.target.value)
                            delete formError.title
                        }} />
                        {
                            Object.keys(formError).length > 0 && formError.title && <p className="text-red-600">{formError.title}</p>
                        }
                    </div>
                    <div>
                        <Input size="lg" label="Amount" type="number" value={amount} onChange={(e) => {
                            setAmount(e.target.value)
                            delete formError.amount
                        }} />
                        {
                            Object.keys(formError).length > 0 && formError.amount && <p className="text-red-600">{formError.amount}</p>
                        }
                    </div>
                    <div>
                        <Input type="date" size="lg" label="Expense Date" value={expenseDate} onChange={(e) => {
                            setExpenseDate(e.target.value)
                            delete formError.expenseDate
                        }} />
                        {
                            Object.keys(formError).length > 0 && formError.expenseDate && <p className="text-red-600">{formError.expenseDate}</p>
                        }
                    </div>
                    <div>
                        <label htmlFor="categories" className="text-[14px] mb-1">Select Category</label>
                        <select id={"categories"} className="p-2 w-full outline-none border-2 rounded-[6px]" label="Select Category" value={category} onChange={(e) => {
                            setCategory(e.target.value)
                            delete formError.category
                        }}>
                            <option value="ksv">Select...</option>
                            {categories && categories.categoryData.length > 0 &&
                                categories.categoryData.map((cate) => (
                                    !cate.isDelete && <option key={cate._id} value={cate._id}>
                                        {cate.title}
                                    </option>
                                ))}
                        </select>
                        {
                            Object.keys(formError).length > 0 && formError.category && <p className="text-red-600">{formError.category}</p>
                        }
                    </div>
                </div>
                <DialogFooter>
                    <Button
                        variant="text"
                        color="red"
                        onClick={handleOpen}
                        className="mr-1"
                    >
                        <span>Cancel</span>
                    </Button>
                    <Button variant="gradient" color="green" type="text">
                        <span>Confirm</span>
                    </Button>
                </DialogFooter>
            </form>
        </Card>
    );
}