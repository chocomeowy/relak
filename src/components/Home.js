import React from "react";
import { Button } from "antd";
import { Typography } from "antd";
import { Link } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const { Title, Text } = Typography;

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
          <img src="https://i.imgur.com/hJKUf3h.png" />
        </div>
        <div>
          <img src="https://i.imgur.com/gFFbMBH.png" />
        </div>
        <div>
          <img src="https://source.unsplash.com/random/800x200" />
          <p className="legend">Legend 3</p>
        </div>
        <div>
          <img src="https://media-exp1.licdn.com/dms/image/C5616AQF5xQhocuNdTg/profile-displaybackgroundimage-shrink_350_1400/0/1628592176980?e=1634169600&v=beta&t=u9_OYePWYxM07ZZmPUPr2KbHC_gjCszasIQJ46B8P90" />
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
