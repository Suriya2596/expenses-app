import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { accountUser } from '../features/User/UserAction'
import CreateExpense from '../components/HomePage/CreateExpense'
import { ExpenseTable } from '../components/HomePage/ExpenseTable'

const Dashboard = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  
  React.useEffect(()=>{
    if(!localStorage.getItem("token")){
      navigate("/login")
    }
  },[])

  React.useEffect(()=>{
    dispatch(accountUser())
  },[])

  const user = useSelector((state)=>{
    return state.user
  })

  return (
    <div className='max-w-screen-xl mx-auto px-4 xl:px-0'>
      <h6>Hi {user && Object.keys(user.user).length>0 && <span>{user.user.name}</span>} , This is your Dashboard</h6>
      <CreateExpense />
      <ExpenseTable />
    </div>
  )
}

export default Dashboard
