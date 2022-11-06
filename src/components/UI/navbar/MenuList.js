import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import "./nav.css";
import ss from "./bazaar-logo.svg"
export default function MenuList(props) {
  return (
    <>
      <Grid
        className={"download_bazaar"}
        sx={{ marginLeft: "0px", marginRight: "55px", marginTop: "17px" }}
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
        {/* <img src={require('./bazaar-logo.svg').default} alt='mySvgImage'  style={{maxWidth: '5vw', display: "inline-block"}}/> */}

      </Grid>
      <Grid
        className={"download_bazaar"}
        sx={{ marginLeft: "0px", marginRight: "0px", marginTop: "9px", paddingLeft: '0px' }}
        md={0.75}
      >
        <img src={require('./bazaar-logo.svg').default} alt='mySvgImage'  style={{maxWidth: '80%', display: "inline-block"}}/>
      </Grid>
    </>
  );
}
