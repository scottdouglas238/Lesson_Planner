import React from "react";
import { Route, Switch, Link, Redirect } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import LessonPlanForm from "./components/handleinputform"
import { useStoreContext } from "./utils/GlobalState";
import Display from "./components/display/display";

function App() {
  const [state] = useStoreContext();
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Login} />
        {/* <Route exact path="/login" component={Login} /> */}
        <PrivateRoute exact path="/profile" component={Profile} />
        <PrivateRoute exact path="/newLessonPlan" component={LessonPlanForm} />
        <PrivateRoute exact path="/lesson/:id" component={Display} />
      </Switch>
    </div>
  );
}

function PrivateRoute({ component: Component, ...props }) {
  const [state] = useStoreContext();
  console.log(state);
  if (state.auth) return <Route component={Component} {...props} />;
  return <Redirect to="/" />;
}

export default App;
