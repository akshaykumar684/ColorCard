import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Resource from "./Component/Resource";
const App = () => {
  console.log("App loaded");
  return (
    <div>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/Resource"></Redirect>
        </Route>
        <Route path="/Resource" exact>
          <Resource />
        </Route>
        <Route path="*">
          <h1>Invalid url</h1>
        </Route>
      </Switch>
    </div>
  );
};

export default App;
