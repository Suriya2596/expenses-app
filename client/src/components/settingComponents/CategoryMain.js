import React from "react";
import {
  Card,
  CardBody,
  CardFooter,
  Button,
  Input,
} from "@material-tailwind/react";
import { DocumentMinusIcon } from "@heroicons/react/24/solid";
import { useDispatch, useSelector } from "react-redux";import { categoryCreate } from "../../features/category/CategoryAction";
;


export default function CategoryMain() {
  
  const dispatch = useDispatch()
    
  const [categoryName,setCategoryName] = React.useState("")
  const [formError,setFormError] = React.useState({})
  let formErr = {}

  const handleFormError = ()=>{
      if(categoryName.trim().length===0){
          formErr.categoryName = "Required"
      }
  }

  const resolve = ()=>{
    setCategoryName("")
      setFormError({})
  }

  const handleFormSubmit = (e)=>{
      e.preventDefault()
      handleFormError()
      if(Object.keys(formErr).length>0){
          setFormError(formErr)
      }else{
          const data = {
            title:categoryName
          }
          const req = {
              data,resolve
          }
          dispatch(categoryCreate(req))
      }
  }
  return (
    <Card className="mt-6 w-auto bg-drak-gray">
      <CardBody>
        <DocumentMinusIcon className="primary-cl w-12 h-12 mb-2" />
        <h5 className="mb-2 white-cl">
          Category
        </h5>
        <form onSubmit={handleFormSubmit}>
            <div className="w-72">
              <Input label="Category" color="white" className="py-2" type="text" name="category" value={categoryName} onChange={(e) => {
                setCategoryName(e.target.value)
              }} />
              {
                Object.keys(formError).length > 0 && formError.categoryName && <p className="text-red-600">{formError.categoryName}</p>
              }
              <Button type="submit" color="amber" className="my-4">Create Category</Button>
            </div>
          </form>
      </CardBody>
    </Card>
  );
}