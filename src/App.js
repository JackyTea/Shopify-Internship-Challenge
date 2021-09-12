import React from "react"
import NavBar from "./components/NavBar/NavBar";
import MainPage from "./components/MainPage/MainPage";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <div className="font-inter">
      <NavBar/>
      <MainPage/>
      <Footer/>
    </div>
  );
}

export default App;