import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

export default function ActionAreaCard(props) {
  return (
    <Card sx={{ maxWidth: 100, backgroundColor: "white" }}>
      <CardActionArea>
        <img style={{ maxWidth: 100 }} src={require(`${props.urls}`)}  />

        <CardContent sx={{ paddingTop: "0px", paddingBottom: "25px" }}>
          <Typography gutterBottom variant="h8" component="div">
            {props.title}
          </Typography>
          <Typography variant="body100">{props.subtitle}</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
