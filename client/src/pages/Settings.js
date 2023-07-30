import React from 'react'
import BudgetMain from '../components/settingComponents/BudgetMain'
import CategoryMain from '../components/settingComponents/CategoryMain'
import { useDispatch } from 'react-redux'
import { budgetList } from '../features/Budget/BudgetAction'

const Settings = () => {
  const dispatch = useDispatch()
  React.useEffect(()=>{
    dispatch(budgetList())
  },[])
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
      <div className='mt-4'>
        <BudgetMain />
      </div>
      <div className='mt-4'>
        <CategoryMain />
      </div>
    </div>
  )
}

export default Settings
