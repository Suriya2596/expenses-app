import React from "react"
import {
    Card,
    Input,
    Checkbox,
  } from "@material-tailwind/react";
   
export default function RegisterForm() {
  const [name,setName] = React.useState("")
  const [email,setEmail] = React.useState("")
  const [mobile,setMobile] = React.useState("")
  const [password,setPassword] = React.useState("")
  const [terms,setTerms] = React.useState(false)

  const [formError,setFormError] = React.useState({})
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

  const handleFormError = ()=>{
    if(name.trim().length===0){
      formErr.name = "Name is Required"
    }
    if(email.trim().length===0){
      formErr.email = "Email is required"
    }else if(!verifyEmail(email)){
      formErr.email = "Email Address is invalidate"
    }

    if(mobile.trim().length<10){
      formErr.mobile = "Mobile is requried"
    }else if(!verifyNumber(mobile)){
      formErr.mobile = "Mobile is invalidate"
    }

    if(password.trim().length===0 || password.trim().length<8){
      formErr.password = "Password is Required"
    }

    if(!terms){
      formErr.terms = "Accepts the Terms and Condition"
    }
  }

  const resolve = ()=>{
    setName("")
    setEmail("")
    setMobile("")
    setPassword("")
    setTerms(false)
  }

  const handleFormSubmit = (e)=>{
    e.preventDefault()
    handleFormError()
    if(Object.keys(formErr).length>0){
      setFormError(formErr)
    }else{
      const data = {
        name,email,mobile,password
      }
      console.log(data)
      resolve()
    }
  }

  


    return (
      <Card color="transparent" shadow={false} className="text-[#fdfcfa]">
        <h4>
          Sign Up
        </h4>
        <p className="mt-2">
          Enter your details to register.
        </p>
        <form className="mt-8 mb-2 w-[100%] max-w-screen-lg md:w-96" onSubmit={handleFormSubmit}>
          <div className="mb-4 flex flex-col gap-6">
            <div>
              <Input type="text" size="lg" label="Name" color="white" value={name} onChange={(e)=>{
                setName(e.target.value)
                delete formError.name
              }}/>
              {
                Object.keys(formError).length>0 && formError.name && <small className="block text-[#CA463D] mt-2">{formError.name}</small>
              }
            </div>
            <div>
              <Input type="text" size="lg" label="Email" color="white" value={email} onChange={(e)=>{
                setEmail(e.target.value)
                delete formError.email
              }} />
              {
                Object.keys(formError).length>0 && formError.email && <small className="block text-[#CA463D] mt-2">{formError.email}</small>
              }
            </div>
            <div>
              <Input type="number" size="lg" label={"Mobile No"} color="white" className="px-12" value={mobile} onChange={(e)=>{
                setMobile(e.target.value)
                delete formError.mobile
              }}/>
              {
                Object.keys(formError).length>0 && formError.mobile && <small className="block text-[#CA463D] mt-2">{formError.mobile}</small>
              }
            </div>
            <div>
              <Input type="password" size="lg" label="Password" color="white" value={password} onChange={(e)=>{
                setPassword(e.target.value)
                delete formError.password
              }}/>
              {
                Object.keys(formError).length>0 && formError.password && <small className="block text-[#CA463D] mt-2">{formError.password}</small>
              }
            </div>
          </div>
         <div>
          <Checkbox
              label={
                (
                  <>
                    I agree the &nbsp;Terms and Conditions
                  </>
                )
              }
              checked={terms}
              type="checkbox"
              onChange={()=>{
                setTerms(!terms)
                delete formError.terms
              }}
              containerProps={{ className: "-ml-2.5" }}
              color="yellow"
            />
            {
              Object.keys(formError).length>0 && formError.terms && <small className="block text-[#CA463D] mt-2">{formError.terms}</small>
            }
         </div>
          <button type="submit" className="px-12 text-center font-bold py-4 text-black bg-[#FECE2F] rounded-[4px] w-[100%] mt-6" >
            Register
          </button>
          <p className="mt-4 text-center font-normal">
            Already have an account?{" "}
            <span className="font-medium text-[#FECE2F] transition-colors hover:text-blue-700">
              Sign In
            </span>
          </p>
        </form>
      </Card>
    );
  }