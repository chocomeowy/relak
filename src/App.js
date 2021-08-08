import "./App.css";
import Topbar from "./components/Topbar";
import { useSelector } from "react-redux";
function App() {
  const token = useSelector((state) => state.auth.token);

  return (
    <div className="App">
      <Topbar />
    </div>
  );
}

export default App;
