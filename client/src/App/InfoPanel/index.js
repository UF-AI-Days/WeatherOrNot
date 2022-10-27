import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import ImageSlider from "./ImageSlider";
import StatBox from "./StatBox";
import "./index.scss";

const colors = [
  "#5fa55a",
  "#01b4bc",
  "#f6d51f",
  "#fa8925",
  "#fa5457",
  "#a55fa5",
];

const testData = [5, 10, 15, 20];
const years = ["2022", "2027", "2032", "2037"];
const createData = (
  colorIndex,
  data,
  index,
  title = "Example",
  units = "units"
) => {
  return {
    title: title,
    units: units,
    labels: years,
    datasets: [
      {
        data: data.slice(0, index + 1),
        borderColor: colors[colorIndex],
      },
    ],
  };
};

const InfoPanel = ({ imageWidth, imageHeight }) => {
  const [index, setIndex] = useState(-1);
  const [location, setLocation] = useState("");
  const [year, setYear] = useState("");

  const onChange = (index) => {
    if (index != 0) {
      setIndex(index);
      setYear(index);
    }
  };

  const onUpload = (data) => {
    console.log(data);
    setLocation("Florida");
    setLocation("2027");
  };

  return (
    <div className="Info">
      <Grid
        container
        direction="row"
        wrap="nowrap"
        justifyContent="center"
        sx={{ height: "100%" }}
      >
        <Grid
          item
          xs={3}
          mt={-3}
          sx={{
            height: "100%",
          }}
        >
          <Grid
            container
            direction="column"
            justifyContent="center"
            spacing={2}
            sx={{ height: "100%" }}
          >
            <Grid item>
              <StatBox data={createData(0, testData, index)} index={index} />
            </Grid>
            <Grid item>
              <StatBox data={createData(1, testData, index)} index={index} />
            </Grid>
            <Grid item>
              <StatBox data={createData(2, testData, index)} index={index} />
            </Grid>
          </Grid>
        </Grid>

        <Grid
          item
          xs={5}
          mt={-7}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100%",
            padding: "0 3rem",
          }}
        >
          <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
            sx={{
              height: "100%",
            }}
            spacing={4}
          >
            <Grid className="Sticky" item>
              <h1 className="Location">
                {location == ""
                  ? "Please Upload Image"
                  : `${location}, ${year}`}
              </h1>
            </Grid>
            <Grid item>
              <ImageSlider
                width={imageWidth}
                height={imageHeight}
                onChange={onChange}
                onUpload={onUpload}
              ></ImageSlider>
            </Grid>
          </Grid>
        </Grid>

        <Grid
          item
          xs={3}
          mt={-3}
          sx={{
            height: "100%",
          }}
        >
          <Grid
            container
            direction="column"
            justifyContent="center"
            spacing={2}
            sx={{ height: "100%" }}
          >
            <Grid item>
              <StatBox data={createData(3, testData, index)} index={index} />
            </Grid>
            <Grid item>
              <StatBox data={createData(4, testData, index)} index={index} />
            </Grid>
            <Grid item>
              <StatBox data={createData(5, testData, index)} index={index} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default InfoPanel;
