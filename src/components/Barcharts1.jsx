import React from "react";
import {
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const Array = [
  {
    name: "J",
    sells: "50",
  },
  {
    name: "F",
    sells: "45",
  },
  {
    name: "M",
    sells: "25",
  },
  {
    name: "A",
    sells: "90",
  },
  {
    name: "M",
    sells: "80",
  },
  {
    name: "J",
    sells: "50",
  },
  {
    name: "J",
    sells: "60",
  },
  {
    name: "A",
    sells: "70",
  },
  {
    name: "S",
    sells: "80",
  },
  {
    name: "O",
    sells: "90",
  },
  {
    name: "N",
    sells: "50",
  },
  {
    name: "D",
    sells: "30",
  },
];

function Barcharts1() {
  return (
    <div className="chartsBar">
      <ResponsiveContainer width="70%" aspect={3}>
        <LineChart data={Array} width={800} height={550}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line dataKey="sells" fill="green" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Barcharts1;
