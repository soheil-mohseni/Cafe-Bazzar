import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import { isVisible } from '@testing-library/user-event/dist/utils';
import "./nav.css"
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import PersonIcon from '@mui/icons-material/Person';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function BasicGrid() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container sx={{backgroundColor: "red" , height: "68px",maxWidth: "100%", margin: "0px"}} spacing={1}>
        <Grid className= "xs" md={0.25} sx={{marginRight:"170px" , marginLeft: "20px" , marginTop: "10px"}}>
          <MenuIcon sx={{ fontSize: "35px"}}/>
        </Grid>
        <Grid sx={{marginTop: "10px" , marginLeft: "0px"}} md={2.75}>
            <Button style={{maxWidth: "100px",paddingRight: "0px", paddingLeft: "0px"}} variant="contained">Download Bazar</Button>
        </Grid>
        <Grid sx={{marginLeft:"110px" , marginRight:"111px"}}  md={1}>
          <PersonIcon sx={{fontSize: "30px" , paddingTop: "15px", }}/>
        </Grid>
        <Grid md={2}>
          <Item>xs=8</Item>
        </Grid>
      </Grid>
    </Box>
  );
}
