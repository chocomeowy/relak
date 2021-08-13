import React from "react";
import { Button } from "antd";
import { Typography } from "antd";
import { Link } from "react-router-dom";
import { Carousel } from "antd";

const { Title, Text } = Typography;
const contentStyle = {
  height: "350px",
  width: "50vw",
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
      <Title italic style={{ padding: "30px" }}>
        time to relak
      </Title>
      <Carousel autoplay>
        <div>
          <h3 style={contentStyle}>
            <img src="https://i.imgur.com/hJKUf3h.png" alt="first"></img>
          </h3>
        </div>
        <div>
          <h3 style={contentStyle}>
            <img src="https://i.imgur.com/gFFbMBH.png" alt="second"></img>
          </h3>
        </div>
        <div>
          <h3 style={contentStyle}>
            <img
              src="https://media-exp1.licdn.com/dms/image/C5616AQF5xQhocuNdTg/profile-displaybackgroundimage-shrink_350_1400/0/1628592176980?e=1634169600&v=beta&t=u9_OYePWYxM07ZZmPUPr2KbHC_gjCszasIQJ46B8P90"
              alt="third"
            ></img>
          </h3>
        </div>
        <div>
          <h3 style={contentStyle}>
            {" "}
            <img src="https://source.unsplash.com/random" alt="fourth"></img>
          </h3>
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
