import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Unstable_Grid2';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Divider from "@mui/material/Divider";
import AttractionsIcon from '@mui/icons-material/Attractions';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function Collections() {






  return (
    <Box sx={{          maxWidth: { xs: "90%", md: 1900 },
    bgcolor: "white",
    direction: "ltr",
    borderColor: "black",
    border: "2px",
    marginTop: "20px",
    marginRight: { md: "15%", xs: "5%" },
    marginLeft: { md: "15%", xs: "5%" },
    borderBottomLeftRadius: "30PX",
    borderBottomRightRadius: "30PX",}}>

       <p style={{ display: "inline-block", paddingLeft: "2%"}}>
        {" "}
        App Categories 
      </p>


      <Divider
        light
        sx={{
          backgroundColor: "black",
          maxWidth: { md: "100%" },
          height: { xs: 1, md: 1 },
          marginBottom:'10px'
        }}
      />


      <Grid container rowSpacing={0.5} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid  sm={6} xs={13} md={4}>
            
          <Item sx={{bgcolor: 'whitesmoke' ,  paddingRight: '55%' ,}} onMouseOver={{itemhandlerin}}>
          <AttractionsIcon sx={{possition:"relative"}} />
             Entertainment
            </Item>
        </Grid>
        <Grid xs={15} sm={6} md={4}>
          <Item sx={{bgcolor: 'whitesmoke'}}>2</Item>
        </Grid>
        <Grid xs={15} sm={6} md={4}>
          <Item sx={{bgcolor: 'whitesmoke'}}>3</Item>
        </Grid>
        <Grid xs={15} sm={6} md={4}>
          <Item sx={{bgcolor: 'whitesmoke'}}>4</Item>
        </Grid>
        <Grid xs={15} sm={6} md={4}>
          <Item sx={{bgcolor: 'whitesmoke'}}>4</Item>
        </Grid>
        <Grid xs={15} sm={6} md={4}>
          <Item sx={{bgcolor: 'whitesmoke'}}>4</Item>
        </Grid>

      </Grid>
    </Box>
  );
}
