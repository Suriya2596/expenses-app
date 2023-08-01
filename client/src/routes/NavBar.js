import React from "react";

import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
} from "@material-tailwind/react";

import {
  PresentationChartBarIcon,
  UserCircleIcon,
  Cog6ToothIcon,
  PowerIcon,
} from "@heroicons/react/24/solid";

import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { userLogout } from "../features/User/UserAction";
import { budgetLogout } from "../features/Budget/BudgetAction";

export default function NavBar() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const linksNav = [
    {
      icon: () => <PresentationChartBarIcon className="h-5 w-5" />,
      path: "/",
      name: "Dashboard",
    },
    {
      icon: () => <UserCircleIcon className="h-5 w-5" />,
      path: "/profile",
      name: "Profile",
    },
    {
      icon: () => <Cog6ToothIcon className="h-5 w-5" />,
      path: "/setting",
      name: "Settings",
    },
    {
      icon: () => <PowerIcon className="h-5 w-5" />,
      path: "/logout",
      name: "Log Out",
    },
  ];

  const handleLogout = ()=>{
    localStorage.getItem("token") && localStorage.removeItem("token")
    navigate("/login")
    dispatch(userLogout())
    dispatch(budgetLogout())
  }

  return (
    <>
      <Card className="w-[100%] h-[100%] p-4 shadow-xl shadow-blue-gray-900/5" id="sidebar">
        <div className="mb-2 p-4">
          <Typography variant="h5" color="blue-gray">
            Expenses App
          </Typography>
        </div>
        <List className="min-w-[200px]">
          {linksNav?.map((eleLink, el) => {
            return (
              <ListItem key={el}>
                <ListItemPrefix>{eleLink.icon()}</ListItemPrefix>
                {eleLink.path=="/logout"?<span onClick={handleLogout}>{eleLink.name}</span>:<Link to={eleLink.path}>{eleLink.name}</Link>}
              </ListItem>
            );
          })}
        </List>
      </Card>
    </>
  );
}