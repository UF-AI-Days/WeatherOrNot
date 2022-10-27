import React, {useState,useEffect} from 'react';
import Grid from '@mui/material/Grid';
import ImageSlider from './ImageSlider';
import StatBox from './StatBox'
import './index.scss';

const colors = [
    "#5fa55a", "#01b4bc", "#f6d51f", "#fa8925", "#fa5457", "#a55fa5"
]

const testData = (index) => {
    return {
        labels: ["2022", "2025", "2030", "2050"],
        datasets: [{
            data: [5, 10, 15, 20],
            borderColor: colors[index],
        }]
    }
}

const test_image_sources = ["hurricaneSandy-1.jpg","img3.jpg","akyOc.png"]

const InfoPanel  = ( {imageBitmaps,imageWidth,imageHeight}  ) => {
    
    
    return (   
        <div className="Info">
                <Grid
                    container
                    direction="row"
                    wrap="nowrap"
                    justifyContent="center"
                    sx={{ height: '100%' }}
                >   
                    <Grid item xs={3} mt={-3} sx={{
                        height: '100%'
                    }}>
                        <Grid
                            container
                            direction="column"
                            justifyContent="center"
                            spacing={2}
                            sx={{ height: '100%' }}
                        >
                            <Grid item>
                                <StatBox
                                    data={testData(0)}
                                    val="Example"
                                />
                            </Grid>
                            <Grid item>
                                <StatBox
                                    data={testData(1)}
                                    val="Example"
                                />
                            </Grid>
                            <Grid item>
                                <StatBox
                                    data={testData(2)}
                                    val="Example"
                                />
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid item xs={5} mt={-5} sx={{
                        display:'flex',
                        alignItems:'center',
                        justifyContent:'center',
                        height: '100%',
                        padding: "0 3rem"
                    }}>
                        <Grid container
                              direction="column"
                              justifyContent='center'
                              alignItems='center'
                              sx = {{
                                height: '100%'
                              }}
                              spacing={4}
                        >
                            <Grid className="Sticky" item>
                                <h1 className="Location">Boca Raton, FL</h1>
                            </Grid>
                            <Grid item>
                                <ImageSlider images = {imageBitmaps} width = {imageWidth} height = {imageHeight} ></ImageSlider>
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid item xs={3} mt={-3} sx={{
                        height: '100%'
                    }}>
                        <Grid
                            container
                            direction="column"
                            justifyContent="center"
                            spacing={2}
                            sx={{ height: '100%'}}
                        >
                            <Grid item>
                                <StatBox
                                    data={testData(3)}
                                    val="Example"
                                />
                            </Grid>
                            <Grid item>
                                <StatBox
                                    data={testData(4)}
                                    val="Example"
                                />
                            </Grid>
                            <Grid item>
                                <StatBox
                                    data={testData(5)}
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
