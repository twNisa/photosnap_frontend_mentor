import React, { useEffect } from "react"
import {Outlet, useLocation} from "react-router-dom"
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { motion, AnimatePresence } from "framer-motion";

function App() {
  const {pathname} = useLocation()

  React.useEffect(()=>{
    window.scrollTo(0, 0);
  }, [pathname])
  
  return (
      <div className="App">
          <Header /> 
          <Outlet />
          <Footer />
      </div>
  );
}

export default App;
