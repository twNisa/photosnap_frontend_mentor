import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom"
import Home from './components/Home/Home';
import Stories from "./components/Stories/Stories"
import NotFound from './components/NotFound';
import Features from './components/Features/Features';
import Pricing from './components/Pricing/Pricing';
import "./index.css"
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path:"/photosnap_frontend_mentor/",
        element: <Home />,
        
      },
      {
        path:"/photosnap_frontend_mentor/stories",
        element: <Stories />,
        
      },
      {
        
        path: "/photosnap_frontend_mentor/features",
        element: <Features />
        
      },
      {
        
        path: "/photosnap_frontend_mentor/pricing",
        element: <Pricing />
        
      },
      {
        path:"/photosnap_frontend_mentor/*",
        element: <NotFound />
      }
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

