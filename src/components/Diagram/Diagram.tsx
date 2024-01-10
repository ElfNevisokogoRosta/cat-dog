import React from "react";
import ReactApexChart from "react-apexcharts";
import { data } from "../../pages/Admin/AdminDashboard";
type DIAGRAM_TYPES =["donut" | "line" | "area" | "bar" | "pie" | "radialBar" | "scatter" | "bubble" | "heatmap" | "candlestick" | "boxPlot" | "radar" | "polarArea" | "rangeBar" | "rangeArea" | "treemap" | undefined]
const Diagram = () => {
  const dounatData:{
    series: number[],
    options:{chart: {
      type: DIAGRAM_TYPES
      }},

  } = {
    series: [44, 55, 41, 17, 15],
    options: {
      chart: {
        type: "donut",
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: "bottom",
            },
          },
        },
      ],
    },
  };
  // const chartOptions = {
  //     series: [
  //         {
  //             name: 'Sample Data',
  //             data: data.map(item => ({ x: item.title, y: item.value })), // Adjust your data mapping as needed
  //         },
  //     ],
  //     xaxis: {
  //         categories: data.map(item => item.title), // Categories on the X-axis
  //     },
  // };

  return (
    <div className="w-[200px] h-[200px]">
      <ReactApexChart
        options={dounatData.options}
        series={dounatData.series}
        type="donut"
      />
    </div>
  );
};

export default Diagram;
