import React from "react";
import MainPage from "./components/MainPage/MainPage";
import Footer from "./components/Footer/Footer";
import NavBar from "./components/NavBar/NavBar";

const App = () => {
  return (
    <div className="font-inter container mx-auto">
      <NavBar/>
      <MainPage/>
      <Footer/>
    </div>
  );
}

export default App;