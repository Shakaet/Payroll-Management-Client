import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home.jsx';
import Login from './pages/Login.jsx';
import Registered from './pages/Registered.jsx';
import MainLayout from './layout/MainLayout.jsx';
import AuthProvider from './provider/AuthProvider.jsx';
import Dashboard from './layout/Dashboard.jsx';
import AddNewEmployee from './routes/AddNewEmployee.jsx';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children:[
      {
        path:"/",
        element:<Home></Home>
      },
      {
        path:"/login",
        element:<Login></Login>
      },
      {
        path:"/register",
        element:<Registered></Registered>
      }
    ]
  },
  {
    path:"/dashboard",
    element:<Dashboard></Dashboard>,
    children:[
      {
        path:"/dashboard/addnewemployee",
        element:<AddNewEmployee></AddNewEmployee>

      }
    ]
  }
]);


createRoot(document.getElementById('root')).render(
  <AuthProvider>
     <ToastContainer />
    <RouterProvider router={router} />
  </AuthProvider>,
)
