import { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import axios from 'axios';

import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement, Legend, Tooltip, Filler } from "chart.js";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Legend, Tooltip, Filler);



const salesData = [
  { month: "January", week: "week 1", sales: 100 },
  { month: "January", week: "week 2", sales: 150 },
  { month: "February", week: "week 3", sales: 200 },
  { month: "February", week: "week 4", sales: 120 },
];

const salesData2 = [
  { month: "January", week: "week 1", sales: 10 },
  { month: "January", week: "week 2", sales: 100 },
  { month: "February", week: "week 3", sales: 195 },
  { month: "February", week: "week 4", sales: 190 },
];



const Linechart = () => {
  const [data, setData] = useState({
    labels: [],
    datasets: [],
  });

  const [selectedMonth, setSelectedMonth] = useState("All");
  const [options, setOptions] = useState({});

  useEffect(() => {
    const filteredData = selectedMonth === "All"
      ? salesData
      : salesData.filter((data) => data.month === selectedMonth);

    setData({
      labels: filteredData.map((data) => data.week),
      datasets: [
        {
          label: "Guest",
          data: filteredData.map((data) => data.sales),
          borderColor: "red",
          borderWidth: 1,
          tension: 0.5,
        },
        {
          label: "User",
          data: salesData2.map((data) => data.sales),
          borderColor: "green",
          borderWidth: 1,
          tension: 0.5,
        },
      ],
    });
    setOptions({
      plugins:{
          legends:{
              position:'top',
          },
          title:{
              display:true,
              text:'Guest And User Activities',
          },
      },
      maintainAspectRatio:true,
      responsive:true,
  })
  }, [selectedMonth]);

  return (
    <div className="w-[80vw] md:w-[90vw] object-contain p-4 bg-white m-4 md:m-auto rounded-lg">
      <div>
        <label htmlFor="monthFilter" className="px-2">My Activities :</label>
        <select
          className="border px-2 outline-none"
          id="monthFilter"
          value={selectedMonth}
          onChange={(e) => setSelectedMonth(e.target.value)}
        >
          <option value="All">All Months</option>
          <option value="January">January</option>
          <option value="February">February</option>
        </select>
      </div>
      <Line data={data} options={options} width={100} height={50} />
    </div>
  );
}

export default Linechart;
