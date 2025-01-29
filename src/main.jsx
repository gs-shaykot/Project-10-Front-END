import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import './index.css'
import AuthProvider from './Provider/AuthProvider.jsx';
import MainLayout from './Layout/MainLayout.jsx';
import ErrorPage from './Pages/ErrorPage';
import HomeLayout from './Layout/HomeLayout.jsx';
import AllCamp from './Pages/AllCamp.jsx';
import AddCamp from './Pages/AddCamp';
import MyCamp from './Pages/MyCamp';
import MyDonation from './Pages/MyDonation.jsx';
import LogIn from './Pages/LogIn.jsx';
import Register from './Pages/Register.jsx';
import PrivateRoute from './Layout/PrivateRoute.jsx';
import CampDetail from './Components/CampDetail';
import UpdateCamp from './Pages/UpdateCamp.jsx';
import ThemeProvider from './Provider/ThemeProvider.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomeLayout />,
      },
      {
        path: "/login",
        element: <LogIn />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/allCamp",
        element: <AllCamp />
        ,
      },
      {
        path: "/addCamp",
        element: (
          <PrivateRoute>
            <AddCamp />
          </PrivateRoute>),
      },
      {
        path: "/myCamp",
        element: (
          <PrivateRoute>
            <MyCamp />
          </PrivateRoute>),
      },
      {
        path: "/myDonation",
        element: (
          <PrivateRoute>
            <MyDonation />
          </PrivateRoute>),
      },
      {
        path: "/updateCampaign/:id",
        element: <UpdateCamp />
      },
      {
        path: "/campaigns/:id",
        loader: ({ params }) => fetch(`http://localhost:5000/campaigns/all/${params.id}`),
        element: (
          <PrivateRoute>
            <CampDetail />
          </PrivateRoute>),
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </ThemeProvider>
  </StrictMode>,
)
