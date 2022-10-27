import React from "react";
import IconButton from "@mui/material/IconButton";
import Grid from "@mui/material/Grid";
import InfoIcon from "@mui/icons-material/Info";
import CodeIcon from "@mui/icons-material/Code";
import "./index.scss";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const returnHome = () => {
    navigate("/");
  };

  return (
    <div>
      <div className="PhantomHeader" />
      <div className="Header">
        <Grid
          container
          alignItems="center"
          justifyContent="center"
          sx={{ minHeight: "100%" }}
        >
          <Grid
            item
            xs={6}
            sx={{
              padding: "0 2rem",
            }}
          >
            <Grid item>
              <h1 className="Title" onClick={returnHome}>
                Untitled
              </h1>
            </Grid>
          </Grid>

          <Grid item xs={6}>
            <Grid
              container
              sx={{
                justifyContent: "flex-end",
                padding: "0 2rem",
              }}
            >
              <Grid item>
                <IconButton>
                  <InfoIcon sx={{ color: "white" }} />
                </IconButton>
              </Grid>
              <Grid item>
                <a
                  href="https://github.com/UF-AI-Days/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <IconButton>
                    <CodeIcon sx={{ color: "white" }} />
                  </IconButton>
                </a>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Header;
