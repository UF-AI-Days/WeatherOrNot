import React, {useState,useEffect} from 'react';
import Grid from '@mui/material/Grid';
import ImageSlider from './ImageSlider';
import StatBox from './StatBox'
import './index.scss';

const testData = {
    labels: ["2022", "2025", "2030", "2050"],
    datasets: [{
        data: [5, 10, 15, 20],
        borderColor: '#CF9FFF',
    }]
};


const test_image_sources = ["hurricaneSandy-1.jpg","img3.jpg","akyOc.png"]

const InfoPanel  = ( {imageSources,imageWidth,imageHeight}  ) => {
    const [imageBitmaps, setImageBitmaps] = useState(  )

    const pushBitmaps = async () => {
	const lol = await Promise.all(imageSources.map(
	    async (elem) => {
		const response = await fetch(elem)
		const imageBlob = await response.blob()
		const imagebit = await createImageBitmap(imageBlob)
		//console.log(imagebit)
		return imagebit
	    }))
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
                    sx={{ height: '100%' }}
                >   
                    <Grid item xs={4} mt={-5} sx={{
                        height: '100%'
                    }}>
                        <Grid
                            container
                            direction="column"
                            justifyContent="center"
                            sx={{ height: '100%' }}
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

                    <Grid item xs={4} mt={-5} sx={{
                        display:'flex',
                        alignItems:'center',
                        justifyContent:'center',
                        height: '100%'
                    }}>
                        <ImageSlider images = {imageBitmaps} width = {imageWidth} height = {imageHeight} ></ImageSlider>
                    </Grid>

                    <Grid item xs={4} mt={-5} sx={{
                        height: '100%'
                    }}>
                        <Grid
                            container
                            direction="column"
                            justifyContent="center"
                            sx={{ height: '100%'}}
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
