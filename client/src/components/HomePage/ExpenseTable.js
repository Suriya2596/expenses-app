import React from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { PencilIcon } from "@heroicons/react/24/solid";
import {
    Card,
    CardHeader,
    Input,
    Typography,
    Button,
    CardBody,
    CardFooter,
    IconButton,
    Tooltip,
} from "@material-tailwind/react";
import { expensesCreate } from "../../features/Expenses/ExpensesAction";
import { useDispatch, useSelector } from "react-redux";
import { categoryList } from "../../features/category/CategoryAction";
import { expensesList } from "../../features/Expenses/ExpensesAction";


export function ExpenseTable() {

    const dispatch = useDispatch()
    const [showDeletedExp, setShowDeletedExp] = React.useState(false)
    const [open, setOpen] = React.useState(false);
    const [expId, setExpId] = React.useState("")
    const [title, setTitle] = React.useState("")
    const [amount, setAmount] = React.useState("")
    const [expenseDate, setExpenseDate] = React.useState("")
    const [categoryId, setCategory] = React.useState("")

    React.useEffect(() => {
        dispatch(expensesList())
        dispatch(categoryList())
    }, [dispatch])


    const handleOpen = () => setOpen(!open);

    const handleFormSubmit = (req) => {
        dispatch(expensesCreate(req))
    }

    const expenses = useSelector((state) => {
        return state.expenses
    })

    const category = useSelector((state) => {
        return state.category
    })

    const handleShowDeletedExp = () => {
        setShowDeletedExp(!showDeletedExp)
    }

    const TABLE_HEAD = ["Expense name", "Category name", "Amount", "Date", "Edit", "Action"];

    return (
        <form>
            <Card className="h-full w-full my-6">
                <CardHeader floated={false} shadow={false} className="rounded-none">
                    <div className="mb-8 flex items-center justify-between gap-8">
                        <div>
                            <Typography variant="h5" color="blue-gray">
                                Expenses
                            </Typography>
                        </div>
                    </div>
                    <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
                        <div className="w-full md:w-72">
                            <Input label="Search" icon={<MagnifyingGlassIcon className="h-5 w-5" />} />
                        </div>
                        <div>
                            <Button variant="gradient" color="blue-gray" size="sm" onClick={handleShowDeletedExp}>
                                {showDeletedExp ? "Show Undeleted Expenses" : "Show Deleted Expenses"}
                            </Button>
                        </div>
                    </div>
                </CardHeader>
                <CardBody className="overflow-scroll px-0">
                    <table className="mt-4 w-full min-w-max table-auto text-left">
                        <thead>
                            <tr>
                                {TABLE_HEAD.map((head) => (
                                    <th key={head} className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">
                                        <Typography
                                            variant="small"
                                            color="blue-gray"
                                            className="font-normal leading-none opacity-70"
                                        >
                                            {head}
                                        </Typography>
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        {
                            <tbody>
                                {expenses && expenses.expensesdata.length > 0 && [...expenses.expensesdata].reverse().map((expens, index) => {
                                    return (
                                        !showDeletedExp && !expens.isDelete && (
                                            <tr key={index}>
                                                <td className={"p-4 border-b border-blue-gray-50"}>
                                                    {
                                                        (open && expId == expens._id) ? "" : <div className="flex flex-col">
                                                            <Typography variant="small" color="blue-gray" className="font-normal">
                                                                {expens.title}
                                                            </Typography>
                                                        </div>
                                                    }
                                                    {
                                                        open && expId == expens._id && <div>
                                                            <Input size="lg" label="Title" type="text" name="title" value={title} onChange={(e) => {
                                                                setTitle(e.target.value)
                                                            }} />
                                                        </div>
                                                    }
                                                </td>
                                                <td className={"p-4 border-b border-blue-gray-50"}>
                                                    {
                                                        (open && expId == expens._id) ? "" : <div className="flex flex-col">
                                                            <Typography variant="small" color="blue-gray" className="font-normal">
                                                                {
                                                                    category && category.categoryData.length > 0 ? category.categoryData.map((ele, e) => {
                                                                        if (expens.category === ele._id) {
                                                                            return ele.isDelete ? <p key={e} className="line-through">{ele.title}</p> : <p key={e}>{ele.title}</p>
                                                                        }
                                                                        return null
                                                                    }) : <p>Create Category</p>
                                                                }
                                                            </Typography>
                                                        </div>
                                                    }
                                                    {
                                                        open && expId == expens._id && <div>
                                                            {/* <label htmlFor="categories" className="text-[12px] mb-1">Select Category</label> */}
                                                            <select id={"categories"} className="p-2 w-full outline-none border-2 rounded-[6px]" label="Select Category" value={categoryId} onChange={(e) => {
                                                                setCategory(e.target.value)
                                                            }}>
                                                                <option value="ksv">Select...</option>
                                                                {category && category.categoryData.length > 0 &&
                                                                    category.categoryData.map((cate) => (
                                                                        !cate.isDelete && <option key={cate._id} value={cate._id}>
                                                                            {cate.title}
                                                                        </option>
                                                                    ))}
                                                            </select>
                                                        </div>
                                                    }
                                                </td>
                                                <td className={"p-4 border-b border-blue-gray-50"}>
                                                    {
                                                        (open && expId == expens._id) ? "" : <div className="flex flex-col">
                                                            <Typography variant="small" color="blue-gray" className="font-normal">
                                                                {expens.amount}
                                                            </Typography>
                                                        </div>
                                                    }

                                                    {
                                                        open && expId == expens._id && <div>
                                                            <Input size="lg" label="Amount" type="number" value={amount} onChange={(e) => {
                                                                setAmount(e.target.value)
                                                            }} />
                                                        </div>
                                                    }
                                                </td>
                                                <td className={"p-4 border-b border-blue-gray-50"}>
                                                    {
                                                        (open && expId == expens._id) ? "" : <div className="flex flex-col">
                                                            <Typography variant="small" color="blue-gray" className="font-normal">
                                                                {expens.createdAt}
                                                            </Typography>
                                                        </div>
                                                    }

                                                    {
                                                        open && expId == expens._id && <div>
                                                            <Input type="date" size="lg" label="Expense Date" value={expenseDate} onChange={(e) => {
                                                                setExpenseDate(e.target.value)
                                                            }} />
                                                        </div>
                                                    }
                                                </td>
                                                <td className={"p-4 border-b border-blue-gray-50"}>
                                                    <Tooltip content="Edit User">
                                                        <IconButton variant="text" color="blue-gray">
                                                            <PencilIcon className="h-4 w-4" onClick={() => {
                                                                handleOpen()
                                                                setExpId(expens._id)
                                                            }} />
                                                        </IconButton>
                                                    </Tooltip>
                                                </td>
                                                <td className={"p-4 border-b border-blue-gray-50"}>
                                                    <Typography variant="small" color="blue-gray" className="hover:text-blue-800 cursor-pointer">
                                                        Delete
                                                    </Typography>
                                                </td>
                                            </tr>
                                        )
                                    )
                                })}
                            </tbody>
                        }
                    </table>
                </CardBody>
                <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
                    <Typography variant="small" color="blue-gray" className="font-normal">
                        Page 1 of 10
                    </Typography>
                    <div className="flex gap-2">
                        <Button variant="outlined" color="blue-gray" size="sm">
                            Previous
                        </Button>
                        <Button variant="outlined" color="blue-gray" size="sm">
                            Next
                        </Button>
                    </div>
                </CardFooter>
            </Card>

        </form>
    );
}