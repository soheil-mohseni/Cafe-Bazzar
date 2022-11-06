import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import "./nav.css";
import Button from "@mui/material/Button";

export default function DownloadBazaar(props) {
  return (
    <Grid sx={{ marginTop: "10px", marginLeft: "0px" }} md={1.2}>
      <Button
        className="download_bazaar"
        style={{
          maxWidth: "100%",
          maxHeight: "100%",
          paddingRight: "0px",
          paddingLeft: "0px",
          marginTop: "0.1vmin",
          fontSize: "calc(1vmin + 0.7vh)",
          backgroundColor: "green",
        }}
        variant="contained"
      >
        Download Bazar
      </Button>
    </Grid>
  );
}
