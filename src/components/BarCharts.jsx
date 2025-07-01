import React from "react";
import {
  Bar,
  BarChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const Array = [
  {
    name: "M",
    view: "50",
  },
  {
    name: "T",
    view: "45",
  },
  {
    name: "W",
    view: "25",
  },
  {
    name: "T",
    view: "90",
  },
  {
    name: "F",
    view: "80",
  },
  {
    name: "S",
    view: "50",
  },
  {
    name: "S",
    view: "70",
  },
];
function BarCharts() {
  return (
    <div className="chartsBar">
      <ResponsiveContainer width="70%" aspect={3}>
        <BarChart data={Array} width={900} height={550}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="view" fill="green" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default BarCharts;
