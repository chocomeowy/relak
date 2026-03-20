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
import { Layout, Menu, Drawer, Button, List } from "antd";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logOutAction } from "../redux/ducks/accountAuth";
import { useMediaPredicate } from "react-media-hook";

const { Header } = Layout;

const Topbar = () => {
  const biggerThan910 = useMediaPredicate("(min-width: 910px)");
  const [visible, setVisible] = useState(false);
  const token = localStorage.token;
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const signOut = () => {
    dispatch(logOutAction());
    localStorage.removeItem("token");
    navigate("/login");
  };

  const showDrawer = () => {
    setVisible(!visible);
  };

  const menuItems = [
    { key: "1", icon: <HomeOutlined />, label: <Link to="/">Main</Link> },
    { key: "2", icon: <HeartOutlined />, label: <Link to="/breathe">Breathe</Link> },
    { key: "3", icon: <SoundOutlined />, label: <Link to="/listen">Listen</Link> },
    { key: "4", icon: <QuestionCircleOutlined />, label: <Link to="/gethelp">Get Help</Link> },
    { key: "10", icon: <SmileOutlined />, label: <Link to="/about">About Us</Link> },
  ];

  const authItems = token === undefined
    ? [
        { key: "5", icon: <LoginOutlined />, label: <Link to="/login">Login</Link> },
        { key: "6", icon: <UserOutlined />, label: <Link to="/signup">Sign Up</Link> },
      ]
    : [
        { key: "7", icon: <FormOutlined />, label: <Link to="/journal">Journal</Link> },
        { key: "8", icon: <LineChartOutlined />, label: <Link to="/profile">Profile</Link> },
        {
          key: "9",
          icon: <LogoutOutlined />,
          label: (
            <Link to="/login" onClick={signOut}>
              Log Out
            </Link>
          ),
        },
      ];

  const allItems = [...menuItems, ...authItems];

  return (
    <Header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 1000,
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 24px",
        background: "rgba(255, 255, 255, 0.8)",
        backdropFilter: "blur(10px)",
        borderBottom: "1px solid rgba(0, 0, 0, 0.05)",
        lineHeight: "64px",
      }}
    >
      <div
        className="brand-font"
        style={{
          fontSize: "24px",
          fontWeight: 600,
          color: "var(--primary)",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          gap: "8px",
        }}
        onClick={() => navigate("/")}
      >
        relak
      </div>

      {biggerThan910 ? (
        <Menu
          mode="horizontal"
          items={allItems}
          style={{
            flex: 1,
            justifyContent: "flex-end",
            border: "none",
            background: "transparent",
            minWidth: 0,
          }}
          className="custom-menu"
        />
      ) : (
        <>
          <Button
            type="text"
            icon={<MenuFoldOutlined style={{ fontSize: "20px" }} />}
            onClick={showDrawer}
          />
          <Drawer
            title="Relak"
            placement="right"
            closable={true}
            onClose={showDrawer}
            open={visible}
            width={280}
          >
            <Menu
              mode="vertical"
              items={allItems}
              style={{ border: "none" }}
              onClick={showDrawer}
            />
          </Drawer>
        </>
      )}
    </Header>
  );
};

export default Topbar;
