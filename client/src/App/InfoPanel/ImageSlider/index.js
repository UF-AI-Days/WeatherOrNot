import React, { useState, useEffect } from "react";
import Slider from "@mui/material/Slider";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Canvas from "../../Canvas";
import ImageUpload from "../ImageUpload";
import GridLoader from "react-spinners/GridLoader";

import { styled } from "@mui/system";

const CustomSlider = styled(Slider)(() => ({
  color: "white",
  "& .MuiSlider-thumb": {
    backgroundColor: "white",
  },
}));

const LoaderStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  marginRight: "-50%",
  transform: "translate(-50%, -50%)",
};

const ImageSlider = ({ width, height, onChange }) => {
  const [imageIndex, setImageIndex] = useState(0);
  const [images, setImages] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    console.log(width);
    console.log(height);
  });

  const blobToBase64 = (blob) => {
    const reader = new FileReader();
    reader.readAsDataURL(blob);
    return new Promise((resolve) => {
      reader.onloadend = () => {
        resolve(reader.result);
      };
    });
  };

  const handleUpload = async (img) => {
    console.log(img);
    const uploadBlob = new Blob([img], { type: img.type });
    const uploadString = await blobToBase64(uploadBlob);
    console.log(uploadString.substring(0, 50));
    const uploadString2 = uploadString.substring(13 + img.type.length);
    console.log(uploadString2.substring(0, 50));
    setLoading(true);
    const response = await fetch("http://localhost:8000/magic", {
      method: "POST",
      body: {
        Image: uploadString,
      }, // string or object
      headers: {
        "Content-Type": "application/json",
      },
    });
    const myJson = await response.json(); //extract JSON from the http response
    const imageSources = myJson[1];
    const bitMaps = await Promise.all(
      imageSources.map(async (elem) => {
        const response = await fetch(elem);
        const imageBlob = await response.blob();
        const imagebit = await createImageBitmap(imageBlob);
        return imagebit;
      })
    );

    setLoading(false);
    setImages(bitMaps);
  };

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
      <div className="sweetLoading">
        <GridLoader
          color="white"
          loading={loading}
          size={10}
          cssOverride={LoaderStyle}
        />
      </div>

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
            margin="0 auto"
            sx={{
              width: width,
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
                onChange(value);
              }}
            />
          </Box>
        </Grid>

        <Grid item>
          <ImageUpload handleUpload={handleUpload} />
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
