import React from 'react';
import Grid from '@mui/material/Grid';
import ImageSlider from './ImageSlider';
import StatBox from './StatBox'
import './index.scss';

const testData = [
    {year: 2022, val: 5},
    {year: 2027, val: 20},
    {year: 2032, val: 50},
    {year: 2037, val: 100},
];

const InfoPanel  = () => {
    return (   
        <div className="Info">
                <Grid
                    container
                    direction="row"
                    wrap="nowrap"
                    justifyContent="center"
                    sx={{ minHeight: '100%' }}
                >   
                    <Grid item xs={4}>
                        <Grid
                            container
                            direction="column"
                            justifyContent="center"
                        >
                            <Grid item>
                                <StatBox
                                    data={testData}
                                    val="Example"
                                />
                            </Grid>
                            <Grid item>
                                <StatBox
                                    data={testData}
                                    val="Example"
                                />
                            </Grid>
                            <Grid item>
                                <StatBox
                                    data={testData}
                                    val="Example"
                                />
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid item xs={4} sx={{
                        display:'flex',
                        alignItems:'center',
                        justifyContent:'center'
                    }}>
                        <ImageSlider></ImageSlider>
                    </Grid>

                    <Grid item xs={4}>
                        <Grid
                            container
                            direction="column"
                            justifyContent="center"
                        >
                            <Grid item>
                                <StatBox
                                    data={testData}
                                    val="Example"
                                />
                            </Grid>
                            <Grid item>
                                <StatBox
                                    data={testData}
                                    val="Example"
                                />
                            </Grid>
                            <Grid item>
                                <StatBox
                                    data={testData}
                                    val="Example"
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
    )
}

export default InfoPanel;