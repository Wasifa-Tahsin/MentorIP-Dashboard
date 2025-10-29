import { useState } from "react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from "recharts";

const UserGrowthChart = () => {
  const [selectedYear, setSelectedYear] = useState("2024");

  const userData = [
    { month: "Jan", active: 800, cancel: 300 },
    { month: "Feb", active: 650, cancel: 280 },
    { month: "Mar", active: 700, cancel: 320 },
    { month: "Apr", active: 600, cancel: 290 },
    { month: "May", active: 750, cancel: 330 },
    { month: "Jun", active: 720, cancel: 310 },
    { month: "Jul", active: 670, cancel: 270 },
    { month: "Aug", active: 800, cancel: 340 },
    { month: "Sep", active: 710, cancel: 300 },
    { month: "Oct", active: 650, cancel: 250 },
    { month: "Nov", active: 780, cancel: 310 },
    { month: "Dec", active: 860, cancel: 400 },
  ];

  return (
    <div className="bg-white rounded-lg shadow p-4 flex-1 h-[400px]">
      {/* Header */}
      <div className="flex justify-between items-center mb-3">
        <h2 className="font-semibold text-gray-800 text-lg">User Growth</h2>
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
        <BarChart data={userData} margin={{ top: 10, right: 30, left: 0, bottom: 5 }}>
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip
            cursor={{ fill: "rgba(241, 245, 249, 0.6)" }}
            contentStyle={{ borderRadius: "8px", borderColor: "#f5f5f5" }}
          />
          <Legend
            verticalAlign="top"
            align="right"
            wrapperStyle={{ top: -10, right: 0 }}
          />
          <Bar dataKey="active" fill="#B14034" name="Active" barSize={20} radius={[4, 4, 0, 0]} />
          <Bar dataKey="cancel" fill="#FEE2E2" name="Cancel" barSize={20} radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default UserGrowthChart;
