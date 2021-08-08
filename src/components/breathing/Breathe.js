import React from "react";
import styled, { keyframes } from "styled-components";

const Breathe = () => {
  return (
    <Container>
      <Circle />
    </Container>
  );
};

export default Breathe;

const breatheAnimation = keyframes`
 0% {box-shadow: 0 0 0 10px rgba(164, 148, 255, 0.3), 
    0 0 0 20px rgba(164, 148, 255, 0.3), 
    0 0 0 20px rgba(164, 148, 255, 0.3), 
    0 0 0 20px rgba(164, 148, 255, 0.3), 
    0 0 0 20px rgba(164, 148, 255, 0.3);
 }
//  30% { height: 300px; width: 300px; opacity: 1 }
//  40% { height: 305px; width: 305px; opacity: 0.7; }

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

const Circle = styled.div`
  height: 100px;
  width: 100px;

  border-width: 5px;
  border-radius: 50%;
  border-color: blue;
  animation-name: ${breatheAnimation};
  animation-duration: 12s;
  animation-iteration-count: infinite;
`;
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 450px;
`;
