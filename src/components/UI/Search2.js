import { Label } from "@mui/icons-material";
import SearchIcon from "@mui/icons-material/Search";

function Search2() {
  return (
    <div
      className={"download_bazaar"}
      style={{
        maxWidth: "228px",
        backgroundColor: "white",
        borderRadius: "10px",
        width: "100%",
        height: "90%",
        marginTop: "10px",
        display: "inline-block",
      }}
    >
      <SearchIcon
        sx={{
          float: "left",
          paddingLeft: "6px",
          paddingTop: "6px",
          paddingRight: "6px",
          color: "rgb(118, 118, 118)",
        }}
      />
      <input
        type="text"
        placeholder="Search in Bazaar"
        style={{
          backgroundColor: "white",
          border: "none",
          direction: "ltr",
          marginTop: "10px",
          borderColor: "white",
        }}
      />
    </div>
  );
}

export default Search2;
