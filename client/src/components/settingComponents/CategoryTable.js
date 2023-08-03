import React from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { PencilIcon, ArchiveBoxArrowDownIcon } from "@heroicons/react/24/solid";
import {
    Card,
    CardHeader,
    Input,
    Typography,
    Button,
    CardBody,
    Chip,
    CardFooter,
    Tabs,
    TabsHeader,
    Tab,
    Avatar,
    IconButton,
    Tooltip,
} from "@material-tailwind/react";
import { useDispatch, useSelector } from "react-redux";
import { categoryList, categoryUpdate } from "../../features/category/CategoryAction";
import CategoryForm from "./CategoryForm";

const TABLE_HEAD = ["Category name", "Date", "Edit", "Delete",];

export function CategoryTable() {

    const dispatch = useDispatch()
    const [editCat, setEditCat] = React.useState(false)
    const [cateid,setcateid] = React.useState("")

    React.useEffect(() => {
        dispatch(categoryList())
    }, [dispatch])

    const category = useSelector((state) => {
        return state.category
    })

    const handleEditCat = () => {
        setEditCat(!editCat)
    }

    const handleCategory = (req) => {
        dispatch(categoryUpdate(req))
    }

    return (
        <Card className="h-full w-full">
            <CardHeader floated={false} shadow={false} className="rounded-none">
                <div className="mb-8 flex items-center justify-between gap-8">
                    <div>
                        <Typography variant="h5" color="blue-gray">
                            Category
                        </Typography>
                    </div>
                </div>
                <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
                    <div className="w-full md:w-72">
                        <Input label="Search" icon={<MagnifyingGlassIcon className="h-5 w-5" />} />
                    </div>
                    <div>
                        <Button variant="gradient" color="blue-gray" size="sm">
                            Show Deleted Category
                        </Button>
                    </div>
                </div>
            </CardHeader>
            <CardBody className="overflow-scroll px-0">
                <table className="mt-4 w-full min-w-max table-auto text-left">
                    <thead>
                        <tr>
                            {TABLE_HEAD.map((head) => (
                                <th key={head} className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">
                                    <Typography
                                        variant="small"
                                        color="blue-gray"
                                        className="font-normal leading-none opacity-70"
                                    >
                                        {head}
                                    </Typography>
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {category && category.categoryData.length > 0 && [...category.categoryData].reverse().map((cate, index) => {
                            return (
                                <tr key={index}>
                                    <td className={"p-4 border-b border-blue-gray-50"}>
                                        <div className="flex items-center gap-3">
                                            <div className="flex flex-col">
                                                {
                                                    (editCat && cateid==cate._id) ? <CategoryForm handleCategory={handleCategory} _id={cate._id} title={cate.title} handleEditCat={handleEditCat} editCat={editCat} setcateid={setcateid}/> : 
                                                    <Typography variant="small" color="blue-gray" className="font-normal">
                                                        {cate.title}
                                                    </Typography>
                                                }
                                            </div>
                                        </div>
                                    </td>
                                    <td className={"p-4 border-b border-blue-gray-50"}>
                                        <div className="flex flex-col">
                                            <Typography variant="small" color="blue-gray" className="font-normal">
                                                {cate.createdAt}
                                            </Typography>
                                        </div>
                                    </td>
                                    <td className={"p-4 border-b border-blue-gray-50"}>
                                        <Tooltip content="Edit User">
                                            <IconButton variant="text" color="blue-gray">
                                                <PencilIcon className="h-4 w-4"onClick={()=>{
                                                    handleEditCat()
                                                    setcateid(cate._id)
                                                }} />
                                            </IconButton>
                                        </Tooltip>
                                    </td>
                                    <td className={"p-4 border-b border-blue-gray-50"}>
                                        <Tooltip content="Edit User">
                                            <IconButton variant="text" color="blue-gray">
                                                <ArchiveBoxArrowDownIcon className="h-4 w-4" />
                                            </IconButton>
                                        </Tooltip>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </CardBody>
            <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
                <Typography variant="small" color="blue-gray" className="font-normal">
                    Page 1 of 10
                </Typography>
                <div className="flex gap-2">
                    <Button variant="outlined" color="blue-gray" size="sm">
                        Previous
                    </Button>
                    <Button variant="outlined" color="blue-gray" size="sm">
                        Next
                    </Button>
                </div>
            </CardFooter>
        </Card>
    );
}