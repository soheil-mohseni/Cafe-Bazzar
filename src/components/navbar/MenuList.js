import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import "./nav.css";

export default function MenuList(props) {
  return (
    <>
      <Grid
        className={"download_bazaar"}
        sx={{ marginLeft: "0px", marginRight: "100px", marginTop: "17px" }}
        md={0.5}
      >
        <p
          style={{
            display: "inline",
            color: "rgb(118, 118, 118)",
            fontSize: "15px",
          }}
        >
          App
        </p>
      </Grid>

      <Grid
        className={"download_bazaar"}
        sx={{ marginLeft: "0px", marginRight: "10px", marginTop: "17px" }}
        md={0.5}
      >
        <p
          style={{
            display: "inline",
            color: "rgb(118, 118, 118)",
            fontSize: "15px",
          }}
        >
          Game
        </p>
      </Grid>

      <Grid
        className={"download_bazaar"}
        sx={{ marginLeft: "10px", marginRight: "10px", marginTop: "17px" }}
        md={0.5}
      >
        <p
          style={{
            display: "inline",
            color: "rgb(118, 118, 118)",
            fontSize: "15px",
          }}
        >
          Support
        </p>
      </Grid>

      <Grid
        className={"download_bazaar"}
        sx={{ marginLeft: "10px", marginRight: "10px", marginTop: "17px" }}
        md={1}
      >
        <p
          style={{
            display: "inline",
            color: "rgb(118, 118, 118)",
            fontSize: "15px",
          }}
        >
          Developers Panel
        </p>
      </Grid>

      <Grid
        className={"download_bazaar"}
        sx={{ marginLeft: "0px", marginRight: "10px", marginTop: "17px" }}
        md={1}
      >
        <p
          style={{
            display: "inline",
            color: "rgb(118, 118, 118)",
            fontSize: "15px",
          }}
        >
          Ads in Bazaar
        </p>
      </Grid>
    </>
  );
}
