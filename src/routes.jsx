import { createBrowserRouter } from "react-router";
import Home from "./Pages/Home/Home";
import NewUser from "./Pages/NewUser/NewUser";

let router= createBrowserRouter([
    {path:"/",element:<Home/>},
    {path:"/newUser",element:<NewUser/>},


])



export { router}