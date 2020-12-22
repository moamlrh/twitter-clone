import React from "react";
import SigninPage from "./Account/SigninPage/SigninPage";
import { Redirect, Route, Switch } from "react-router-dom";

function MainPageNotLogin() {
  return (
    <div className="main">
      <Switch>
        <Route path="/login" render={(props) => <SigninPage {...props} />} />
        <Redirect  from="/" to="/login" />
      </Switch>
    </div>
  );
}

export default MainPageNotLogin;
