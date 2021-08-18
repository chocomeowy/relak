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
  // console.log(data);
  let dataFormatDate = [];
  if (data) {
    dataFormatDate = data?.map((d) => ({
      ...d,
      formatDate: moment(d.date).format("DD MMM"),
    }));
    console.log(dataFormatDate);
  }

  return (
    <div>
      <ResponsiveContainer width="100%" height={500}>
        <AreaChart
          width={1000}
          height={400}
          data={dataFormatDate}
          margin={{
            top: 20,
            // right: "auto",
            // left: "auto",
            bottom: 20,
          }}
        >
          <CartesianGrid strokeDasharray="1 4" />
          <XAxis dataKey="formatDate" />
          <YAxis />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="mood"
            stroke="#8884d8"
            fill="#8884d8"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default MoodChart;
