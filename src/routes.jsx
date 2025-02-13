import { createBrowserRouter } from "react-router";
import Home from "./Pages/Home/Home";

let router= createBrowserRouter([
    {path:"/",element:<Home/>}


])



export { router}