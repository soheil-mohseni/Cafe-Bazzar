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
        height: "80%",
        marginTop: "10px",
        display: "inline-block",
      }}
    >
      <button type="submit" style={{display: 'inline-block',margin: '0px',padding: '0px',float: "left" , borderColor: "white" ,border: "0px", backgroundColor: 'white' , paddingTop: '8px'}}>
      <SearchIcon
        sx={{
          float: "right",
          paddingLeft: "0px",
          paddingTop: "0px",
          paddingRight: "0px",
          color: "rgb(118, 118, 118)",
        }}
      />
      </button>
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
