import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Resource from "./Component/Resource";
import CardDetail from "./Component/CardDetail";
const App = () => {
  return (
    <div>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/Resource"></Redirect>
        </Route>
        <Route path="/Resource" exact>
          <Resource />
        </Route>
        <Route path="/Resource/:cardId" exact>
          <CardDetail />
        </Route>
        <Route path="*">
          <h1>Invalid url</h1>
        </Route>
      </Switch>
    </div>
  );
};

export default App;
