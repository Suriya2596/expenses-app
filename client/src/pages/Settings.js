import React from 'react'
import BudgetMain from '../components/settingComponents/BudgetMain'
import CategoryMain from '../components/settingComponents/CategoryMain'
import { CategoryTable } from '../components/settingComponents/CategoryTable'

const Settings = () => {
  return (
    <div>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
        <div className='mt-4'>
          <BudgetMain />
        </div>
        <div className='mt-4'>
          <CategoryMain />
        </div>
      </div>
      <div className='mt-12'>
        <CategoryTable />
      </div>
    </div>
  )
}

export default Settings
