import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './layout/Main.jsx';
import ErrorPage from './Pages/ErrorPage/ErrorPage';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import About from './Pages/About/About';
import Cart from './Pages/Cart/Cart';
import Home from './Pages/Home/Home';
import ServiceDetails from './Pages/ServiceDetails/ServiceDetails';
import AuthProvider from './firebase/AuthProvider';
import PrivateRoute from './firebase/PrivateRoute';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('/services.json')
      },
      {
        path: '/about',
        element: <About></About>
      },
      {
        path: '/cart',
        element:
          <PrivateRoute>
            <Cart></Cart>
          </PrivateRoute>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: 'services/:id',
        element:
          <PrivateRoute>
            <ServiceDetails></ServiceDetails>
          </PrivateRoute>,
        loader: () => fetch('/services.json')
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
