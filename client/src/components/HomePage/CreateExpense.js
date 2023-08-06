import React from 'react'
import ExpesnseModel from './ExpesnseModel'

const CreateExpense = () => {
    return (
        <div>
            <div className='grid grid-cols-2 gap-4'>
                <h4 className=''>Expenses</h4>
                <ExpesnseModel />
            </div>
        </div>
    )
}

export default CreateExpense
