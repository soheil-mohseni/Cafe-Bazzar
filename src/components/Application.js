import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import { Breadcrumbs } from "@mui/material";
import Breadcrumb from "./Breadcrumb";
import App_Bio from "./App_Bio";
import Bio from "./Bio";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function Application() {
  return (
    <Box sx={{ flexGrow: 1, marginTop: "100px" , direction: "ltr"}}>
      <Grid
        sx={{ marginLeft: "1%", marginRight: "1%" }}
        container
        spacing={2}
      >
        <Grid xs={14}>
          <Item sx={{ height: "40px" }}>
            <Breadcrumb />
          </Item>
        </Grid>

        <Grid xs={12} md={6}>
          <Item>
            <App_Bio />
          </Item>
        </Grid>
        <Grid xs={12} md={6}>

        <Bio></Bio>
        
        </Grid>

        <Grid xs={6} md={8}>
          <Item>xs=6 md=8</Item>
        </Grid>
      </Grid>
    </Box>
  );
}
