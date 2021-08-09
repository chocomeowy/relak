import "./App.css";
import Topbar from "./components/Topbar";
import { Route, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Breathe from "./components/breathing/Breathe";
import Home from "./components/Home";

function App() {
  const token = useSelector((state) => state.auth.token);

  return (
    <div className="App">
      <Topbar />
      <main>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/breathe">
          <Breathe />
        </Route>
      </main>
    </div>
  );
}

export default App;
