import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import bazaarlogo from "./bazaar-logo.svg";
import MenuItem from "@mui/material/MenuItem";
import { styled, alpha } from "@mui/material/styles";
import Menu from '@mui/material/Menu';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Fullscreen } from "@mui/icons-material";



const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    {...props}
  />

))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color:
      theme.palette.mode === "light"
        ? "rgb(55, 65, 81)"
        : theme.palette.grey[300],
    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    "& .MuiMenu-list": {
      padding: "4px 0",
    },
    "& .MuiMenuItem-root": {
      "& .MuiSvgIcon-root": {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      "&:active": {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity
        ),
      },
    },
  },
}));



function BazaarMenu() {

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };


  return (
    <div>
    <Box sx={{ flexGrow: 1, backgroundColor: "white" ,position:"fixed", width:"1527px", paddingRight:"0px", paddingLeft:"0px"}}>
      <AppBar position="static">
        <Toolbar sx={{ backgroundColor: "white" }}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            id="demo-customized-button"
            aria-haspopup="true"
            variant="contained"
            disableElevation
            onClick={handleClick}
            sx={{ mr: 2, color: "black" , paddingLeft: "25px"}}
          >
            <MenuIcon />
          </IconButton>

          <Box
      sx={{
                width: 150,
                height: 45,
                backgroundColor: 'primary.dark',
                '&:hover': {
                backgroundColor: 'primary.main',
                opacity: [0.9, 0.8, 0.7],
         },
         }}
        >
           <p style={{paddingRight: "20px"}}> Download Bazaar </p>
        </Box>


            <AccountCircleIcon sx={{color:"black" , marginRight: "10px", fontSize: "30px"}}/>


          <TextField
          id="filled-search"
          label= {<SearchIcon/>}
          type="search"
          variant="filled"
          placeholder="Search Google Maps"
          inputProps={{ 'aria-label': 'search google maps' }}
          sx={{ marginRight:"11px", height:"5px", marginBottom: "55px" , borderRadius: "10 0px" }}
        />

     
{/* ################## menu */}

          <StyledMenu
            id="demo-customized-menu"
            MenuListProps={{
              "aria-labelledby": "demo-customized-button",
            }}
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose} disableRipple> خوش آمدید</MenuItem>
          </StyledMenu>

          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, color: "black" , textAlign: "left" , display: "inline"}}
          >

            <p style={{display:"inline-block",fontSize: "1rem"}}>Ads in Bazar </p>
            <p style={{display:"inline-block",paddingRight: "40px",fontSize: "1rem"}}>Developer Panel</p> 
            <p style={{display:"inline-block",paddingRight: "40px",fontSize: "1rem"}}>Support</p> 
            <p style={{display:"inline-block",paddingRight: "40px",fontSize: "1rem"}}>Game</p> 
            <p style={{display:"inline-block" , marginLeft: "100px" ,paddingRight: "40px" ,fontSize: "1rem"}}> App </p> 
    
          </Typography>
          


           <Button color="inherit">
            <img style={{with: "100px" , height:"55px"}} src={bazaarlogo} alt="bazaar-logo.svg" />
          </Button>


        </Toolbar>
      </AppBar>

    </Box>
    </div>
  );
}
export default BazaarMenu;