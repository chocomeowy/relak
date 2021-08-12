import React from "react";
import { Button } from "antd";
import { Typography } from "antd";
import { Link } from "react-router-dom";

const { Title, Text } = Typography;

const Home = () => {
  return (
    <div>
      <Title>time to relak</Title>
      <Text type="secondary">
        busy day? why not try out our breathing exercise, or listen to some
        calming sounds? there’s no need to commit. need to pen down some
        thoughts? we’ll gladly lend you a listening ear.
      </Text>
      <br />
      <Button>
        <Link to="/breathe">breathe</Link>
      </Button>
      <Button>
        <Link to="/listen">listen</Link>
      </Button>
      <br />
      <Button type="primary">
        <Link to="/login">login</Link>
      </Button>
    </div>
  );
};

export default Home;
