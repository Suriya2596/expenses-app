import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { accountUser } from '../features/User/UserAction'
import CreateExpense from '../components/HomePage/CreateExpense'
import { ExpenseTable } from '../components/HomePage/ExpenseTable'
import BudgetExpenseChart from '../components/HomePage/BudgetExpenseChart'
import AllExpenseChart from '../components/HomePage/AllExpenseChart'
import { Card } from '@material-tailwind/react'
import { totalBudgetExpesnse } from '../features/Expenses/ExpensesAction'

const Dashboard = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  React.useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/login")
    }
  }, [navigate])

  React.useEffect(() => {
    dispatch(accountUser())
    dispatch(totalBudgetExpesnse())
  }, [dispatch])

  const user = useSelector((state) => {
    return state.user
  })
  const expesnse = useSelector((state) => {
    return state.expenses
  })

  return (
    <div className='max-w-screen-xl mx-auto px-4 xl:px-0'>
      <h6>Hi {user && Object.keys(user.user).length > 0 && <span>{user.user.name}</span>} , This is your Dashboard</h6>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4 my-12'>
        <div className='grid gap-2'>
          <h6>Remaining Budget and Total Expenses</h6>
          <div className='w-[300px]  h-[300px]'>
            <BudgetExpenseChart />
          </div>
        </div>
        <div>
          <h6>Category via Expenses Chart</h6>
          <div className='w-[300px]  h-[300px]'>
            <AllExpenseChart />
          </div>
        </div>
      </div>
      <div className='grid grid-cols-3 gap-4 mb-12'>
        <Card className='py-2 px-4'>
          <h6 className='black-cl'>Total Budget:</h6>
          <p className='black-cl'>{expesnse && expesnse.totalExpesnse.totalBudget}</p>
        </Card>
        <Card className='py-2 px-4'>
          <h6 className='black-cl'>Remaining Budget:</h6>
          <p>{expesnse && expesnse.totalExpesnse.remainingBudget && expesnse.totalExpesnse.remainingBudget > 0 ? <span className='text-green-600'>{expesnse.totalExpesnse.remainingBudget}</span> : <span className='text-red-600'>{expesnse.totalExpesnse.remainingBudget}</span>}</p>
        </Card>
        <Card className='py-2 px-4'>
          <h6 className='black-cl'>Total Expense:</h6>
          <p className='black-cl'>{expesnse && expesnse.totalExpesnse.totalExpense}</p>
        </Card>

      </div>
      <CreateExpense />
      <ExpenseTable />
    </div>
  )
}

export default Dashboard
