import { StrictMode, useEffect, useState } from 'react'
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
import ManageEmployee from './routes/ManageEmployee.jsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import UpdateEmployee from './component/UpdateEmployee.jsx';
import MyProfile from './routes/MyProfile.jsx';
import { GrUpdate } from 'react-icons/gr';
import UpdateProfile from './component/UpdateProfile.jsx';
import AddendenceForm from './routes/AddendenceForm.jsx';
import MyAttendence from './routes/MyAttendence.jsx';
import EmployeesAttendence from './routes/EmployeesAttendence.jsx';
import PrivateRoute from './routes/PrivateRoute.jsx';
import AdminRoutes from './routes/AdminRoutes.jsx';
import EmployeeRoute from './routes/EmployeeRoute.jsx';
import DailyUpdates from './routes/DailyUpdates.jsx';
import LeaveRequest from './routes/LeaveRequest.jsx';
import LeaveApplication from './routes/LeaveApplication.jsx';
import { AddTask } from './routes/AddTask.jsx';
import { MyTask } from './routes/MyTask.jsx';
import ManageTask from './routes/ManageTask.jsx';
import ContactUs from './component/ContactUs.jsx';
import AboutUs from './component/AboutUs.jsx';
import DashboardHome from './routes/DashboardHome.jsx';
import SpecificEmployee from './routes/Specificemployee.jsx';
import Specificemployee from './routes/Specificemployee.jsx';
import PaymentHistory from './routes/PaymentHistory.jsx';
import MyPayment from './routes/MyPayment.jsx';


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
        path:"/contactus",
        element:<ContactUs></ContactUs>
      },
      {
        path:"/aboutus",
        element:<AboutUs></AboutUs>
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
    element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
    children:[

      {
        path:"/dashboard",
        element:<DashboardHome></DashboardHome>

      },
      {
        path:"/dashboard/addnewemployee",
        element:<AdminRoutes><AddNewEmployee></AddNewEmployee></AdminRoutes>

      },
      {
        path:"/dashboard/managenewemployee",
        element:<AdminRoutes><ManageEmployee></ManageEmployee></AdminRoutes>
      },
      {
        path:"/dashboard/updateemployee/:id",
        element:<AdminRoutes><UpdateEmployee></UpdateEmployee></AdminRoutes>
      },
      {
        path:"/dashboard/myprofile",
        element:<MyProfile></MyProfile>
      },
      {

        path:"/dashboard/updateprofile",
        element:<UpdateProfile></UpdateProfile>

      },
      {

        path:"/dashboard/attendenceform",
        element:<AdminRoutes><AddendenceForm></AddendenceForm></AdminRoutes>

      },
      {

        path:"/dashboard/myattendence",
        element:<EmployeeRoute><MyAttendence></MyAttendence></EmployeeRoute>

      },
      {
        path:"/dashboard/allattendence",
        element:<AdminRoutes><EmployeesAttendence></EmployeesAttendence></AdminRoutes>

      },
      {
        path:"/dashboard/leaveaplication",
        element:<AdminRoutes><LeaveApplication></LeaveApplication></AdminRoutes>
      },
      {
        path:"/dashboard/addTask",
        element:<AdminRoutes><AddTask></AddTask></AdminRoutes>
      },
      {
        path:"/dashboard/managetask",
        element:<AdminRoutes><ManageTask></ManageTask></AdminRoutes>
      },
      {
        path:"/dashboard/employee/:id",
        element:<AdminRoutes><Specificemployee></Specificemployee></AdminRoutes>

      },
      {
        path:"/dashboard/paymentHistory",
        element:<AdminRoutes><PaymentHistory></PaymentHistory></AdminRoutes>

      },
      {
        path:"/dashboard/dailyupdates",
        element:<EmployeeRoute><DailyUpdates></DailyUpdates></EmployeeRoute>
      },
      {
        path:"/dashboard/livingreq",
        element:<EmployeeRoute><LeaveRequest></LeaveRequest></EmployeeRoute>
      },
      {
        path:"/dashboard/myTask",
        element:<EmployeeRoute><MyTask></MyTask></EmployeeRoute>
      },
      {
        path:"/dashboard/myPaymentHistory",
        element:<EmployeeRoute><MyPayment></MyPayment></EmployeeRoute>
      },
      
    ]
  }
]);

const queryClient = new QueryClient();


const RootApp=()=>{

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);






  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <ToastContainer />
        {loading ? (
          <div className="flex items-center justify-center h-screen">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-blue-500"></div>
              <p className="mt-2 text-lg font-semibold text-gray-700">Loading...</p>
            </div>
          </div>
        ) : (
          <RouterProvider router={router} />
        )}
      </AuthProvider>
    </QueryClientProvider>
  );
};



createRoot(document.getElementById('root')).render(
  
    <RootApp></RootApp>
)
