import React, { useState, useEffect } from "react";
import InfoPanel from "../InfoPanel";
import "./index.scss";
import Button from "@mui/material/Button";

const Home = () => {
  return (
    <div className="Home">
      <InfoPanel imageWidth={400} imageHeight={400}></InfoPanel>
    </div>
  );
};

export default Home;
