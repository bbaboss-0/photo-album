import { useRoutes } from "react-router-dom"; 
import Login from "./Login"; 
import Register from "./Register";
import Sidebar from "./Sidebar"
import Dashbord from "./Dashbord";   
import FriendList from "./Friend-List"; 
import FriendRequest from "./Friend-Request.jsx"; 
import Discover from "./Discover";
import Document from "./Document";  
import Album from "./Album";
import Profile from "./Profile";
import path from "path";

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
                element: <Sidebar />,
                  path: '/app',
                  children: [
                    //   {
                    //       path: '',
                    //       element: <>Ahmad</>
                    // },
                      {
                          path: "dashboard",
                          element: <Dashbord />
                      },
                      {
                          path: "Friend-List",
                          element: <FriendList />
                      },
                      {
                          path: "Friend-Request",
                          element: <FriendRequest/>
                      }, 
                      {
                          path: "discover",
                          element: <Discover/>
                      }, 
                      {
                          path: "Document",
                          element: <Document/>
                      }, 
                      {
                          path: "Profile",
                          element: <Profile />
                      },
                      {
                          path: "Album",
                          element: <Album />
                      }
                  ]
            }
            
        ]
    )

    return element;
} 



