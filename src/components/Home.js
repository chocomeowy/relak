import { Typography } from "antd";
import React from "react";
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/themes/theme-bojack.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Link } from "react-router-dom";
import AnimatedIcon from "./AnimatedIcon";
import Tilt from "react-parallax-tilt";
const { Title, Text } = Typography;

const Home = () => {
  const token = localStorage.token;
  return (
    <div
      style={{
        textAlign: "center",
      }}
    >
      <Carousel
        showArrows={false}
        autoPlay={true}
        emulateTouch={true}
        infiniteLoop={true}
        showThumbs={false}
        useKeyboardArrows={true}
        showStatus={false}
      >
        <div>
          <img src="https://i.imgur.com/awMl5my.jpg?2" alt="1" />
        </div>
        <div>
          <img src="https://i.imgur.com/1Wguprp.jpg?1" alt="2" />
        </div>
        <div>
          <img src="https://i.imgur.com/7TVncOv.jpg?3" alt="3" />
        </div>
        <div>
          <img src="https://i.imgur.com/ypb9Smm.jpg" alt="3" />
        </div>
        <div>
          <img src="https://i.imgur.com/1D3iD7I.jpg?1" alt="3" />
        </div>
        <div>
          <img src="https://i.imgur.com/7UMyV8I.jpg?2" alt="5" />
        </div>
      </Carousel>
      <Tilt gyroscope={true}>
        <div style={{ height: "100px" }}>
          <AnimatedIcon />
        </div>
      </Tilt>
      <Title italic strong style={{ padding: "10px" }}>
        time to relak
      </Title>
      <Text type="secondary">
        busy day? why not try out our breathing exercise, or listen to some
        calming sounds? there’s no need to commit. need to pen down some
        thoughts? we’ll gladly lend you a listening ear.
      </Text>
      <br />
      <Link to="/breathe">
        <AwesomeButton type="secondary" size="medium">
          breathe
        </AwesomeButton>
      </Link>
      <Link to="/listen">
        <AwesomeButton type="secondary" size="medium">
          listen
        </AwesomeButton>
      </Link>
      {token === undefined ? (
        <>
          <br />
          <Link to="/login">
            <AwesomeButton>login</AwesomeButton>
          </Link>
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Home;
