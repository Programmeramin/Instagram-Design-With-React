import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Auth from "../Pages/Auth/Auth";
import SignUp from "../Pages/Singup/SignUp";




// create router
const router = createBrowserRouter([
    {
        path : "/",
        element : <Home/>,
        
       
    },

    {
        path : "/auth",
        element : <Auth/>,
    },

    {
        path : "/auth/signupemail",
        element : <SignUp/>
    }

   
]);


//export
export default router;