import React, { useEffect, useState } from "react";
import { Stack } from "@mui/material";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import "./index.scss";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: false,
  plugins: {
    legend: {
      display: false,
    },
  },
  scales: {
    x: {
      ticks: {
        color: "white",
        font: {
          family: "Consolas",
        },
      },
      grid: {
        drawTicks: false,
        color: "white",
      },
    },
    y: {
      min: 0,
      ticks: {
        color: "white",
        font: {
          family: "Consolas",
        },
      },
      grid: {
        drawTicks: false,
        color: "white",
      },
    },
  },
};

const StatBox = ({ data = null, index = 0 }) => {
  useEffect(() => {});

  return (
    <div className="StatBox">
      <Stack spacing={1}>
        <div className="Title">
          <h1 className="TitleVal">{data.title}</h1>
        </div>
        <div
          className="Stat"
          style={{
            color: data.datasets[0].borderColor,
          }}
        >
          {data !== null && index >= 0
            ? data.datasets[0].data[Math.trunc(index)] + " " + data.units
            : "N/A"}
        </div>
        {data !== null && (
          <div className="LineChart">
            <Line options={options} data={data} />
          </div>
        )}
      </Stack>
    </div>
  );
};

export default StatBox;
