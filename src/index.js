import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  useLocation,
} from "react-router-dom"

import Home from './components/Home/Home';
import Stories from "./components/Stories/Stories"
import NotFound from './components/NotFound';
import Features from './components/Features/Features';
import Pricing from './components/Pricing/Pricing';
import "./index.css"
import {motion, AnimatePresence} from "framer-motion"



const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path:"/photosnap_frontend_mentor/",
        element: (
        <Home 
          title="Photosnap"
          titleWidth={8}
          alt="Photosnap Homepage"
        />),  
      },
      {
        path:"/photosnap_frontend_mentor/stories",
        element: (<Stories 
          title="Stories"
          titleWidth={8}
          alt="Photosnap Stories"
        
        />),  
      },
      {
        path: "/photosnap_frontend_mentor/features",
        element: (
        <Features
          title="Features"
          titleWidth={8}
          alt="Photosnap Features"
          
        />)
      },
      {
        path: "/photosnap_frontend_mentor/pricing",
        element: (
        <Pricing 
          title="Pricing"
          titleWidth={8}
          alt="Photosnap Pricing"
        />)
      },
      {
        path:"/photosnap_frontend_mentor/*",
        element: (
        <NotFound 
          title="Not Found"
          titleWidth={8}
        />)
      }
    ]
  }
])



const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <AnimatePresence exitBeforeEnter>
      <RouterProvider router={router}/>
    </AnimatePresence>
  </React.StrictMode>
);

