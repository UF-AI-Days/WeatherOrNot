import React, { useEffect, useState } from 'react';
import { Stack } from '@mui/material';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import './index.scss';

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
          display: false
        },
    },
    scales: {
        x: {
            color: "#000",
            font: "Consolas",
        },
        y: {
            color: "#000",
            font: "Consolas"
        }
    }
};

const StatBox = ({
    data = null, val
}) => {
    const [dataVals, setDataVals] = useState(data.datasets[0].data);

    useEffect(() => {
        console.log(data);
        console.log(dataVals);
    })


    return (
        <div className="StatBox">
            <Stack spacing={1}>
                <div className="Title">
                    <h1 className="TitleVal">{val}</h1>
                </div>
                <div className="Stat">
                    {data !== null ? dataVals[dataVals.length - 1] : "N/A"}
                </div>
                {data !== null &&
                    <div className="LineChart">
                        <Line 
                            options={options}
                            data={data}/>
                    </div>}
            </Stack>
        </div>
    )
}

export default StatBox;