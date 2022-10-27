import React, {useState,useEffect} from 'react';
import Grid from '@mui/material/Grid';
import ImageSlider from './ImageSlider';
import StatBox from './StatBox'
import './index.scss';

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
                            <ImageSlider images = {imageBitmaps} width = {width} height = {height} ></ImageSlider>
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
