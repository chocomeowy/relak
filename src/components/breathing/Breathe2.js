import React from "react";
import styled from "styled-components";

const Breathe2 = () => {
  return (
    <>
      <WatchFace>
        <div className="circle" />
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
      </WatchFace>
    </>
  );
};

export default Breathe2;

const WatchFace = styled.div`
  height: 125px;
  width: 125px;
  animation: pulse 4s cubic-bezier(0.5, 0, 0.5, 1) alternate infinite;
`;
