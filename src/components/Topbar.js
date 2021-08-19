import {
  FormOutlined,
  HeartOutlined,
  HomeOutlined,
  LineChartOutlined,
  LoginOutlined,
  LogoutOutlined,
  QuestionCircleOutlined,
  SmileOutlined,
  SoundOutlined,
  UserOutlined,
  MenuFoldOutlined,
} from "@ant-design/icons";
import { Layout, Menu, Drawer, Button, List, PageHeader } from "antd";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { logOutAction } from "../redux/ducks/accountAuth";
import { useMediaPredicate } from "react-media-hook";

const { Header } = Layout;

const Topbar = () => {
  const biggerThan910 = useMediaPredicate("(min-width: 910px)");
  const [visible, setVisible] = useState(false);
  const token = localStorage.token;
  const history = useHistory();
  //console.log(token);
  const dispatch = useDispatch();
  const signOut = () => {
    dispatch(logOutAction());
    localStorage.removeItem("token");
    history.push("/login");
  };

  const showDrawer = () => {
    setVisible(!visible);
  };
  return (
    <>
      {biggerThan910 ? (
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
      ) : (
        <div>
          <PageHeader
            style={{ backgroundColor: "#001529" }}
            backIcon={<HomeOutlined style={{ color: "#c5c5c5" }} />}
            onBack={() => history.push("/")}
            title="relak"
            extra={[
              <Button
                key="1"
                style={{ color: "#c5c5c5" }}
                ghost
                onClick={showDrawer}
              >
                <MenuFoldOutlined style={{ color: "#c5c5c5" }} />
              </Button>,
            ]}
          ></PageHeader>

          <Drawer
            title="Relak"
            placement={"right"}
            closable={false}
            onClose={showDrawer}
            visible={visible}
            key={"right"}
            style={{ color: "#c5c5c5" }}
          >
            <List>
              <List.Item key="2" avatar={<HeartOutlined />}>
                <Link to="/breathe">Breathe</Link>
              </List.Item>
              <List.Item key="3" icon={<SoundOutlined />}>
                <Link to="/listen">Listen</Link>
              </List.Item>
              <List.Item key="4" icon={<QuestionCircleOutlined />}>
                <Link to="/gethelp">Get Help</Link>
              </List.Item>
              <List.Item key="10" icon={<SmileOutlined />}>
                <Link to="/about">About us</Link>
              </List.Item>
              {token === undefined ? (
                <>
                  <List.Item key="5" icon={<LoginOutlined />}>
                    <Link to="/login">Login</Link>
                  </List.Item>
                  <List.Item key="6" icon={<UserOutlined />}>
                    <Link to="/signup">Sign up</Link>
                  </List.Item>
                </>
              ) : (
                <>
                  <List.Item key="7" icon={<FormOutlined />}>
                    <Link to="/journal">Journal</Link>
                  </List.Item>
                  <List.Item key="8" icon={<LineChartOutlined />}>
                    <Link to="/profile">Profile</Link>
                  </List.Item>
                  <List.Item key="9" icon={<LogoutOutlined />}>
                    <Link to="login" onClick={signOut}>
                      Log Out
                    </Link>
                  </List.Item>
                </>
              )}
            </List>
          </Drawer>
        </div>
      )}
    </>
  );
};

export default Topbar;
