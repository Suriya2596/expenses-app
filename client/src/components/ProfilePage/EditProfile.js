import React from 'react'
import { Button, Input } from '@material-tailwind/react'

const EditProfile = (props) => {
  
  const {
    handleUserToggle,
    userToggle,
    handleMobileToggle,
    mobileToggle,
    data,
    lable,
  } = props

  const [formInput,setFormInput] = React.useState(data)
  const [formError,setFormError] = React.useState({})

  const verifyNumber = (value) => {
    var numberRex = new RegExp("^[0-9]+$");
    if (numberRex.test(value)) {
      return true;
    }
    return false;
  };

  const handleFormSubmit = (e)=>{
    e.preventDefault()
    if(userToggle){
      if(formInput.trim().length===0){
        formError.name = "Name is required"
      }else{
        const data = {
          [lable] : formInput
        }
        console.log(data)
        setFormError({})
      }
    }
    if(mobileToggle){
      if(formInput.trim().length<10 || !verifyNumber(formInput)){
        formError.mobile = "Mobile is required"
      }else{
        const data = {
          [lable] : formInput
        }
        console.log(data)
        setFormError({})
      }
    }
  }
  return (
    <form className='' onSubmit={handleFormSubmit}>
      <Input type='text' value={formInput} onChange={(e)=>{
        setFormInput(e.target.value)
      }} />
      <Button type='submit'>Save</Button>
    </form>
  )
}

export default EditProfile
