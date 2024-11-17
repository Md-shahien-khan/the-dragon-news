import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import HomeLayout from './layout/HomeLayout';
import CategoryNews from './pages/CategoryNews';


const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children : [
      {
        path : "",
        element : <Navigate to={"/category/01"}></Navigate>
      },
      {
        path : "/category/:id",
        element : <CategoryNews></CategoryNews>,
        loader : ({params}) => fetch(`https://openapi.programming-hero.com/api/news/category/${params.id}`)
      },
    ],
  },
  {
    path: "/news",
    element: <div>News layout</div>,
  },
  {
    path: "auth",
    element: <div>Login</div>,
  },
  {
    path: "*",
    element: <div>Error pge</div>,
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
