import React, { useEffect, useState } from 'react';
import { Stack } from '@mui/material';
import { VictoryChart, VictoryLine, VictoryBar, VictoryAxis, LineSegment } from 'victory';
import './index.scss';

const chartTheme = {
    axis: {
      style: {
        tickLabels: {
          fill: 'white',
        },
        
      },
    },
  };


const StatBox = ({
    data = null, val
}) => {
    const [ticks, setTicks] = useState(Object.keys(data).map((key) => data[key].year));
    useEffect(() => {
        console.log(data);
        console.log(Object.keys(data).map((key) => data[key].year));
        // console.log(data.length);
    })

    return (
        <div className="StatBox">
            <Stack spacing={1}>
                <div className="Title">
                    <h1 className="TitleVal">{val}</h1>
                </div>
                <div className="Stat">
                    {data !== null ? data[data.length - 1].val : "N/A"}
                </div>
                {data !== null && <VictoryChart
                    theme={chartTheme}
                    domainPadding={20}
                >
                    <VictoryAxis dependentAxis
                    />
                    <VictoryAxis
                        tickValues={ticks}
                        style={{ tickLabels: {angle: 315}}}
                    />
                    <VictoryLine
                        data={data}
                        x="year"
                        y="val"
                    />
                </VictoryChart>}
            </Stack>
        </div>
    )
}

export default StatBox;