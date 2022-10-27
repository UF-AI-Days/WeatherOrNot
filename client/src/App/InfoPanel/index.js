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

const testData1 = [0, 8, 17, 20];
const testData2 = [0, 0.8, 1.2, 2.7];
const testData3 = [0, 68000, 74000, 93000];
const testData4 = [1, 3.2, 4, 7];
const testData5 = [0, 12, 17, 23];
const testData6 = [4, 8, 12, 16];

const years = ["2022", "2032", "2042", "2052"];
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
      setYear(years[Math.trunc(index)]);
    }
  };

  const onUpload = (data) => {
    console.log(data);
    setLocation("Florida");
    setYear("2022");
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
              <StatBox
                data={createData(
                  0,
                  testData1,
                  index,
                  "Sea Level Rise",
                  "inches"
                )}
                index={index}
              />
            </Grid>
            <Grid item>
              <StatBox
                data={createData(
                  1,
                  testData2,
                  index,
                  "Temperature Increase",
                  "°F"
                )}
                index={index}
              />
            </Grid>
            <Grid item>
              <StatBox
                data={createData(
                  2,
                  testData3,
                  index,
                  "Natural Disasters",
                  "major disasters"
                )}
                index={index}
              />
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
              <StatBox
                data={createData(
                  3,
                  testData4,
                  index,
                  "Impact to Economy",
                  "trillion"
                )}
                index={index}
              />
            </Grid>
            <Grid item>
              <StatBox
                data={createData(4, testData5, index, "Gini Index (U.S.)", "%")}
                index={index}
              />
            </Grid>
            <Grid item>
              <StatBox
                data={createData(
                  5,
                  testData6,
                  index,
                  "Productivity Decrease",
                  "%"
                )}
                index={index}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default InfoPanel;
