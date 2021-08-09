import React from "react";
import { Route, Link } from "react-router-dom";
// import Breathe from "./breathing/Breathe";
// import Home from "./Home";

const Topbar = () => {
  return (
    <> 
      {/* <div class="title-bar" data-responsive-toggle="example-menu" data-hide-for="medium">
        <button class="menu-icon" type="button" data-toggle="example-menu"></button>
        <div class="title-bar-title">Menu</div>
      </div> */}

      <div data-sticky-container>
        <div class="top-bar" id="example-menu" data-sticky data-options="marginTop:0;">
          <div class="top-bar-left">
            <span class="top-bar-title">Relak</span>
          </div>
          <div class="top-bar-right">
            <ul class="dropdown menu align-right" data-dropdown-menu>
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
        </div>
      </div>
    </>
  );
};

export default Topbar;
