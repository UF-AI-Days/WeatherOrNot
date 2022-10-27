import React, {useState,useEffect} from 'react';
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


const test_image_sources = ["hurricaneSandy-1.jpg","img3.jpg","akyOc.png"]

const InfoPanel  = ( {imageSources,width,height}  ) => {
    const [imageBitmaps, setImageBitmaps] = useState(  )

    console.log(width)
    
    const pushBitmaps = async () => {
	const lol = await Promise.all(imageSources.map(
	    async (elem) => {
		const response = await fetch(elem)
		const imageBlob = await response.blob()
		const imagebit = await createImageBitmap(imageBlob)
		//console.log(imagebit)
		return imagebit
	    }))
	console.log("here")
	console.log(lol)
	setImageBitmaps(lol)
    }

    useEffect( () => {
	pushBitmaps()
    }, [])
    
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
=
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
                        <ImageSlider images = {imageBitmaps} width = {width} height = {height} ></ImageSlider>
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
