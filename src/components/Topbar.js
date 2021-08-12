import { Layout, Menu } from "antd";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const { Header } = Layout;

const Topbar = () => {
  const token = useSelector((state) => state.auth.token);
  return (
    <>
      <Layout className="layout">
        <Header className="header" defaultSelectedKeys={["1"]}>
          <Menu theme="dark" mode="horizontal">
            <Menu.Item key="1">
              <Link to="/">Main</Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Link to="/breathe">Breathe</Link>
            </Menu.Item>
            <Menu.Item key="3">
              <Link to="/listen">Listen</Link>
            </Menu.Item>
            <Menu.Item key="4">
              <Link to="/gethelp">Get Help</Link>
            </Menu.Item>
            {/* {token === null ? (
              <> */}
            <Menu.Item key="5">
              <Link to="/login">Login</Link>
            </Menu.Item>
            <Menu.Item key="6">
              <Link to="/signup">Sign up</Link>
            </Menu.Item>
            {/* </>
            ) : (
              <> */}
            <Menu.Item key="7">
              <Link to="/profile">Profile</Link>
            </Menu.Item>
            <Menu.Item key="8">
              <a href="/logout">Log Out</a>
            </Menu.Item>
            {/* </>
            )} */}
          </Menu>
        </Header>
      </Layout>

      {/* <div class="title-bar" data-responsive-toggle="example-menu" data-hide-for="medium">
        <button class="menu-icon" type="button" data-toggle="example-menu"></button>
        <div class="title-bar-title">Menu</div>
      </div> */}
      {/* <div data-sticky-container>
        <div
          class="top-bar"
          id="example-menu"
          data-sticky
          data-options="marginTop:0;"
        >
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
                <Link to="/gethelp">Get Help</Link>
              </li>
            </ul>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default Topbar;
