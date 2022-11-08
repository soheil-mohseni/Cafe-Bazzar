import * as React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Unstable_Grid2";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import AttractionsIcon from "@mui/icons-material/Attractions";
import SchoolIcon from "@mui/icons-material/School";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import VideoCameraFrontIcon from '@mui/icons-material/VideoCameraFront';
import CreditScoreIcon from '@mui/icons-material/CreditScore';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function Collections() {
  return (
    <Box
      sx={{
        maxWidth: { xs: "90%", md: 1900 },
        bgcolor: "white",
        direction: "ltr",
        borderColor: "black",
        border: "2px",
        marginTop: "20px",
        marginRight: { md: "15%", xs: "5%" },
        marginLeft: { md: "15%", xs: "5%" },
        borderBottomLeftRadius: "30PX",
        borderBottomRightRadius: "30PX",
        marginBottom: '60px'
      }}
    >
      <p style={{ display: "inline-block", paddingLeft: "2%" }}>
        {" "}
        App Categories
      </p>

      <Divider
        light
        sx={{
          backgroundColor: "black",
          maxWidth: { md: "100%" },
          height: { xs: 1, md: 1 },
          marginBottom: "10px",
        }}
      />

      <Grid container rowSpacing={1.25} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid sm={6} xs={13} md={4}>
        <ChevronRightIcon
            sx={{
              display: "inline",
              float: "right",
              paddingTop: "13px",
              paddingRight: "20px",
            }}
          />
          <Item
            sx={{
              bgcolor: "whitesmoke",
              paddingBottom: "9px",
              paddingTop: "8px",
              paddingRight: "55%",
            }}
          >
            <AttractionsIcon />
            Entertainment
          </Item>
        </Grid>
        <Grid xs={15} sm={6} md={4}>
        <ChevronRightIcon
            sx={{
              display: "inline",
              float: "right",
              paddingTop: "13px",
              paddingRight: "20px",
            }}
          />
          <Item
            sx={{
              bgcolor: "whitesmoke",
              paddingBottom: "9px",
              paddingTop: "8px",
              paddingRight: "55%",
            }}
          >
            <SchoolIcon sx={{ paddingRight: "11px" }} />
            Education
          </Item>
        </Grid>
        <Grid xs={15} sm={6} md={4}>
          <ChevronRightIcon
            sx={{
              display: "inline",
              float: "right",
              paddingTop: "13px",
              paddingRight: "20px",
            }}/>
          <Item
            sx={{
              bgcolor: "whitesmoke",
              paddingBottom: "9px",
              paddingTop: "10px",
              paddingRight: "55%",
            }}
          >
            <LocalGroceryStoreIcon sx={{ paddingRight: "11px" }} />
            Shopping
          </Item>
          
        </Grid>
        <Grid xs={15} sm={6} md={4}>
        <ChevronRightIcon
            sx={{
              display: "inline",
              float: "right",
              paddingTop: "13px",
              paddingRight: "20px",
            }}/>
          <Item
            sx={{
              bgcolor: "whitesmoke",
              paddingBottom: "9px",
              paddingTop: "10px",
              paddingRight: "55%",
            }}
          >
            <ConnectWithoutContactIcon sx={{ paddingRight: "11px" }} />
            Social
          </Item>
        </Grid>
        <Grid xs={15} sm={6} md={4}>
        <ChevronRightIcon
            sx={{
              display: "inline",
              float: "right",
              paddingTop: "13px",
              paddingRight: "20px",
            }}/>
          <Item
            sx={{
              bgcolor: "whitesmoke",
              paddingBottom: "9px",
              paddingTop: "10px",
              paddingRight: "55%",
            }}
          >
            <VideoCameraFrontIcon sx={{ paddingRight: "11px" }} />
            PhotoGraphy
          </Item>
        </Grid>
        <Grid xs={15} sm={6} md={4}>
        <ChevronRightIcon
            sx={{
              display: "inline",
              float: "right",
              paddingTop: "13px",
              paddingRight: "20px",
            }}/>
          <Item
            sx={{
              bgcolor: "whitesmoke",
              paddingBottom: "9px",
              paddingTop: "10px",
              paddingRight: "55%",
            }}
          >
            <CreditScoreIcon sx={{ paddingRight: "11px" }} />
            Finance
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
