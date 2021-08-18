import * as React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Brush
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

  // = Gordon's scuffed button logic =
  // the default state is "month", buttons below will trigger either handleWeek or handleMonth to change the Y AXIS, which has a double Agnes operator.

  // const [type, setType] = useState("month")

  // const handleWeek = () => {
  //   setType("week");
  //   console.log("Set the chart to show week")
  // };

  // const handleMonth = () => {
  //   setType("month");
  //   console.log("Set the chart to show month")
  // }

  const xAxisTickFormatter = (dataFormatDate) => {
    return moment(dataFormatDate)
      .format("ll")
      .slice(0, 6);
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
        {/* <Brush tickFormatter={xAxisTickFormatter} dataKey="formatDate" /> */}
      </ResponsiveContainer>
    </div>
  );
};

export default MoodChart;
