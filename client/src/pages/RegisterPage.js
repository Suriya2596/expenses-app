import React from 'react'
import registerImg from "../asstes/images/register/register-img.svg"
import RegisterForm from '../components/loginRegister/RegisterForm'

const RegisterPage = () => {
  return (
    <div className='max-w-screen-xl mx-auto px-4 xl:px-0 h-screen'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-12 py-6 flex items-center justify-center h-screen'>
        <div>
          <div className='my-6'>
            <h2 className='primary-cl'>Daily Expense <span className='white-cl'>App</span></h2>
          </div>
          <div>
            <img src={registerImg} width={"100%"} height={"auto"} alt='register imgae' />
          </div>
        </div>
        <div>
          <RegisterForm />
        </div>
      </div>
    </div>
  )
}

export default RegisterPage
