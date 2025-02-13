import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";

export default function TopBar() {
  return (
    <div className="topBar_container  fixed z-50 top-0 left-0 right-0  ">
      <div className="wrapper p-3 flex items-center justify-between">
        <div className=" left_content flex items-center">
          <div className="img_container w-20 ">
            <img
              className="cursor-pointer w-full h-full"
              src="/images/mountain-2.png"
              alt="mountain"
            />
          </div>
          <h2 className="font-bold text-lg cursor-pointer">Sahand</h2>
        </div>
        <div className="right_content flex items-center gap-1 ">
          <div className="relative cursor-pointer" >
            <Icon
              className="text-blue-800"
              icon="solar:bell-bold-duotone"
              width="24"
              height="24"
            />
            <span className="bg-red-600 text-white  absolute w-3 flex items-center justify-center text-[8px] rounded-full top-0">5</span>
          </div>

          <div className="relative cursor-pointer">
            <Icon
              className="text-blue-800"
              icon="solar:earth-bold-duotone"
              width="24"
              height="24"
            />
              <span className="bg-red-600 text-white  absolute w-3 flex items-center justify-center text-[8px] rounded-full top-0">2</span>
          </div>

          <div className="cursor-pointer">
            <Icon
              className="text-blue-800"
              icon="solar:settings-bold-duotone"
              width="24"
              height="24"
            />
          </div>

          <div className="img_container w-14 rounded-full overflow-hidden">
            <img className="w-full h-full" src="./images/me.jpg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
