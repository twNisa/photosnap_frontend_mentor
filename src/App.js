import React from "react"
import {Outlet, useLocation} from "react-router-dom"
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { motion, AnimatePresence } from "framer-motion";

function App() {

  const location = useLocation();

  const animations = {
    initial: {
      opacity: 0,
      y: "-10vh",
    },
    in: {
      opacity: 1,
      y: 0,
    },
    exit: {
      opacity: 0,
      y: "-10vh",
    }
  }

  return (
      <div className="App">
          <Header /> 
          <Outlet />
          <Footer />
      </div>
    
  );
}

export default App;
