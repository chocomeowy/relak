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
import { Slider, Col, Typography } from "antd";
import moment from "moment";
const { Text } = Typography;

const formatTip = (value) => {
  if (value === 1) {
    return `${value} day before`;
  } else {
    return `${value} days before`;
  }
};

const MoodChart = ({ data }) => {
  const [sliderValue, setSliderValue] = useState(1);

  // ========== add formatted date ==========
  // console.log(data);
  let dataFormatDate = [];
  if (data) {
    dataFormatDate = data?.map((d) => ({
      ...d,
      formatDate: moment(d.date).format("DD MMM"),
    }));
  }
  // console.log(dataFormatDate);

  // ========== sort filter ==========
  const sortedData = dataFormatDate.sort((a, b) => {
    if (moment(a.date).isBefore(b.date)) {
      return -1;
    } else {
      return 1;
    }
  });
  // console.log(sortedData);

  const filterData = (value) => {
    let filtered;
    if (value === 1) {
      filtered = sortedData.filter((f) =>
        moment(f.date).isBetween(moment().subtract(1, "days"), moment())
      );
    } else if (value === 7) {
      filtered = sortedData.filter((f) =>
        moment(f.date).isBetween(moment().subtract(7, "days"), moment())
      );
    } else if (value === 14) {
      filtered = sortedData.filter((f) =>
        moment(f.date).isBetween(moment().subtract(14, "days"), moment())
      );
    } else if (value === 21) {
      filtered = sortedData.filter((f) =>
        moment(f.date).isBetween(moment().subtract(21, "days"), moment())
      );
    } else if (value === 28) {
      filtered = sortedData.filter((f) =>
        moment(f.date).isBetween(moment().subtract(28, "days"), moment())
      );
    } else {
      filtered = sortedData;
    }
    return filtered;
  };
  //console.log(filterData(sliderValue));

  return (
    <div>
      {filterData(sliderValue) === null ? (
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
              <YAxis yAxisId="right" type="number" orientation="right" />

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
      <Col span={8} offset={8}>
        <Slider
          defaultValue={1}
          value={sliderValue}
          onChange={(sliderValue) => setSliderValue(sliderValue)}
          tipFormatter={formatTip}
          min={1}
          max={31}
          step={6}
        />
        <Text type="secondary" italic>
          Choose Day Range
        </Text>
      </Col>
    </div>
  );
};

export default MoodChart;
