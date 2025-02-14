import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";

export default function SideBar() {
  return (
    <div  className="  h-[100vh] min-w-52 bg-blue-50  sticky top-20 ">
      <div className="wrapper p-2 sticky top-20 ">
        <div>
          <h2 className="font-semibold text-gray-400 mb-1">Dashbord</h2>

          <ul className="">
            <li className="hover:bg-blue-200 rounded-lg p-1 cursor-pointer flex items-center">
              <Icon
                className="text-blue-600"
                icon="solar:home-bold"
                width="24"
                height="24"
              />
              <span>Home</span>
            </li>
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
            <li className="hover:bg-blue-200 rounded-lg p-1 cursor-pointer flex items-center">
            <Icon className="text-blue-600" icon="solar:user-bold-duotone" width="24" height="24"  />
              <span>Users</span>
            </li>
            <li className="hover:bg-blue-200 rounded-lg p-1 cursor-pointer flex items-center">
            <Icon className="text-blue-600" icon="solar:user-bold-duotone" width="24" height="24"  />
              <span>New Users</span>
            </li>
            <li className="hover:bg-blue-200 rounded-lg p-1 cursor-pointer flex items-center">
            <Icon className="text-blue-600" icon="material-symbols:production-quantity-limits-rounded" width="24" height="24"   />
              <span>Products</span>
            </li>
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
  );
}
