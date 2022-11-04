import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { height } from "@mui/system";
import Divider from "@mui/material/Divider";

export default function ScrollableTabsButtonAuto() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

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
      }}
      style={{ bgcolor: "background.paper", direction: "ltr" }}
    >

      <p style={{ display: "inline-block", paddingLeft: "2%" }}>
        {" "}
        Apps shelf
      </p>


      <Divider
        light
        sx={{
          backgroundColor: "black",
          maxWidth: { md: "100%" },
          height: { xs: 5, md: 1 },
          marginBottom:'10px'
        }}
      />

      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons="auto"
        aria-label="scrollable auto tabs example"
        sx={{ maxWidth: { md: '100%' } }}
      >
        <Tab
          sx={{
            maxWidth: { md: 420 },
            height: "210px",
            textDecoration: "none",
          }}
          label={
            <img
              style={{
                maxWidth: { md: 4200 },
                paddingRight: "18px",
                borderRadius: "40px",
                height: "210px",
              }}
              src={require("./krafs.png")}
            />
          }
        />
        <Tab
          sx={{
            maxWidth: { md: 420 },
            height: "210px",
            textDecoration: "none",
          }}
          label={
            <img
              style={{
                maxWidth: { md: 4200 },
                paddingRight: "18px",
                borderRadius: "40px",
                height: "210px",
              }}
              src={require("./digipay.png")}
            />
          }
        />
        <Tab
          sx={{
            maxWidth: { md: 420 },
            height: "210px",
            textDecoration: "none",
          }}
          label={
            <img
              style={{
                maxWidth: { md: 4200 },
                paddingRight: "18px",
                borderRadius: "40px",
                height: "210px",
              }}
              src={require("./zarinplus.png")}
            />
          }
        />
        <Tab
          sx={{
            maxWidth: { md: 420 },
            height: "210px",
            textDecoration: "none",
          }}
          label={
            <img
              style={{
                maxWidth: { md: 4200 },
                paddingRight: "18px",
                borderRadius: "40px",
                height: "210px",
              }}
              src={require("./scanner.png")}
            />
          }
        />
        <Tab
          sx={{
            maxWidth: { md: 420 },
            height: "210px",
            textDecoration: "none",
          }}
          label={
            <img
              style={{
                maxWidth: { md: 4200 },
                paddingRight: "18px",
                borderRadius: "40px",
                height: "210px",
              }}
              src={require("./taxi.png")}
            />
          }
        />
        <Tab
          sx={{
            maxWidth: { md: 420 },
            height: "210px",
            textDecoration: "none",
          }}
          label={
            <img
              style={{
                maxWidth: { md: 4200 },
                paddingRight: "18px",
                borderRadius: "40px",
                height: "210px",
              }}
              src={require("./vivacut.png")}
            />
          }
        />
        <Tab
          sx={{
            maxWidth: { md: 420 },
            height: "210px",
            textDecoration: "none",
          }}
          label={
            <img
              style={{
                maxWidth: { md: 4200 },

                borderRadius: "40px",
                height: "210px",
              }}
              src={require("./sport.png")}
            />
          }
        />
      </Tabs>
    </Box>
  );
}
