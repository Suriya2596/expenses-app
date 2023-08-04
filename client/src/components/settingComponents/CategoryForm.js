import React from "react";
import {
  Button,
  Input,
} from "@material-tailwind/react";

export default function CategoryForm({handleCategory,_id,title,handleEditCat,editCat,setcateid}) {

  const [categoryName, setCategoryName] = React.useState(title?title:"")
  const [formError, setFormError] = React.useState({})
  let formErr = {}

  const handleFormError = () => {
    if (categoryName.trim().length === 0) {
      formErr.categoryName = "Required"
    }
  }

  const resolve = () => {
    setCategoryName("")
    setFormError({})
    if(editCat){
      handleEditCat()
      setcateid("")
    }
  }

  const handleFormSubmit = (e) => {
    e.preventDefault()
    handleFormError()
    if (Object.keys(formErr).length > 0) {
      setFormError(formErr)
    } else {
      const data = {
        title: categoryName,
      }
      if(editCat){
        const req = {
          data, resolve,_id
        }
        handleCategory(req)
      }else{
        const req = {
          data, resolve
        }
        handleCategory(req)
      }
      
    }
  }
  return (
    <form onSubmit={handleFormSubmit}>
      <div className="w-72">
        <Input label="Category" color={editCat?"black":"white"} className="py-2" type="text" name="category" value={categoryName} onChange={(e) => {
          setCategoryName(e.target.value)
        }} />
        {
          Object.keys(formError).length > 0 && formError.categoryName && <p className="text-red-600">{formError.categoryName}</p>
        }
        <Button type="submit" color="amber" className="my-4">{editCat?"Update":"Create"} Category</Button>
      </div>
    </form>
  );
}