import { useRoutes } from "react-router-dom"; 
import Login from "./Login"; 
import RegisterForm from "./RegisterForm";
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
                element: <RegisterForm/>,
                path: '/RegisterForm'
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



