import React from "react"
import { Route, Switch } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import MainPage from "./components/MainPage/MainPage";

const App = () => {
  return (
    <div className="font-inter">
      <Switch>
        <Route exact path='/' render={() => (<MainPage />)} />
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;