import React, {useState} from 'react';
import Slider from '@mui/material/Slider';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box'

const image_sources = ["hurricaneSandy-1.jpg","logo192.png","logo512.png"]

const ImageSlider  = (props) => {

    const [imageIndex, setImageIndex] = useState(0);

    return (  
        <div className="ImageSlider">
            <Grid
                container
                direction="column"
                alignItems="flex-start"
                justifyContent="center"
            >
                <Grid item>
                    <img src= {image_sources[imageIndex]} ></img>
                </Grid>
                
                <Grid item>
                    <Box sx={{ width: 300 }}>
                        <Slider
                            aria-label="Year"
                            defaultValue={0}
                            valueLabelDisplay="auto"
                            step={10}
                            min={0}
                            max={image_sources.length*10}
                        />
                    </Box>
                </Grid>
            </Grid>
            
        </div>
    )
}

export default ImageSlider

/*
<Grid item>
    <Box sx={{ width: 300 }}>
        <Slider
            aria-label="Year"
            defaultValue={0}
            getAriaValueText={"valuetext"}
            valueLabelDisplay="auto"
            step={10}
            min={0}
            max={image_sources.length*10}
        />
    </Box>
</Grid>*/