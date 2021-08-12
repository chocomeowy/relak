import "./App.css";
import Topbar from "./components/Topbar";
import { Route, Switch } from "react-router-dom";
import { useSelector } from "react-redux";
import Breathe from "./components/breathing/Breathe";
import Home from "./components/Home";
import Gethelp from "./components/Gethelp";
import Signup from "./components/Signup";
import Profile from "./components/Profile";
import Login from "./components/Login";

function App() {
  const token = useSelector((state) => state.auth.token);

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
