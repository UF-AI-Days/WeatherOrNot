import React, { useState } from "react";
import Slider from "@mui/material/Slider";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Canvas from "../../Canvas";
import ImageUpload from "../ImageUpload";

import { styled } from "@mui/system";

const CustomSlider = styled(Slider)(() => ({
  color: "#240090",
  "& .MuiSlider-thumb": {
    backgroundColor: "#3500D3",
  },
}));

const ImageSlider = ({ images, width, height }) => {
  const [imageIndex, setImageIndex] = useState(0);

  function drawImageScaled(img, ctx) {
    var canvas = ctx.canvas;
    
    
    ctx.drawImage(
      img,
      0,
      0,
      img.width,
      img.height,
      0,
      0,
      canvas.width,
      canvas.height
    );
  }

  return (
    <div className="ImageSlider">
      <Grid container direction="column" justifyContent="center" spacing={2}>
        <Grid item>
          <Canvas
            className="Canvas"
            width={width}
            height={height}
            draw={(context) => {
              context.clearRect(0, 0, width, height);

              if (images) {
                context.globalAlpha = 1;
                drawImageScaled(images[Math.floor(imageIndex)], context);
                context.globalAlpha = imageIndex - Math.floor(imageIndex);
                drawImageScaled(
                  images[Math.min(images.length - 1, Math.ceil(imageIndex))],
                  context
                );
              }
            }}
          />
        </Grid>

        <Grid item>
          <Box
            sx={{
              width: width * 0.8,
            }}
          >
            <CustomSlider
              aria-label="Year"
              defaultValue={0}
              valueLabelDisplay="auto"
              step={0.01}
              min={0}
              max={images ? images.length - 1 : 0}
              onChange={(e, value, activeThumb) => {
                setImageIndex(value);
              }}
            />
          </Box>
        </Grid>

        <Grid item>
          <ImageUpload />
        </Grid>
      </Grid>
    </div>
  );
};

export default ImageSlider;

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
