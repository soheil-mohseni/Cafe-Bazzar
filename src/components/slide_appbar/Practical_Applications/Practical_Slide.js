import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import ActionAreaCard from "./Practical_Card";
import { Practical_imgs } from "./practical_list_img";
import { Bank_imgs } from "./bank_list_img"
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { title_appbar } from "./title_appbar";
import { virus_imgs } from "./virus_list"; 
import { podcast_imgs } from "./podcast_list";

export default function Practical() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  
  const img_bar =[Practical_imgs,Bank_imgs ,virus_imgs, podcast_imgs]

  return (
    <div>
  {img_bar.map((imgs,index) => (

    <Box
    key={Math.random()}
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
        {title_appbar[index].title}
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
            {imgs.map((imge) => (
                       
                    <Tab
                    key={imge.urls}
                      label={
                        <ActionAreaCard
                          urls={imge.urls}
                          title={imge.title}
                          subtitle={imge.subtitle}
                        />
                      }
                      />
            ))}     

      </Tabs>
    </Box>
    ))}
    </div>
  );
}
