import React from "react";
import { Spin } from "antd";

const loading = (props) => {
  if (!props.isLoading) return <div {...props} />;

  return (
    <div>
      <Spin size="large" />
    </div>
  );
};

export default loading;
