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
    name: "Apr",
    view: "90",
  },
  {
    name: "May",
    view: "80",
  },
  {
    name: "Jun",
    view: "50",
  },
  {
    name: "Jul",
    view: "60",
  },
  {
    name: "Aug",
    view: "70",
  },
  {
    name: "Sep",
    view: "80",
  },
  {
    name: "Oct",
    view: "70",
  },
  {
    name: "Nov",
    view: "60",
  },
  {
    name: "Dec",
    view: "90",
  },
];
function Barcharts2() {
  return (
    <div className="chartsBar">
      <ResponsiveContainer width="70%" aspect={3}>
        <LineChart data={Array} width={800} height={550}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line dataKey="view" fill="green" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Barcharts2;
