import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import Button from '@mui/material/Button';
import StarOutlineIcon from '@mui/icons-material/StarOutline';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function App_Bio() {
  
  return (
      <Grid sx={{direction: "ltr" , height: "230px" , }} container spacing={2}>
   
        <Grid sm={10} xs={9} sx={{height: "140px"}}>
          <img style={{minWidth: 'auto', height: "auto" , float: 'left'}} src={require("./home/slide_appbar/Practical_Applications/bank_pub/Mellat.webp")} alt="image not found" />
          <h2 style={{float: 'left', color: 'black' , paddingLeft: " 20px"}}> Mellat Mobile <br/>
          <h10 style={{float: 'left' ,paddingTop: "13px" ,marginTop: "0px" , fontSize: "13px"}}>lorem ipsum </h10></h2>
        </Grid>

        <Grid  xs={2} sx={{paddingTop: '25px' , paddingRight: '0px', paddingLeft: '0px', marginLeft: "0px" }} >
        <Button sx={{ maxWidth: { md: "100%" , xs: "100px"} , height: "35px"}} variant="contained">Download</Button>

        </Grid>
   {/* $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ */}


        <Grid  xs={1.25} sx={{paddingTop: '5px' , paddingRight: '0px',marginRight: "15px" ,paddingLeft: '0px', marginLeft: "9px" }} >
        <Item sx={{ height: "50px" , bgcolor: '#f1f5f9' , float: 'left' }}>
        <p style={{color: "black" , display: "inline"}}> +3 M </p>
        Install
        </Item>
        </Grid>

        <Grid  xs={2.25} sx={{paddingTop: '5px' , height: '55px' , paddingRight: '0px', marginRight: "15px",paddingLeft: '0px', marginLeft: "0px" }} >
            <Item sx={{ height: "50px" ,bgcolor: '#f1f5f9'}}>
                <p style={{color: "black" , display: "inline" ,}}>4</p>
                <StarOutlineIcon sx={{fontSize: "17px" , position: "relative" , top: '3px'}}/><br/>
                  <p style={{color: "black" ,fontSize: '10px' ,display: "inline" ,}}>
                      From 15,999 Rates
                  </p>
            </Item>
        </Grid>

        <Grid  xs={1.75} sx={{paddingTop: '5px' , marginRight: "15px",paddingRight: '0px', paddingLeft: '0px', marginLeft: "0px" }} >
        <Item sx={{  height: "50px" ,bgcolor: '#f1f5f9'}}>
        <p style={{fontSize: '15px' ,display: "inline" ,}}>
          strategy
         </p><br/>
         app
        </Item>
        </Grid>

        <Grid  xs={1.5} sx={{paddingTop: '5px' ,paddingRight: '0px', paddingLeft: '0px', marginLeft: "0px" }} >
        <Item sx={{ height: "50px" ,bgcolor: '#f1f5f9'}}>
        <p style={{fontSize: '15px' ,display: "inline" ,}}>
          75 MB
         </p><br/>
         size
        </Item>
        </Grid>
      </Grid>
  );
}
