import * as React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import moment from "moment";

const MoodChart = ({ data }) => {
  //   console.log(data);

  return (
    <>
      {/* <ResponsiveContainer width="100%" height="100%"> */}
      <AreaChart
        width={500}
        height={400}
        data={data}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" name="mood" />
        <YAxis />
        <Tooltip />
        <Area type="monotone" dataKey="mood" stroke="#8884d8" fill="#8884d8" />
      </AreaChart>
      {/* </ResponsiveContainer> */}
    </>
  );
};

export default MoodChart;
