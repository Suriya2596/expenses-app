import React from 'react'

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

import { Link } from 'react-router-dom';

export default function NavBar() {

  const linksNav = [
    {
      icon: () => <PresentationChartBarIcon className="h-5 w-5" />,
      path: "/",
      name: "Dashboard"
    },
    {
      icon: () => <UserCircleIcon className="h-5 w-5" />,
      path: "/profile",
      name: "Profile"
    },
    {
      icon: () => <Cog6ToothIcon className="h-5 w-5" />,
      path: "/setting",
      name: "Settings"
    },
    {
      icon: () => <PowerIcon className="h-5 w-5" />,
      path: "/logout",
      name: " Log Out"
    },
  ]

  return (
    <Card className="w-[100%] h-[100%] m-4 p-4 shadow-xl shadow-blue-gray-900/5">
      <div className="mb-2 p-4">
        <Typography variant="h5" color="blue-gray">
          Expenses App
        </Typography>
      </div>
      <List>
        {
          linksNav?.map((eleLink, el) => {
            return (
              <Link key={el} to={eleLink.path}>
                <ListItem >
                  <ListItemPrefix>
                    {eleLink.icon()}
                  </ListItemPrefix>
                  {eleLink.name}
                </ListItem>
              </Link>
            )
          })
        }
      </List>
    </Card>
  );
}
