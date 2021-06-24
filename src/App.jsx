import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import AppPage from "./pages/AppPage/AppPage";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/app">
          <AppPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
