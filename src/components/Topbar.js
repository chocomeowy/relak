import React from "react";
import { Route, Link } from "react-router-dom";
import Breathe from "./breathing/Breathe";
import Home from "./Home";

const Topbar = () => {
  return (
    <>
      <nav className="top-bar">
        <div className="top-bar-left">
          <ul className="dropdown menu" data-dropdown-menu>
            <li className="menu-text">Site Title</li>
            <li>
              <Link to="/">Main</Link>
            </li>
            <li>
              <Link to="/breathe">Breathe</Link>
            </li>
            <li>
              <a href="#">Three</a>
            </li>
          </ul>
        </div>
        <div className="top-bar-right"></div>
      </nav>

      <main>
        <Route path="/">
          <Home />
        </Route>
        <Route path="/breathe">
          <Breathe />
        </Route>
      </main>
    </>
  );
};

export default Topbar;
