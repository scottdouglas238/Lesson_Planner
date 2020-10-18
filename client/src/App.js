import React from "react";
import { Route, Switch, Link, Redirect } from "react-router-dom";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Signup from "./pages/Signup";
import LessonPlanForm from "./components/handleinputform"
import { useStoreContext } from "./utils/GlobalState";
import Display from "./components/display/display";
import Update from "./components/update/display";

function App() {
  const [state] = useStoreContext();
  console.log(state)
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <PrivateRoute exact path="/profile" component={Profile} />
        <PrivateRoute exact path="/newLessonPlan" component={LessonPlanForm} />
        <PrivateRoute exact path="/lesson/:id" component={Display} />
        <PrivateRoute exact path="/editLesson/:id" component={Update} />
      </Switch>
    </div>
  );
}
console.log(Link)

function PrivateRoute({ component: Component, ...props }) {
  const [state] = useStoreContext();
  console.log(state);
  if (state.auth) return <Route component={Component} {...props} />;
  return <Redirect to="/" />;
}

export default App;
