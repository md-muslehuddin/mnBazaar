import React from 'react'
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom'
import Home from './components/Home'
import AllBrands from './components/AllBrands'
import ItemsTemplate from './components/ItemsTemplate'
import ItemProfile from './components/ItemProfile'
import Error from './components/Error'
import Login from './components/auth/Login'
import Signup from './components/auth/Signup'
import Footer from './components/layout/Footer'
import Navbar from './components/layout/Navbar'
import { AuthProvider, useAuth } from './AuthContext'


const Layout = ({ children }) => (
  <>
    {children}
  </>
);

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? children : <Navigate to="/" />;
};

function App() {


  const router = createBrowserRouter([
    {
      path: "/",
      element: <><Navbar navDisplay='none'/><Login /></>
    },
    {
      path: "/signup",
      element: <><Navbar navDisplay='none'/><Signup /></>
    },
    {
      path: "/home",
      element: <ProtectedRoute><Layout><Navbar navDisplay='block'/><Home /></Layout></ProtectedRoute>
    },
    {
      path: "/home/:productName",
      element: <ProtectedRoute><Layout><Navbar navDisplay='block'/><AllBrands /></Layout></ProtectedRoute>
    },
    {
      path: "/home/:productName/:iName",
      element: <ProtectedRoute><Layout><Navbar navDisplay='block'/><ItemsTemplate /></Layout></ProtectedRoute>
    },
    {
      path: "/home/:productName/:iName/:iDetails",
      element: <ProtectedRoute><Layout><Navbar navDisplay='block'/><ItemProfile /></Layout></ProtectedRoute>
    },
    {
      path: "*",
      element: <ProtectedRoute><Layout><Navbar navDisplay='block'/><Error message="Page Not Found" /><Footer footpos = "fixed"/> </Layout></ProtectedRoute>
    }
  ]);

  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
}

export default App;
