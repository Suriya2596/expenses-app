import React from "react";
import {
  Card,
  CardBody,
} from "@material-tailwind/react";
import { DocumentMinusIcon } from "@heroicons/react/24/solid";
import { useDispatch } from "react-redux";
import { categoryCreate } from "../../features/category/CategoryAction";
import CategoryForm from "./CategoryForm";
;


export default function CategoryMain() {

  const dispatch = useDispatch()

  const handleCategory = (req) => {
    dispatch(categoryCreate(req))
  }
  return (
    <Card className="mt-6 w-auto bg-drak-gray">
      <CardBody>
        <DocumentMinusIcon className="primary-cl w-12 h-12 mb-2" />
        <h5 className="mb-2 white-cl">
          Category
        </h5>
        <CategoryForm handleCategory={handleCategory} />
      </CardBody>
    </Card>
  );
}