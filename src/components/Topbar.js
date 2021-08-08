import React from "react";
import { Route, Link } from "react-router-dom";
import Breathe from "./breathing/Breathe";
import Home from "./Home";

const Topbar = () => {
  return (
    <>
      <div data-sticky-container>
        <div class="small-12 sticky" data-sticky data-options="marginTop: 0">
          <nav className="top-bar">
            <div className="top-bar-left">
              <ul className="dropdown menu" data-dropdown-menu>
                <li className="menu-text">Relak</li>
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
        </div>
      </div>
    </>
  );
};

export default Topbar;
