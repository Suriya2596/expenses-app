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

import { Link } from "react-router-dom";

export default function NavBar() {
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
      name: " Log Out",
    },
  ];

  return (
    <>
      {/* <button data-drawer-target="default-sidebar" data-drawer-toggle="default-sidebar" aria-controls="default-sidebar" type="button" class="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
        <span class="sr-only">Open sidebar</span>
        <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
        </svg>
      </button> */}
      <Card className="w-[100%] h-[100%] m-4 p-4 shadow-xl shadow-blue-gray-900/5" id="sidebar">
        <div className="mb-2 p-4">
          <Typography variant="h5" color="blue-gray">
            Expenses App
          </Typography>
        </div>
        <List>
          {linksNav?.map((eleLink, el) => {
            return (
              <ListItem key={el}>
                <ListItemPrefix>{eleLink.icon()}</ListItemPrefix>
                <Link to={eleLink.path}>{eleLink.name}</Link>
              </ListItem>
            );
          })}
        </List>
      </Card>
    </>
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
