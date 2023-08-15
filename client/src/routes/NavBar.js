import React from "react";
import {
  Navbar,
  // MobileNav,
  Typography,
  // Button,
  IconButton,
  // Card,
  // List,
  ListItem,
  ListItemPrefix,
  Collapse,
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
import { expesnestLogout } from "../features/Expenses/ExpensesAction";
import { categoriestLogout } from "../features/category/CategoryAction";

export default function NavBar() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false),
    );
  }, []);

  const linksNav = [
    {
      icon: () => <PresentationChartBarIcon className="h-5 w-5" />,
      path: "/",
      name: "Board",
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
      name: "Logout",
    },
  ];

  const handleLogout = () => {
    localStorage.getItem("token") && localStorage.removeItem("token")
    navigate("/login")
    dispatch(userLogout())
    dispatch(budgetLogout())
    dispatch(expesnestLogout())
    dispatch(categoriestLogout())
  }




  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 mx-auto">
      {linksNav?.map((eleLink, el) => {
        return (
          <ListItem key={el}>
            <ListItemPrefix>{eleLink.icon()}</ListItemPrefix>
            {eleLink.path === "/logout" ? <span onClick={handleLogout}>{eleLink.name}</span> : <Link to={eleLink.path}>{eleLink.name}</Link>}
          </ListItem>
        );
      })}
    </ul>
  );

  return (
    <Navbar className="py-2 px-4 xl:px-0 lg:py-4 bg-[#100E0E] mx-auto border-0">
      <div className="container mx-auto flex items-center justify-between text-white ">
        <Typography
          as="a"
          href="#"
          className="mr-4 cursor-pointer py-1.5 font-medium"
        >
          Expenses App
        </Typography>
        <div className="hidden lg:block">{navList}</div>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <div className="container mx-auto">
          {navList}
        </div>
      </Collapse>
    </Navbar>
  );
}