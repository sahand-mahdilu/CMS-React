import { createBrowserRouter } from "react-router";
import Home from "./Pages/Home/Home";
import NewUser from "./Pages/NewUser/NewUser";
import Products from "./Pages/Products/Products";
import Users from "./Pages/Users/Users";
import SideBar from "./Components/SideBar";
import MainUser from "./Pages/MainUser/MainUser";
import MainProduct from "./Pages/MainProduct/MainProduct";

let router= createBrowserRouter([

    {path:"/" ,element:<SideBar/>, children:[

        {path:"/",element:<Home/>},
        {path:"newUser",element:<NewUser/>},
        {path:"products",element:<Products/>},
        {path:"users",element:<Users/>},
        {path:"mainUser/:id",element:<MainUser/>},
        {path:"mainProduct/:id",element:<MainProduct/>},


    ]}


])



export { router}