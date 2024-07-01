import { createBrowserRouter } from "react-router-dom";
import LayOut from "../LayOut/LayOut";
import Home from "../Home/Home/Home";
import Login from "../Login/Login";
import Register from "../Register/Register";

const router = createBrowserRouter([
    {
      path: "/",
      element: <LayOut></LayOut>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        }
      ],

    },

    {
      path:'/login',
      element:<Login></Login>
    },
    {
      path:'/register',
      element:<Register></Register>
    }
  ]);

  export default router