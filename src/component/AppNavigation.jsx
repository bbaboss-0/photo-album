import { useRoutes } from "react-router-dom"; 
import Login from "./Login"; 
import Register from "./Register";
import Navbar from "./Navbar"; 
import Sidebar from "./Sidebar"
import Dashbord from "./Dashbord"; 


export default function AppNavigation(){
    const element = useRoutes(
        [ 
          {
                element: <Login/>,
                path: '/'
            }, 
            {
                element: <Register/>,
                path: '/Register'
            },  
           
            {
                element: <Navbar/>,
                path: '/Navbar'
            }, 
              {
                element: <Sidebar/>,
                path: '/Sidebar'
            },  
              {
                element: <Dashbord/>,
                path: '/Dashbord'
            }
            
        ]
    )

    return element;
} 



