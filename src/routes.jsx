import { createBrowserRouter } from "react-router";
import Home from "./Pages/Home/Home";
import NewUser from "./Pages/NewUser/NewUser";
import Products from "./Pages/Products/Products";

let router= createBrowserRouter([
    {path:"/",element:<Home/>},
    {path:"/newUser",element:<NewUser/>},
    {path:"/products",element:<Products/>},


])



export { router}