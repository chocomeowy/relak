import { Layout, Menu } from "antd";
import React from "react";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { logOutAction } from "../redux/ducks/accountAuth";
import {
  HomeOutlined,
  LineChartOutlined,
  HeartOutlined,
  FormOutlined,
  SoundOutlined,
  QuestionCircleOutlined,
  LogoutOutlined,
  LoginOutlined,
  UserOutlined,
  SmileOutlined,
} from "@ant-design/icons";
const { Header } = Layout;

const Topbar = () => {
  const token = localStorage.token;
  const history = useHistory();
  //console.log(token);
  const dispatch = useDispatch();
  const signOut = () => {
    dispatch(logOutAction());
    localStorage.removeItem("token");
    history.push("/login");
  };
  return (
    <>
      <Header className="header" defaultselectedkeys={["1"]}>
        <Menu theme="dark" mode="horizontal">
          <Menu.Item key="1" icon={<HomeOutlined />}>
            <Link to="/">Main</Link>
          </Menu.Item>
          <Menu.Item key="2" icon={<HeartOutlined />}>
            <Link to="/breathe">Breathe</Link>
          </Menu.Item>
          <Menu.Item key="3" icon={<SoundOutlined />}>
            <Link to="/listen">Listen</Link>
          </Menu.Item>
          <Menu.Item key="4" icon={<QuestionCircleOutlined />}>
            <Link to="/gethelp">Get Help</Link>
          </Menu.Item>
          <Menu.Item key="10" icon={<SmileOutlined />}>
            <Link to="/about">About us</Link>
          </Menu.Item>
          {token === undefined ? (
            <>
              <Menu.Item key="5" icon={<LoginOutlined />}>
                <Link to="/login">Login</Link>
              </Menu.Item>
              <Menu.Item key="6" icon={<UserOutlined />}>
                <Link to="/signup">Sign up</Link>
              </Menu.Item>
            </>
          ) : (
            <>
              <Menu.Item key="7" icon={<FormOutlined />}>
                <Link to="/journal">Journal</Link>
              </Menu.Item>
              <Menu.Item key="8" icon={<LineChartOutlined />}>
                <Link to="/profile">Profile</Link>
              </Menu.Item>
              <Menu.Item key="9" icon={<LogoutOutlined />}>
                <Link to="login" onClick={signOut}>
                  Log Out
                </Link>
              </Menu.Item>
            </>
          )}
        </Menu>
      </Header>
    </>
  );
};

export default Topbar;
