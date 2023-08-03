import React from 'react'
import {
  Card,
  Input,
} from "@material-tailwind/react";
import axios from "axios"
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch,useSelector } from "react-redux"
import { loginUser } from '../../features/User/UserAction';

const LoginForm = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [email, setEmail] = React.useState("")
  const [password, setPassword] = React.useState("")

  const [formError, setFormError] = React.useState({})
  const formErr = {}

  React.useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/")
    }
  }, [])

  const User = useSelector((state)=>{
    return state.user
  })
  

  const verifyEmail = (value) => {
    var emailRex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (emailRex.test(value)) {
      return true;
    }
    return false;
  };

  const handleFormError = () => {
    if (email.trim().length === 0) {
      formErr.email = "Email is required"
    } else if (!verifyEmail(email)) {
      formErr.email = "Email Address is invalidate"
    }

    if (password.trim().length === 0 || password.trim().length < 8) {
      formErr.password = "Password is Required"
    }
  }

  const resolve = () => {
    setEmail("")
    setPassword("")
    navigate("/")
  }

  const handleFormSubmit = (e) => {
    e.preventDefault()
    handleFormError()
    if (Object.keys(formErr).length > 0) {
      setFormError(formErr)
    } else {
      const data = {
        email, password
      }
      const res = {
        data,resolve
      }
      dispatch(loginUser(res))
    }
  }


  return (
    <div>
      {
        User.laoding && <p>loading...</p>
      }
      <Card color="transparent" shadow={false} className="text-[#fdfcfa]">
        <h4>
          Sign in
        </h4>
        <p className="mt-2">
          Enter your details to login.
        </p>
        <form className="mt-8 mb-2 w-[100%] max-w-screen-lg md:w-96" onSubmit={handleFormSubmit}>
          <div className="mb-4 flex flex-col gap-6">
            <div>
              <Input type="text" size="lg" label="Email" color="white" value={email} onChange={(e) => {
                setEmail(e.target.value)
                delete formError.email
              }} />
              {
                Object.keys(formError).length > 0 && formError.email && <small className="block text-[#CA463D] mt-2">{formError.email}</small>
              }
            </div>
            <div>
              <Input type="password" size="lg" autoComplete='off' label="Password" color="white" value={password} onChange={(e) => {
                setPassword(e.target.value)
                delete formError.password
              }} />
              {
                Object.keys(formError).length > 0 && formError.password && <small className="block text-[#CA463D] mt-2">{formError.password}</small>
              }
            </div>
          </div>
          <button type="submit" className="px-12 text-center font-bold py-4 text-black bg-[#FECE2F] rounded-[4px] w-[100%] mt-6" >
            Login
          </button>
          <p className="mt-4 text-center font-normal">
            New to Daily Expenses?{" "}
            <Link to={"/register"} className="font-medium text-[#FECE2F] transition-colors hover:text-blue-700">
              Sign Up
            </Link>
          </p>
        </form>
      </Card>
    </div>
  )
}
export default LoginForm