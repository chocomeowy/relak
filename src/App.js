import { Route, Switch } from "react-router-dom";
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
import { AnimatedSwitch, spring } from "react-router-transition";
function App() {
  // we need to map the `scale` prop we define below
  // to the transform style property
  function mapStyles(styles) {
    return {
      opacity: styles.opacity,
      transform: `scale(${styles.scale})`,
    };
  }

  // wrap the `spring` helper to use a bouncy config
  function bounce(val) {
    return spring(val, {
      stiffness: 330,
      damping: 22,
    });
  }

  // child matches will...
  const bounceTransition = {
    // start in a transparent, upscaled state
    atEnter: {
      opacity: 1,
      scale: 0.9,
    },
    // leave in a transparent, downscaled state
    atLeave: {
      opacity: bounce(1),
      scale: bounce(1),
    },
    // and rest at an opaque, normally-scaled state
    atActive: {
      opacity: bounce(1),
      scale: bounce(1),
    },
  };
  return (
    <div className="App">
      <AnimatedSwitch
        atEnter={bounceTransition.atEnter}
        atLeave={bounceTransition.atLeave}
        atActive={bounceTransition.atActive}
        mapStyles={mapStyles}
        className="route-wrapper"
      >
        <Route exact path="/">
          <Home />
        </Route>
        <Topbar />
      </AnimatedSwitch>
      <Route path="/breathe">
        <Breathepage />
      </Route>
      <Route path="/journal/:id/edit">
        <JournalEdit/>
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
      <Route path="/listen">
        <Listen />
      </Route>
      <Route path="/about">
        <About />
      </Route>
    </div>
  );
}

export default App;
