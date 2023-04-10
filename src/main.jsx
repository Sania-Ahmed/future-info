import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainPage from './Components/layout/MainPage';
import Home from './Components/Home/Home';
import Statictis from './Components/Statictis/Statictis';
import Applied from './Components/Apllied/Applied';
import Blog from './Components/Blog/Blog';
import Detail from './Components/Details/Detail';
import fetchDataJSON from './data';
import ErrorPage from './Components/ErrorPage/ErrorPage';
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage></MainPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
       path: 'job/:id',
       element:<Detail></Detail>,
       loader: async({params}) => {
        const details = await fetch('data.json') 
        const mainDt = await details.json()
        // console.log(mainDt)
        // console.log(params.id)
        const job = mainDt.find(jb => jb.id == params.id)
        console.log(job)
        return job
       } 
      },
      {
        path: 'statictis',
        element: <Statictis></Statictis>
      },
      {
        path: 'applied',
        element: <Applied></Applied>
      },
      {
        path: 'blog',
        element: <Blog></Blog>
      },
      {
        path: '*',
        element:<ErrorPage></ErrorPage>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
