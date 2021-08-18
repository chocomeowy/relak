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
  // ========== add formatted date ==========
  // console.log(data);
  let dataFormatDate = [];
  if (data) {
    dataFormatDate = data?.map((d) => ({
      ...d,
      formatDate: moment(d.date).format("DD MMM"),
    }));
    console.log(dataFormatDate);
  }

  // ========== filter sort ==========

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
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="formatDate" />
          <YAxis type="number" domain={['dataMin', 'dataMax']} />
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
