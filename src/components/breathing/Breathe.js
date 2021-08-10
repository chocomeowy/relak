import React, { useState } from "react";
import styled, { keyframes } from "styled-components";

const Breathe = () => {
  const [counter, setCounter] = useState(0);
  const [circle, setCircle] = useState("");
  const handleBox = () => {
    setCircle("a");
    setCounter((prev) => prev + 1);
  };
  const handleCalming = () => {
    setCircle("b");
    setCounter((prev) => prev + 1);
  };
  const handleEqual = () => {
    setCircle("c");
    setCounter((prev) => prev + 1);
  };

  const displayCircle = () => {
    if (circle === "") {
      return <div>Click button to start</div>;
    }
    if (circle === "b") {
      return <Circle2 />;
    }

    if (circle === "c") {
      return <Circle3 />;
    }
    return <Circle />;
  };
  return (
    <>
      <Div>{counter}</Div>
      <Div>
        <Button className="hollow button primary" onClick={handleBox}>
          Box breathing
        </Button>
        <Button className="hollow button success" onClick={handleCalming}>
          Equal breathing
        </Button>
        <Button className="hollow button warning" onClick={handleEqual}>
          Deep Calming
        </Button>
      </Div>
      <Container>
        <br />
        <br />
        <br />

        {displayCircle()}
      </Container>
    </>
  );
};

export default Breathe;

const Div = styled.div`
  text-align: center;
`;

const Button = styled.button`
  display: inline-block;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
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

const breatheAnimation2 = keyframes`
 0% {box-shadow: 0 0 0 10px rgba(255, 99, 71, 1), 
    0 0 0 20px rgba(255, 99, 71, 0.8), 
    0 0 0 20px rgba(255, 99, 71, 0.6), 
    0 0 0 20px rgba(255, 99, 71, 0.4), 
    0 0 0 20px rgba(255, 99, 71, 0.2);
 }

 30% {
    box-shadow: 0 0 0 25px rgba(164, 148, 255, 0.3), 
    0 0 0 50px rgba(164, 148, 255, 0.3), 
    0 0 0 75px rgba(164, 148, 255, 0.3), 
    0 0 0 100px rgba(164, 148, 255, 0.3), 
    0 0 0 125px rgba(164, 148, 255, 0.3);
     }
60% {
      box-shadow: 0 0 0 25px rgba(255, 99, 71, 1), 
      0 0 0 50px rgba(255, 99, 71, 0.8), 
      0 0 0 75px rgba(255, 99, 71, 0.6), 
      0 0 0 100px rgba(255, 99, 71, 0.4), 
      0 0 0 125px rgba(255, 99, 71, 0.2);
       }
     
 100% {box-shadow: 0 0 0 10px rgba(255, 99, 71, 1), 
    0 0 0 20px rgba(255, 99, 71, 0.8), 
    0 0 0 20px rgba(255, 99, 71, 0.6), 
    0 0 0 20px rgba(255, 99, 71, 0.4), 
    0 0 0 20px rgba(255, 99, 71, 0.2);
 }`;

const breatheAnimation3 = keyframes`
 0% {box-shadow: 0 0 0 10px rgba(164, 148, 255, 0.3), 
    0 0 0 20px rgba(164, 148, 255, 0.3), 
    0 0 0 20px rgba(164, 148, 255, 0.3), 
    0 0 0 20px rgba(164, 148, 255, 0.3), 
    0 0 0 20px rgba(164, 148, 255, 0.3);
 }

 21% {
    box-shadow: 0 0 0 25px rgba(164, 148, 255, 0.3), 
    0 0 0 50px rgba(164, 148, 255, 0.3), 
    0 0 0 75px rgba(164, 148, 255, 0.3), 
    0 0 0 100px rgba(164, 148, 255, 0.3), 
    0 0 0 125px rgba(164, 148, 255, 0.3);
     }
60% {
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

const Circle = styled.div`
  height: 100px;
  width: 100px;

  border-width: 5px;
  border-radius: 50%;
  border-color: blue;
  animation-name: ${breatheAnimation};
  animation-duration: 12s;
  animation-iteration-count: 4;
`;

const Circle2 = styled.div`
  height: 100px;
  width: 100px;

  border-width: 5px;
  border-radius: 50%;
  border-color: blue;
  animation-name: ${breatheAnimation2};
  animation-duration: 12s;
  animation-iteration-count: 4;
`;

const Circle3 = styled.div`
  height: 100px;
  width: 100px;

  border-width: 5px;
  border-radius: 50%;
  border-color: blue;
  animation-name: ${breatheAnimation3};
  animation-duration: 19s;
  animation-iteration-count: 4;
`;
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 450px;
`;
