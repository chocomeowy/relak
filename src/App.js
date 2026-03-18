import { Routes, Route } from "react-router-dom";
import "./App.css";
import About from "./components/About";
import Breathepage from "./components/Breathepage";
import Gethelp from "./components/Gethelp";
import Home from "./components/Home";
import Journal from "./components/Journal";
import JournalEdit from "./components/journals/JournalEdit";
import Listen from "./components/Listen";
import Login from "./components/Login";
import Profile from "./components/Profile";
import Signup from "./components/Signup";
import Topbar from "./components/Topbar";

function App() {
  return (
    <div className="App">
      <Topbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/breathe" element={<Breathepage />} />
        <Route path="/journal/:id/edit" element={<JournalEdit />} />
        <Route path="/journal" element={<Journal />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/gethelp" element={<Gethelp />} />
        <Route path="/listen" element={<Listen />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
