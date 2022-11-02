import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import ActionAreaCard from "./Practical_Card";
import { imgs } from "./practical_list_img";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

export default function Practical() {
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
    >
      <p style={{ display: "inline-block", paddingLeft: "2%" }}>
        {" "}
        Practical Applications
      </p>
      <ChevronRightIcon
        sx={{
          display: "inline",
          float: "right",
          paddingTop: "14px",
          paddingRight: "20px",
        }}
      />
      <p style={{ display: "inline-block", float: "right" }}> More </p>

      <Divider
        light
        sx={{
          backgroundColor: "black",
          maxWidth: { md: "100%" },
          height: { xs: 5, md: 1 },
        }}
      />
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons
        allowScrollButtonsMobile
        aria-label="scrollable force tabs example"
      >
        {imgs.map((imgs) => (
          <div key={imgs.urls}>
            <Tab
              label={
                <ActionAreaCard
                  urls={imgs.urls}
                  title={imgs.title}
                  subtitle={imgs.subtitle}
                />
              }
            />
          </div>
        ))}
      </Tabs>
    </Box>
  );
}
