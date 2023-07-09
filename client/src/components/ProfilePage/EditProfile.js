import React from 'react'
import { Button, Input } from '@material-tailwind/react'
import { useDispatch } from 'react-redux'
import { updateUser } from '../../features/User/UserAction'

const EditProfile = (props) => {
  const dispatch = useDispatch()

  const {
    handleUserToggle,
    userToggle,
    handleMobileToggle,
    mobileToggle,
    data,
    lable,
  } = props

  const [formInput, setFormInput] = React.useState(data)
  const [formError, setFormError] = React.useState({})

  const verifyNumber = (value) => {
    var numberRex = new RegExp("^[0-9]+$");
    if (numberRex.test(value)) {
      return true;
    }
    return false;
  };

  const handleFormSubmit = (e) => {
    e.preventDefault()

    if (userToggle) {
      const resolve = ()=>{
        setFormError({})
        handleUserToggle()
      }
      if (formInput.trim().length === 0) {
        formError.name = "Name is required"
      } else {
        const data = {
          [lable]: formInput,
        }
        const resData = {
          data,resolve
        }
        dispatch(updateUser(resData))
      }
    }
    if (mobileToggle) {
      const resolve = ()=>{
        setFormError({})
        handleMobileToggle()
      }
      if (formInput.trim().length < 10 || !verifyNumber(formInput)) {
        formError.mobile = "Mobile is required"
      } else {
        const data = {
          [lable]: formInput,
        }
        const resData = {
          data,resolve
        }
        dispatch(updateUser(resData))
      }
    }
  }
  return (
    <form className='flex' onSubmit={handleFormSubmit}>
      <Input type='text' color='white' label={lable} value={formInput} onChange={(e) => {
        setFormInput(e.target.value)
      }} />
      <div className='flex'>
        <Button className='mx-4' type='submit'>Save</Button>
        <Button className='mx-4' color="red" onClick={()=>{
          userToggle && handleUserToggle()
          mobileToggle && handleMobileToggle()
        }}>Cancle</Button>
      </div>
    </form>
  )
}

export default EditProfile
