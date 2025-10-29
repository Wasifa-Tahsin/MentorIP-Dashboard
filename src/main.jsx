import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from './components/Root/Root.jsx';
import HomeLayout from './components/layout/HomeLayout.jsx';
import Dashboard from './components/Dashboard/Dashboard.jsx';
import UserManagement from './components/UserManagement/UserManagement.jsx';
import AddBlog from './components/page/AddBlog.jsx';
import AddBlogDetails from './components/page/AddBlogDetails.jsx';
import AddPostOutline from './components/page/AddPostOutline.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    Component:Root,
    children:[
      {index:true,Component:HomeLayout},
      {
        path:'/dashboard',
        Component:Dashboard
      },
      {
        path:'/users',
        Component:UserManagement
      },
      {
        path:'add-blog',
        Component:AddBlog
      },
      {
        path:'/add-blog-details',
        Component:AddBlogDetails
      },
      {
        path:'/add-post-outline',
        Component:AddPostOutline
      },
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />,
  </StrictMode>,
)
