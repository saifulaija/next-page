import React from "react";
import Home from "./components/Home";
import { Outlet } from "react-router-dom";
import About from "./components/About";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Header></Header>
     <div className="min-h-[cal(100vh-136)]">
     <Outlet></Outlet>
     </div>
      <Footer></Footer>
    </div>
  );
};

export default App;
