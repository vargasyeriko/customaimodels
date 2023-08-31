import { useRoutes } from "react-router-dom";
import MainLayout from "../layouts/Main";

import Welcome from '../views/welcome/Main'
    
import About from '../views/welcome/About'
 
import Photo from '../views/welcome/Photo'
 
import ErrorPage from "../views/error-page/Main";

  
    
function Router() {
  const routes = [
    {
      path: "/",
      element: <MainLayout />,
      children:  [ 
          {
            path:"/",
            element: <Welcome />, 
          },

          { 
            path:"/about",
            element: <About/>
           },
 
           { 
            path:"/photo",
            element: <Photo/>
           },
 
           { 
            path:"/contact",
            element: <About/>
           },
         

        ]
      
    },

    
   
  
    {
      path: "/error-page",
      element: <ErrorPage />,
    },
    {
      path: "*",
      element: <ErrorPage />,
    },
  ];

  return useRoutes(routes);
}

export default Router;
