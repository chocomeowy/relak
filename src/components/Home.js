import { Typography, Row, Col, Layout, Space } from "antd";
import React from "react";
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/themes/theme-bojack.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Link } from "react-router-dom";
import AnimatedIcon from "./AnimatedIcon";
import Tilt from "react-parallax-tilt";
const { Title, Text } = Typography;
const { Footer, Content } = Layout;

const Home = () => {
  const token = localStorage.token;
  return (
    <div
      style={{
        textAlign: "center",
      }}
    >
      <Space direction="vertical" size={50}>
        <Layout>
          <Carousel
            className="site-homepage-carousel"
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
          <br style={{ backgroundColor: "#f5f5f5" }} />
          <Space direction="vertical" size={16}>
            <Content>
              <Space direction="vertical">
                <Row>
                  <Col span={24}>
                    <Tilt gyroscope={true}>
                      <div style={{ height: "100px" }}>
                        <AnimatedIcon />
                      </div>
                    </Tilt>
                  </Col>
                </Row>
                <Row>
                  <Col span={24}>
                    <Title italic strong style={{ padding: "10px" }}>
                      time to relak
                    </Title>
                  </Col>
                </Row>
                <Row>
                  <Col span={24}>
                    <Space direction="vertical" size={24}>
                      <Text type="secondary">busy day?</Text>
                      <Space direction="vertical" size={2}>
                        <Text type="secondary">
                          why not try out our breathing exercise,
                        </Text>
                        <Text type="secondary">
                          or listen to some calming sounds?
                        </Text>
                      </Space>
                      <Space direction="vertical" size={2}>
                        <Text type="secondary">there’s no need to commit.</Text>
                        <Text type="secondary">
                          need to pen down some thoughts?
                        </Text>
                        <Text type="secondary">
                          we’ll gladly lend you a listening ear.
                        </Text>
                      </Space>
                    </Space>
                  </Col>
                </Row>
              </Space>
            </Content>
            <br />
            <Content>
              <Row>
                <Col span={6} offset={6}>
                  <Link to="/breathe">
                    <AwesomeButton type="secondary" size="medium">
                      breathe
                    </AwesomeButton>
                  </Link>
                </Col>
                <Col span={6}>
                  <Link to="/listen">
                    <AwesomeButton type="secondary" size="medium">
                      listen
                    </AwesomeButton>
                  </Link>
                </Col>
              </Row>
              <Row>
                <Col span={24}>
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
                </Col>
              </Row>
            </Content>
          </Space>
          <Footer>
            <Text type="secondary" style={{ fontSize: "10px" }} italic>
              Made with love by Gordon, Fah Jin, and Charlene.
              <br />
              Check out our GitHub{" "}
              <a href="https://github.com/chocomeowy/relak">here</a> and{" "}
              <a href="https://github.com/chocomeowy/lepak">here</a>.
            </Text>
          </Footer>
        </Layout>
      </Space>
    </div>
  );
};

export default Home;
