import {
  Card,
  Input,
  Checkbox,
  // Button,
  Typography,
} from "@material-tailwind/react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux"
import React from "react";
import { registerUser } from "../../features/User/UserAction";
import { budgetCreate } from "../../features/Budget/BudgetAction";

export default function RegisterForm() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [name, setName] = React.useState("")
  const [email, setEmail] = React.useState("")
  const [mobile, setMobile] = React.useState("")
  const [password, setPassword] = React.useState("")
  const [formError, setFormError] = React.useState({})
  const formErr = {}

  const verifyEmail = (value) => {
    var emailRex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (emailRex.test(value)) {
      return true;
    }
    return false;
  };
  const verifyNumber = (value) => {
    var numberRex = new RegExp("^[0-9]+$");
    if (numberRex.test(value)) {
      return true;
    }
    return false;
  };

  const handleFormError = () => {

    if (name.trim().length === 0) {
      formErr.name = "Name is required"
    }

    if (email.trim().length === 0) {
      formErr.email = "Email is required"
    } else if (!verifyEmail(email)) {
      formErr.email = "Email Address is invalidate"
    }

    if (mobile.trim().length === 0) {
      formErr.mobile = "Mobile is required"
    } else if (!verifyNumber(mobile)) {
      formErr.mobile = "Mobile is invalidate"
    }

    if (password.trim().length === 0 || password.trim().length < 8) {
      formErr.password = "Password is Required"
    }

  }
  const resolve = (id) => {
    setName("")
    setEmail("")
    setMobile("")
    setPassword("")
    setFormError({})
    dispatch(budgetCreate({user:id}))
    navigate("/login")
  }

  const handleFormSubmit = (e) => {
    e.preventDefault()
    handleFormError()
    if (Object.keys(formErr).length > 0) {
      setFormError(formErr)
    } else {
      const data = {
        name, email, password, mobile
      }
      const req = {
        data,resolve
      }
      dispatch(registerUser(req))
    }
  }

  return (
    <>
      <Card color="transparent" shadow={false} className="text-[#fdfcfa]">
        <h4>
          Sign Up
        </h4>
        <p className="mt-2">
          Enter your details to register.
        </p>
        <form className="mt-8 mb-2 w-[100%] max-w-screen-lg sm:w-96" onSubmit={handleFormSubmit}>
          <div className="mb-4 flex flex-col gap-6">

            <div>
              <Input size="lg" label="Name" color="white" value={name} onChange={(e) => {
                setName(e.target.value)
                delete formError.name
              }} />
              {
                Object.keys(formError).length > 0 && formError.name && <small className="block text-[#CA463D] mt-2">{formError.name}</small>
              }
            </div>

            <div>
              <Input size="lg" label="Email" color="white" value={email} onChange={(e) => {
                setEmail(e.target.value)
                delete formError.email
              }} />
              {
                Object.keys(formError).length > 0 && formError.email && <small className="block text-[#CA463D] mt-2">{formError.email}</small>
              }
            </div>

            <div>
              <Input size="lg" type="number" label="Mobile" color="white" value={mobile} onChange={(e) => {
                setMobile(e.target.value)
                delete formError.mobile
              }} />
              {
                Object.keys(formError).length > 0 && formError.mobile && <small className="block text-[#CA463D] mt-2">{formError.mobile}</small>
              }
            </div>

            <div>
              <Input type="password" size="lg" label="Password" color="white" value={password} onChange={(e) => {
                setPassword(e.target.value)
                delete formError.password
              }} />
              {
                Object.keys(formError).length > 0 && formError.password && <small className="block text-[#CA463D] mt-2">{formError.password}</small>
              }
            </div>

          </div>
          {/* <Checkbox
          label={
            (
              <p>
                I agree the &nbsp;Terms and Conditions
              </p>
            )
          }
          containerProps={{ className: "-ml-2.5" }}
          color="yellow"
        /> */}
          <button className="px-12 text-center font-bold py-4 text-black bg-[#FECE2F] rounded-[4px] w-[100%] mt-6" >
            Register
          </button>
          <Typography color="gray" className="mt-4 text-center font-normal">
            Already have an account?{" "}
            <Link to={"/login"}
              className="font-medium text-[#FECE2F] transition-colors hover:text-blue-700"
            >
              Sign In
            </Link>
          </Typography>
        </form>
      </Card>
    </>
  );
}