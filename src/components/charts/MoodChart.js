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
    <div>
      <ResponsiveContainer width="100%" height={500}>
      <AreaChart
        width={1000}
        height={400}
        data={data}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="2 4" />
        <XAxis dataKey="date" name="mood" />
        <YAxis />
        <Tooltip />
        <Area type="monotone" dataKey="mood" stroke="#8884d8" fill="#8884d8" />
      </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default MoodChart;
