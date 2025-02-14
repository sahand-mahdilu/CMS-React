import React from "react";

export default function Users() {
  return (
    <div className="w-full p-3 flex justify-center">
      <table className="">
        <thead className="bg-blue-50">
          <tr className="">
            <th className="p-2 px-16">Id</th>
            <th className="p-2 px-16">User</th>
            <th className="p-2 px-16">Email</th>
            <th className="p-2 px-16">Status</th>
            <th className="p-2 px-16">Transaction</th>
            <th className="p-2 px-16">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr className=" ">
            <td className="p-2 px-16">1</td>
            <td className="p-2 px-16">
              <div className="flex items-center gap-2">
                <div className="img-contaner size-12 rounded-full overflow-hidden">
                  <img
                    className="w-full h-full"
                    src="./images/profile.png"
                    alt=""
                  />
                </div>
                <span>sahand</span>
              </div>
            </td>
            <td className="p-2 px-16">sahand@gmail.com</td>
            <td className="p-2 px-16">active</td>
            <td className="p-2 px-16">100$</td>
            <td className="p-2 px-16">
              <div className="flex gap-2">
                <button className="bg-blue-400">edit</button>
                <button className="bg-red-400">delete</button>

              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
