import {
  createBrowserRouter,
  RouterProvider,
 
} from "react-router-dom";

// import {
//   Routes,
//   Route
// } from "react-router-dom";

import { UserAuthContextProvider } from "./context/UserAuthContext";
import ProtectedRoute from "./components/ProtectedRoute";
import Meetuppage from "./components/Meetuppage";
import Signup from "./components/Signuppage";
import Signin from "./components/Signinpage";
import Homepage from "./components/Homepage";
import Userprofile from "./components/Userprofile";
import AdminSignup from "./components/AdminSignuppage copy";
import AdminSignin from "./components/AdminSigninpage";
import AdminDashboard from "./components/AdminDashboard";
import "./App.css";

export default function App() {
  const router = createBrowserRouter([
    { path: "/", element: <Homepage /> },

    //other pages

    {
      path: "/signup",
      element: <Signup />,
    },

    {
      path: "/login",
      element: <Signin />,
    },
    
    {
      path: "/profile",

      element: 
      <UserAuthContextProvider> 
          <ProtectedRoute>
            <Userprofile />
            </ProtectedRoute>
          </UserAuthContextProvider>
      
    },

    {
      path: "/meetup",
      element: <Meetuppage />,
    },

    {
      path: "/adminsignup",
      element: <AdminSignup />,
    },

    {
      path: "/adminlogin",
      element: <AdminSignin />,
    },

    {
      path: "/adminconsole",
      element: <AdminDashboard />,
    },
  ]);
  return (
    <>
      <div>
        <RouterProvider router={router} />
        
      </div>
    </>
  );
}
