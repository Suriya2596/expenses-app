import React from 'react'
import {
    Card,
    Input,
    Checkbox,
    Button,
    Typography,
} from "@material-tailwind/react";

import { useDispatch, useSelector } from "react-redux";

const BudgetForm = ({handleEditBudget}) => {
    const budget = useSelector((state) => {
        return state.budget
    })
    const [totalBudget, setTotalBudget] = React.useState("")
    const [formError, setFormError] = React.useState({})

    React.useEffect(() => {
        if (budget && Object.keys(budget.budgetData).length > 0) {
            setTotalBudget((budget.budgetData.total))
        }
    }, [budget])

    const handleFormError = () => {
        if (totalBudget.length == 0) {
            setFormError({ total: "error" })
        }
    }

    const handleFormSubmit = (e) => {
        e.preventDefault()
        handleFormError()
        if (!Object.keys(formError).length > 0) {
            const data = {
                total: totalBudget
            }
            handleEditBudget()
            console.log(data)
        }
    }
    return (
        <>
            <form className="my-2" onSubmit={handleFormSubmit}>
                <div className="mb-4 flex flex-col gap-6">
                    <Input size="lg" label="Budget" color='white'
                        value={totalBudget}
                        type='number'
                        onChange={(e) => {
                            setTotalBudget(e.target.value)
                            delete formError.total
                        }}
                    />
                    {
                        Object.keys(formError).length > 0 && formError.total && <p className='text-red-600'>{formError.total}</p>
                    }
                </div>
                <Button color="amber" onClick={handleEditBudget} type='submit'>Update Budget</Button>
            </form>
        </>
    )
}

export default BudgetForm
