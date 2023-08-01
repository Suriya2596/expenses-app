import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { accountUser } from '../features/User/UserAction'

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

  return (
    <div>
      Dashboard
    </div>
  )
}

export default Dashboard
