import * as React from "react";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
export default function Search() {
  return (
    <TextField
      id="filled-search"
      label={<SearchIcon />}
      type="search"
      variant="filled"
      placeholder="Search in Bazaar"
      sx={{
        backgroundColor: "white",
        borderRadius: "10px",
        width: "100%",
        height: "100%",
      }}
    />
  );
}
