import React from 'react';
import Grid from '@mui/material/Grid';
import ImageSlider from './ImageSlider';
import StatBox from './StatBox'
import './index.scss';

const InfoPanel  = () => {
    return (   
        <div className="Info">
                <Grid
                    container
                    direction="row"
                    wrap="nowrap"
                    alignItems="flex-start"
                    justifyContent="center"
                    sx={{ minHeight: '100%' }}
                >   
                    <Grid item>
                            <Grid
                                container
                                direction="column"
                                alignItems="flex-start"
                                justifyContent="center"
                            >
                                <Grid item>
                                    <StatBox>lol</StatBox>
                                </Grid>
                                <Grid item>
                                    <StatBox>lol2</StatBox>
                                </Grid>
                                <Grid item>
                                    <StatBox>lol3</StatBox>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item>
                            <ImageSlider></ImageSlider>
                        </Grid>
                        <Grid item>
                            <Grid
                                container
                                direction="column"
                                alignItems="flex-start"
                                justifyContent="center"
                            >
                                <Grid item>
                                    <StatBox>lol</StatBox>
                                </Grid>
                                <Grid item>
                                    <StatBox>lol2</StatBox>
                                </Grid>
                                <Grid item>
                                    <StatBox>lol3</StatBox>
                                </Grid>
                            </Grid>
                        </Grid>

                </Grid>
            </div>
    )
}

export default InfoPanel;