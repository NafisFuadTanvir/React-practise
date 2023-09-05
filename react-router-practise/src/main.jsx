import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from './components/Home/Home.jsx';
import About from './components/About/About.jsx';
import Contact from "./components/Contact/Contact.jsx"
import Friends from './components/Friends/Friends.jsx';
import Friend from './components/Friend/Friend.jsx';
import Frienddetails from './components/Friend details/Frienddetails.jsx';
import Posts from './Posts/Posts.jsx';

const router= createBrowserRouter([
      
  {
    path: "/",
    element: <Home></Home>,
    children:[

      {
        path:"About",
        element:<About></About>
      },
      {
        path:"Contact",
        element: <Contact></Contact>
      },
      {
        path:"friends",
        element:<Friends></Friends>,
        loader: ()=> fetch("https://jsonplaceholder.typicode.com/users")
      },
      {
        path:"friend/:friendId", //dynamic route setup
        element:<Frienddetails></Frienddetails>,
        loader: ({params})=> fetch(`https://jsonplaceholder.typicode.com/users/${params.friendId}`)
         //React route parameter with load data based on dynamic route
      },
      {
        path:"posts",
        element:<Posts></Posts>,
        loader: ()=> fetch("https://jsonplaceholder.typicode.com/posts")
      }
    ]
  }


])


// const router= createBrowserRouter([


//    {
//      path:"/",
//      element: <div>default</div>

//    },
//    {
//     path:"/Contact",
//     element: <div>contact us</div>

//   },
//   {
//     path:"/About",
//     element: <div>give the phone number</div>

//   }


// ])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   

    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
