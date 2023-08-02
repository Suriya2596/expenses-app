import React from "react";
import { Input, Button } from "@material-tailwind/react";

import { useDispatch, useSelector } from "react-redux";
import { budgetUpdate } from "../../features/Budget/BudgetAction";

function BudgetForm({handleEditBudget}) {

    const dispatch = useDispatch()
    
    const [total,setTotal] = React.useState("")
    const [formError,setFormError] = React.useState({})
    let formErr = {}

    const {budgetData} = useSelector((state)=>{
        return state.budget
    })

    React.useEffect(()=>{
        if(budgetData){
            setTotal(budgetData.total)
        }
    },[budgetData])

    const handleFormError = ()=>{
        if(total.length===0){
            formErr.total = "Required"
        }
    }

    const resolve = ()=>{
        setTotal("")
        setFormError({})
        handleEditBudget()
    }

    const handleFormSubmit = (e)=>{
        e.preventDefault()
        handleFormError()
        if(Object.keys(formErr).length>0){
            setFormError(formErr)
        }else{
            const data = {
                total
            }
            const req = {
                data,resolve
            }
            dispatch(budgetUpdate(req))
        }
    }

    return (
        <form onSubmit={handleFormSubmit} action="/submit" method="POST">
            <div className="w-72">
                <Input label="Budget" color="white" className="py-2" type="number" name="total" value={total} onChange={(e)=>{
                    setTotal(e.target.value)
                }} />
                {
                    Object.keys(formError).length>0 && formError.total && <p className="text-red-600">{formError.total}</p>
                }
                <Button type="submit" color="amber" className="my-4">Update Budget</Button>
            </div>
        </form>
    );
}

export default BudgetForm