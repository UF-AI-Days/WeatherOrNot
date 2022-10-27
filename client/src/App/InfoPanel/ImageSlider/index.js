import React, {useState} from 'react';
import Slider from '@mui/material/Slider';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box'
import { styled } from '@mui/system';

const image_sources = ["hurricaneSandy-1.jpg","logo192.png","logo512.png"]
const CustomSlider = styled(Slider)(() => ({
    color: "#240090",
    "& .MuiSlider-thumb": {
      backgroundColor: "#3500D3" 
    },
}));

const ImageSlider  = (props) => {
    const [imageIndex, setImageIndex] = useState(0);

    return (  
        <Grid
            container
            direction="column"
            justifyContent="center"
        >
            <Grid item>
                <img className="Image"
                     src={image_sources[imageIndex]}>
                </img>
            </Grid>
            
            <Grid item>
                <Box sx={{ width: 500 }}>
                    <CustomSlider
                        aria-label="Year"
                        defaultValue={0}
                        valueLabelDisplay="auto"
                        step={10}
                        min={0}
                        max={image_sources.length*10}
                        onChange={(e,value,activeThumb) => { setImageIndex(value/10) }}
                    />
                </Box>
            </Grid>
        </Grid>
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