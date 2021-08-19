import * as React from "react";
import { useState } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { Slider } from "antd";
import moment from "moment";

const MoodChart = ({ data }) => {
  const currentDate = moment.utc();
  const [sliderValue, setSliderValue] = useState(1);
  console.log(currentDate);
  console.log(currentDate.subtract(24, "hours"));
  console.log(currentDate.subtract(24, "hours").format());

  // ========== add formatted date ==========
  // console.log(data);
  let dataFormatDate = [];
  if (data) {
    dataFormatDate = data?.map((d) => ({
      ...d,
      formatDate: moment(d.date).format("DD MMM"),
    }));
  }
  console.log(dataFormatDate);
  // console.log(moment(data[1].date));

  // ========== sort filter ==========
  const sortedData = dataFormatDate.sort((a, b) => {
    if (moment(a.date).isBefore(b.date)) {
      return -1;
    } else {
      return 1;
    }
  });
  console.log(sortedData);

  const filterData = (value) => {
    let filtered;
    if (value === 1) {
      filtered = sortedData.filter((f) =>
        moment(f.date).isBetween(
          currentDate.subtract(24, "hours").format(),
          currentDate.format()
        )
      );
    } else if (value === 7) {
      filtered = sortedData.filter((f) =>
        moment(f.date).isBetween(
          currentDate.subtract(7, "days").format(),
          currentDate.format()
        )
      );
    } else {
      filtered = null;
    }
    return filtered;
  };
  console.log(filterData(sliderValue));

  return (
    <div>
      {filterData(sliderValue).length === 0 ? (
        <>
          <p>No data found.</p>
        </>
      ) : (
        <>
          <ResponsiveContainer width="100%" height={500}>
            <AreaChart
              width={1000}
              height={400}
              data={filterData(sliderValue)}
              margin={{
                top: 20,
                // right: "auto",
                // left: "auto",
                bottom: 20,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="formatDate" />
              <YAxis type="number" domain={[1, 5]} />
              <Tooltip />
              <Area
                type="monotone"
                dataKey="mood"
                stroke="#8884d8"
                fill="#8884d8"
              />
            </AreaChart>
          </ResponsiveContainer>
        </>
      )}
      <Slider
        defaultValue={1}
        value={sliderValue}
        onChange={(sliderValue) => setSliderValue(sliderValue)}
        min={1}
        max={7}
        step={6}
      />
    </div>
  );
};

export default MoodChart;
