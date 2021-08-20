import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import Breathe2 from "./Breathe2";
import { Button, Row, Col, Layout } from "antd";
import Title from "antd/lib/typography/Title";
import Meditation from "./Meditation";
import Sleep from "./Sleep";
import BreathingTechniquesModal from "./BreathingTechniquesModal";
import Headspace from "./Headspace";
import BoxBreathe from "./BoxBreathe";
const { Content } = Layout;

const Breathe = () => {
  const [circle, setCircle] = useState("");
  const [description, setDescription] = useState("Focus on the present moment");

  const handleEqualBreathing = () => {
    setCircle("a");

    setDescription("6s-6s Sama Vritti or “equal breathing”");
  };
  const handleBox = () => {
    setCircle("b");

    setDescription("4s-4s-4s-4s - box breathing");
  };
  const handleDeep = () => {
    setCircle("c");

    setDescription("4s-7s-8s - based on yoga’s pranayama - Deep Calming");
  };
  const handleApple = () => {
    setCircle("d");

    setDescription(
      <a href="https://css-tricks.com/recreating-apple-watch-breathe-app-animation/">
        Credits
      </a>
    );
  };

  const displayCircle = () => {
    if (circle === "") {
      return <div>Click button to start</div>;
    }
    if (circle === "b") {
      return <BoxBreathe />;
    }

    if (circle === "c") {
      return <Circle3 />;
    }
    if (circle === "d") {
      return <Breathe2 />;
    }
    return <Circle />;
  };

  return (
    <Layout style={{ backgroundColor: "#f5f5f5" }}>
      <Content>
        <Title style={{ padding: "10px", textAlign: "center" }}>breathe.</Title>

        <Div>
          <Row justify="center" gutter={{ xs: 8, sm: 16, md: 24 }}>
            <Col>
              <Button type="dashed" onClick={handleEqualBreathing}>
                Equal breathing
              </Button>
            </Col>
            <Col>
              <Button type="dashed" onClick={handleBox}>
                Box breathing
              </Button>
            </Col>
            <Col>
              <Button type="dashed" onClick={handleDeep}>
                Deep Calming
              </Button>
            </Col>
            <Col>
              <Button type="dashed" onClick={handleApple}>
                Apple Watch Style
              </Button>
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <br />​{description}
            </Col>
          </Row>
        </Div>
        {circle === "d" ? (
          <>
            <Container style={{ background: "black" }}>
              <br />

              {displayCircle()}
            </Container>
          </>
        ) : (
          <>
            <Container>
              <br />

              {displayCircle()}
            </Container>
          </>
        )}
        <div
          style={{
            textAlign: "center",
          }}
        >
          <Row justify="center" gutter={{ xs: 2, sm: 16, md: 24 }}>
            <Col>
              <Meditation />
            </Col>
            <Col>
              <Sleep />
            </Col>
            <Col>
              <BreathingTechniquesModal />
            </Col>
          </Row>
          <br />
          <Row justify="center">
            <Headspace />
          </Row>
        </div>
      </Content>
    </Layout>
  );
};

export default Breathe;

const Div = styled.div`
  text-align: center;
`;

const breatheAnimation = keyframes`
 0% {box-shadow: 0 0 0 10px rgba(164, 148, 255, 0.3), 
    0 0 0 20px rgba(164, 148, 255, 0.3), 
    0 0 0 20px rgba(164, 148, 255, 0.3), 
    0 0 0 20px rgba(164, 148, 255, 0.3), 
    0 0 0 20px rgba(164, 148, 255, 0.3);
 }

 50% {
    box-shadow: 0 0 0 25px rgba(164, 148, 255, 0.3), 
    0 0 0 50px rgba(164, 148, 255, 0.3), 
    0 0 0 75px rgba(164, 148, 255, 0.3), 
    0 0 0 100px rgba(164, 148, 255, 0.3), 
    0 0 0 125px rgba(164, 148, 255, 0.3);
     }
     
 100% {  box-shadow: 0 0 0 10px rgba(164, 148, 255, 0.3), 
    0 0 0 20px rgba(164, 148, 255, 0.3), 
    0 0 0 20px rgba(164, 148, 255, 0.3), 
    0 0 0 20px rgba(164, 148, 255, 0.3), 
    0 0 0 20px rgba(164, 148, 255, 0.3);
 }`;

const breatheAnimation3 = keyframes`
 0% {box-shadow: 0 0 0 10px rgba(174, 225, 225, 0.3), 
    0 0 0 20px rgba(211, 224, 220, 0.3), 
    0 0 0 20px rgba(236, 226, 225, 0.3), 
    0 0 0 20px rgba(252, 209, 209, 0.3), 
    0 0 0 20px rgba(164, 148, 255, 0.3);
 }

 21% {
    box-shadow: 0 0 0 25px rgba(252, 209, 209, 0.3), 
    0 0 0 50px rgba(252, 209, 209, 0.3), 
    0 0 0 75px rgba(236, 226, 225, 0.3), 
    0 0 0 100px rgba(211, 224, 220, 0.3), 
    0 0 0 125px rgba(174, 225, 225, 0.3);
     }
60% {
      box-shadow: 0 0 0 25px rgba(252, 209, 209, 0.6), 
      0 0 0 50px rgba(252, 209, 209, 0.6), 
      0 0 0 75px rgba(236, 226, 225, 0.6), 
      0 0 0 100px rgba(211, 224, 220, 0.6), 
      0 0 0 125px rgba(174, 225, 225, 0.6);
       }
     
 100% {  box-shadow: 0 0 0 10px rgba(174, 225, 225, 0.3), 
    0 0 0 20px rgba(211, 224, 220, 0.3), 
    0 0 0 20px rgba(236, 226, 225, 0.3), 
    0 0 0 20px rgba(252, 209, 209, 0.3), 
    0 0 0 20px rgba(164, 148, 255, 0.3);
 }`;

const Circle = styled.div`
  height: 50px;
  width: 50px;

  border-width: 5px;
  border-radius: 50%;
  border-color: blue;
  animation-name: ${breatheAnimation};
  animation-duration: 12s;
  animation-iteration-count: infinite;
`;

const Circle3 = styled.div`
  height: 50px;
  width: 50px;

  border-width: 5px;
  border-radius: 50%;
  border-color: blue;
  animation-name: ${breatheAnimation3};
  animation-duration: 19s;
  animation-iteration-count: infinite;
`;
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 450px;
`;
