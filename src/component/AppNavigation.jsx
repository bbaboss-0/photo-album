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
import Photos from "./Photos";
import Videos from "./Videos";
import Trash from "./Trash";
import Profile from "./Profile"
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
                      {
                          path: "dashboard",
                          element: <Dashbord />
                      },
                      {
                          path: "friend-list",
                          element: <FriendList />
                      },
                      {
                          path: "friend-request",
                          element: <FriendRequest/>
                      }, 
                      {
                          path: "discover",
                          element: <Discover/>
                      }, 
                      {
                          path: "document",
                          element: <Document/>
                      }, 
                      {
                          path: "album",
                          element: <Album />
                      },   
                        {
                          path: "photos",
                          element: <Photos />
                      }, 
                         {
                          path: "trash",
                          element: <Trash />
                        },
                        {
                          path: "videos",
                          element: <Videos />
                      }, 
                        {
                          path: "profile",
                          element: <Profile />
                      } 
                        
                  ]
            }
            
        ]
    )

    return element;
} 



