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
        path:"/",
        element: <Home />,
        
      },
      {
        path:"/stories",
        element: <Stories />,
        
      },
      {
        
        path: "/features",
        element: <Features />
        
      },
      {
        
        path: "/pricing",
        element: <Pricing />
        
      },
      {
        path:"*",
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

