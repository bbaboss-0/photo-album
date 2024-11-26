import { useRoutes } from "react-router-dom"; 
import Login from "./Login"; 
import Register from "./Register";
// import  Navber  from "./Navbar";
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
           
            // {
            //     element: <Navber/>,
            //     path: '/navbar'
            // }, 
            //   {
            //     element: <Sidebar/>,
            //     path: '/Sidebar'
            // },  
              {
                element: <Sidebar />,
                  path: '/app',
                  children: [
                      {
                          path: '',
                          element: <>Ahmadfsdhgfvcuywhjdasfvyuchjfdsvjxncvbhjweagfvcghcjasvjhjdsziucgdsiufgwebgarsjfhrvshzgxfhjcmdsgxzfkjgchejfkdshxfbcjkszdhxfj,mcbkjmdsngzxfkj</>
                    },
                      {
                          path: "dashboard",
                          element: <>hello boss</>
                      }
                  ]
            }
            
        ]
    )

    return element;
} 



