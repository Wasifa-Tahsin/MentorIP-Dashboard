import { useState } from "react";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

const ViewerGrowthChart = () => {
  const [selectedYear, setSelectedYear] = useState("2024");

  // Adjusted data for smoother low wave look
  const viewerData = [
    { month: "Jan", viewers: 30 },
    { month: "Feb", viewers: 60 },
    { month: "Mar", viewers: 50 },
    { month: "Apr", viewers: 70 },
    { month: "May", viewers: 40 },
    { month: "Jun", viewers: 60 },
    { month: "Jul", viewers: 50 },
    { month: "Aug", viewers: 65 },
    { month: "Sep", viewers: 55 },
    { month: "Oct", viewers: 70 },
    { month: "Nov", viewers: 60 },
    { month: "Dec", viewers: 75 },
  ];

  return (
    <div className="bg-white rounded-lg shadow p-4 flex-1 h-[350px]">
      {/* Header */}
      <div className="flex justify-between items-center mb-2">
        <h2 className="font-semibold text-gray-800 text-lg">Viewer Growth</h2>
        <select
          value={selectedYear}
          onChange={(e) => setSelectedYear(e.target.value)}
          className="border border-gray-300 rounded-md px-2 py-1 text-sm focus:outline-none focus:ring-1 focus:ring-red-400"
        >
          <option value="2024">2024</option>
          <option value="2023">2023</option>
          <option value="2022">2022</option>
        </select>
      </div>

      {/* Chart */}
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          data={viewerData}
          margin={{ top: 10, right: 20, left: 0, bottom: 5 }}
        >
          {/* Gradient fill */}
          <defs>
            <linearGradient id="colorViewers" x1="0" y1="0" x2="0" y2="1">
              {/* Darker red top → lighter bottom */}
              <stop offset="0%" stopColor="#B14034" stopOpacity={0.85} />
              <stop offset="100%" stopColor="#F3B0A2" stopOpacity={0.4} />
            </linearGradient>
          </defs>

          {/* Axis styling */}
          <XAxis
            dataKey="month"
            tick={{ fill: "#666", fontSize: 12 }}
            axisLine={false}
            tickLine={false}
          />
          <YAxis
            tick={{ fill: "#888", fontSize: 12 }}
            axisLine={false}
            tickLine={false}
            domain={[0, 100]} // keeps wave lower
          />
          <Tooltip
            cursor={{ fill: "rgba(241,245,249,0.6)" }}
            contentStyle={{
              borderRadius: "8px",
              borderColor: "#f5f5f5",
              backgroundColor: "white",
            }}
          />

          {/* Smooth wave */}
          <Area
            type="monotone"
            dataKey="viewers"
            stroke="#B14034"
            strokeWidth={2}
            fill="url(#colorViewers)"
            animationDuration={1200}
            animationBegin={100}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ViewerGrowthChart;
