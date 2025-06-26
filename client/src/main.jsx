import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import MainLayout from './Layouts/MainLayout.jsx'
import Home from './Pages/Home.jsx'
import Jobs from './Pages/Jobs.jsx'
import AddJobs from './Pages/AddJobs.jsx'
import MyPostedJobs from './Pages/MyPostedJobs.jsx'
import Login from './Pages/Login.jsx'
import Register from './Pages/Register.jsx'
import ErrorPage from './Pages/ErrorPage.jsx'
import AuthProvider from './Provider/AuthProvider.jsx'
import JobDetails from './Pages/JobDetails.jsx'
import UpdateJobs from './Pages/UpdateJobs.jsx'
import PrivateRoute from './Provider/PrivateRoute.jsx'
import { ToastContainer } from 'react-toastify'
import Loading from './Pages/Loading.jsx'


const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout></MainLayout>,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader:()=>fetch('https://user-jobportal-server.vercel.app/featured-jobs'),
        hydrateFallbackElement:<Loading></Loading>
      },
      {
        path:'/jobs',
        element:<Jobs></Jobs>,
        loader:()=>fetch('https://user-jobportal-server.vercel.app/jobs')
      },
      {
        path:'/add-jobs',
        element:<PrivateRoute>
        <AddJobs></AddJobs>
      </PrivateRoute>,
        
      },
      {
        path:'/my-posted-jobs',
        element:<PrivateRoute>
          <MyPostedJobs></MyPostedJobs>
        </PrivateRoute>
      },
      {
        path:'/job-details/:id',
        element:<PrivateRoute><JobDetails></JobDetails></PrivateRoute>,
        loader:({params})=>fetch(`https://user-jobportal-server.vercel.app/job/${params.id}`)
      },
      {
        path:'/update-job/:id',
        element:<UpdateJobs></UpdateJobs>,
        loader:({params})=>fetch(`https://user-jobportal-server.vercel.app/job/${params.id}`)
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      
      {
        path:'/register',
        element:<Register></Register>
      },
      
    ]
  }
])



createRoot(document.getElementById('root')).render(
  <StrictMode>
  
  <AuthProvider>
    <RouterProvider router={router}></RouterProvider>
  </AuthProvider>
  <ToastContainer />
  </StrictMode>,
)
