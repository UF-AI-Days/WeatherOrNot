import React, { useEffect, useState } from 'react';
import { Stack } from '@mui/material';
import { VictoryChart, VictoryLine, VictoryBar, VictoryAxis, LineSegment, VictoryTheme } from 'victory';
import './index.scss';

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
                    theme={VictoryTheme.material}
                    height={200}
                    width={200}
                    style={{ display: "block" }}
                >
                    <VictoryAxis dependentAxis
                        style={{
                            axisLabel: {fontSize: 5},
                            tickLabels: { 
                                fill: "white",
                                fontSize: 5
                            }
                        }}
                    />
                    <VictoryAxis
                        tickValues={ticks}
                        style={{ 
                            axisLabel: {fontSize: 5},
                            tickLabels: {
                                angle: 315,
                                fill: "white",
                                fontSize: 5
                            }
                        }}
                    />
                    <VictoryLine
                        data={data}
                        x="year"
                        y="val"
                        style={{
                            data: { stroke: "#CF9FFF" },
                        }}
                    />
                </VictoryChart>}
            </Stack>
        </div>
    )
}

export default StatBox;