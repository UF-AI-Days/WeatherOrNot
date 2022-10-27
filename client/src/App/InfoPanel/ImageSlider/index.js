import React, { useState } from "react";
import Slider from "@mui/material/Slider";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Canvas from "../../Canvas";
import ImageUpload from "../ImageUpload";

import { styled } from "@mui/system";

const image_sources = ["hurricaneSandy-1.jpg", "logo192.png", "logo512.png"];

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
    var hRatio = canvas.width / img.width;
    var vRatio = canvas.height / img.height;
    var ratio = Math.min(hRatio, vRatio);
    var centerShift_x = (canvas.width - img.width * ratio) / 2;
    var centerShift_y = (canvas.height - img.height * ratio) / 2;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(
      img,
      0,
      0,
      img.width,
      img.height,
      centerShift_x,
      centerShift_y,
      img.width * ratio,
      img.height * ratio
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
