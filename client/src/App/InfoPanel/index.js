import React from 'react';
import Grid from '@mui/material/Grid';
import ImageSlider from './ImageSlider';
import InfoBox from './InfoBox'
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
                                    <InfoBox>lol</InfoBox>
                                </Grid>
                                <Grid item>
                                    <InfoBox>lol2</InfoBox>
                                </Grid>
                                <Grid item>
                                    <InfoBox>lol3</InfoBox>
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
                                    <InfoBox>lol</InfoBox>
                                </Grid>
                                <Grid item>
                                    <InfoBox>lol2</InfoBox>
                                </Grid>
                                <Grid item>
                                    <InfoBox>lol3</InfoBox>
                                </Grid>
                            </Grid>
                        </Grid>

                </Grid>
            </div>
    )
}

export default InfoPanel;