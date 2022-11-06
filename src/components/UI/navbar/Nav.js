import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import MenuIcon from "@mui/icons-material/Menu";
import PersonIcon from "@mui/icons-material/Person";
import Search from "../Search";
import "./nav.css";
import MenuList from "./MenuList";
import "./nav.css";
import DownloadBazaar from "./DownloadBazaar";
import Search2 from "../Search2";
import "./nav.css";

export default function Nav() {
  return (
    <Box
      sx={{ flexGrow: 1, maxWidth: "100%", maxHeight: "100%" }}
      md={{ flexGrow: 1, maxWidth: "100%", maxHeight: "100%" }}
    >
      <Grid
        container
        sx={{
          backgroundColor: "white",
          height: "68px",
          maxWidth: "100%",
          margin: "0px",
        }}
        spacing={2}
      >
        <Grid
          className="xs"
          xs={1.5}
          md={1.25}
          sx={{ marginLeft: "20px", marginTop: "10px", marginLeft: "0px" }}
        >
          <MenuIcon sx={{ fontSize: "35px", float: "left" }} />
        </Grid>

        <DownloadBazaar />

        <Grid sx={{ marginLeft: "0px", marginRight: "0px" }} md={0.35}>
          <PersonIcon sx={{ fontSize: "30px", paddingTop: "15px" }} />
        </Grid>

        <Grid
          className="download_bazaar"
          sx={{ marginLeft: "0px", marginRight: "0px" }}
          md={3.2}
        >
          <Search2 />
        </Grid>

        <Grid
          className="search_bazaar"
          sx={{ marginLeft: "0px", marginRight: "0px" }}
          xs={6.75}
        >
          <Search />
        </Grid>

        <MenuList />
      </Grid>
    </Box>
  );
}
