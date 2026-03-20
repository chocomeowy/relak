import React from "react";
import Breathe from "./breathing/Breathe";
import { Layout } from "antd";

const { Content } = Layout;

const Breathepage = () => {
  return (
    <Layout style={{ background: "transparent" }}>
      <Content style={{ padding: "20px 0" }}>
        <Breathe />
      </Content>
    </Layout>
  );
};

export default Breathepage;
