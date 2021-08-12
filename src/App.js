import { Route, Switch } from "react-router-dom";
import "./App.css";
import Breathe from "./components/breathing/Breathe";
import Gethelp from "./components/Gethelp";
import Home from "./components/Home";
import Journal from "./components/Journal";
import Login from "./components/Login";
import Profile from "./components/Profile";
import Signup from "./components/Signup";
import Topbar from "./components/Topbar";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Topbar />
      </Switch>
      <Route path="/breathe">
        <Breathe />
      </Route>
      <Route path="/journal">
        <Journal />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/signup">
        <Signup />
      </Route>
      <Route path="/profile">
        <Profile />
      </Route>
      <Route path="/gethelp">
        <Gethelp />
      </Route>
    </div>
  );
}

export default App;
