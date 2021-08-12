import React from "react";
import { Button } from "antd";
import { Typography } from "antd";
import { Link } from "react-router-dom";
import { Carousel } from "antd";

const { Title, Text } = Typography;
const contentStyle = {
  height: "350px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

const Home = () => {
  return (
    <div
      style={{
        textAlign: "center",
      }}
    >
      <Title>time to relak</Title>
      <Carousel autoplay>
        <div>
          <h3 style={contentStyle}>1</h3>
        </div>
        <div>
          <h3 style={contentStyle}>2</h3>
        </div>
        <div>
          <h3 style={contentStyle}>3</h3>
        </div>
        <div>
          <h3 style={contentStyle}>4</h3>
        </div>
      </Carousel>
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
