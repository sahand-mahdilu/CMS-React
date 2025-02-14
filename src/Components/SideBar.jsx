import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";
import { NavLink, Outlet } from "react-router";
import TopBar from "./TopBar";

export default function SideBar() {
  return (
    <>
      <TopBar/>
    <div className="flex">
    <div  className=" sticky top-20  h-full min-w-52 bg-blue-50   ">
      <div className=" wrapper p-2  ">
        <div>
          <h2 className="font-semibold text-gray-400 mb-1">Dashbord</h2>

          <ul className="">

            <NavLink to={'/'}>

            
            <li className="hover:bg-blue-200 rounded-lg p-1 cursor-pointer flex items-center">
              <Icon
                className="text-blue-600"
                icon="solar:home-bold"
                width="24"
                height="24"
              />
              <span>Home</span>
            </li>
            </NavLink>
            <li className="hover:bg-blue-200 rounded-lg p-1 cursor-pointer flex items-center">
              <Icon
                className="text-blue-600"
                icon="material-symbols-light:data-exploration-rounded"
                width="24"
                height="24"
              />
              <span>Analytics</span>
            </li>
            <li className="hover:bg-blue-200 rounded-lg p-1 cursor-pointer flex items-center">
              <Icon
                className="text-blue-600"
                icon="material-symbols:money-bag-rounded"
                width="24"
                height="24"
              />
              <span>Sales</span>
            </li>
          </ul>
        </div>

        <div className="mt-3">
          <h2 className="font-semibold text-gray-400 mb-1">Quic Menu</h2>

          <ul>
            <NavLink to={"users"}>
            <li className="hover:bg-blue-200 rounded-lg p-1 cursor-pointer flex items-center">
            <Icon className="text-blue-600" icon="solar:user-bold-duotone" width="24" height="24"  />
              <span>Users</span>
            </li>
            </NavLink>
      
            <li className="hover:bg-blue-200 rounded-lg p-1 cursor-pointer flex items-center">
            <Icon className="text-blue-600" icon="solar:user-bold-duotone" width="24" height="24"  />
              <span>New Users</span>
            </li>
           
            <NavLink to={"products"}>
            <li className="hover:bg-blue-200 rounded-lg p-1 cursor-pointer flex items-center">
            <Icon className="text-blue-600" icon="material-symbols:production-quantity-limits-rounded" width="24" height="24"   />
              <span>Products</span>
            </li>
            </NavLink>
            <li className="hover:bg-blue-200 rounded-lg p-1 cursor-pointer flex items-center">
            <Icon className="text-blue-600" icon="material-symbols:attach-money" width="24" height="24" />
              <span>Transactions</span>
            </li>
            <li className="hover:bg-blue-200 rounded-lg p-1 cursor-pointer flex items-center">
            <Icon className="text-blue-600" icon="material-symbols:bar-chart-4-bars-rounded" width="24" height="24"  />
              <span>Reports</span>
            </li>

            
          </ul>
        </div>

        <div className="mt-3">
          <h2 className="font-semibold text-gray-400 mb-1">Notification</h2>

          <ul className="">
            <li className="hover:bg-blue-200 rounded-lg p-1 cursor-pointer flex items-center">
            <Icon className="text-blue-600" icon="material-symbols:stacked-email-outline-sharp" width="24" height="24"  />
              <span>Mail</span>
            </li>
            <li className="hover:bg-blue-200 rounded-lg p-1 cursor-pointer flex items-center">
            <Icon className="text-blue-600" icon="material-symbols:dynamic-feed-sharp" width="24" height="24"   />
              <span>Feedback</span>
            </li>
            <li className="hover:bg-blue-200 rounded-lg p-1 cursor-pointer flex items-center">
            <Icon className="text-blue-600" icon="material-symbols:business-messages" width="24" height="24"   />
              <span>Messages</span>
            </li>
          </ul>
        </div>
        <div className="mt-3">
          <h2 className="font-semibold text-gray-400 mb-1">Staff</h2>

          <ul className="">
            <li className="hover:bg-blue-200 rounded-lg p-1 cursor-pointer flex items-center">
            <Icon className="text-blue-600" icon="material-symbols:cases-rounded" width="24" height="24"   />
              <span>manage</span>
            </li>
            <li className="hover:bg-blue-200 rounded-lg p-1 cursor-pointer flex items-center">
              <Icon
                className="text-blue-600"
                icon="material-symbols-light:data-exploration-rounded"
                width="24"
                height="24"
              />
              <span>Analize</span>
            </li>
            <li className="hover:bg-blue-200 rounded-lg p-1 cursor-pointer flex items-center">
            <Icon className="text-blue-600" icon="material-symbols:cases-rounded" width="24" height="24"   />
              <span>Reports</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div className="p-2">
    <Outlet/>

    </div>
    </div>
    </>
  );
}
