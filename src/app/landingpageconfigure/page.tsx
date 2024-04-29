"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Button from "@mui/material/Button";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { useDemoData } from "@mui/x-data-grid-generator";
import { SelectChangeEvent } from "@mui/material/Select";
import SelectSecondRadio from "../components/SelectonsecondRadio";
import SelectThirdRadio from "../components/SelectthirdRadio";

export default function LandingPageConfig() {
  const [radioValue, setRadioValue] = React.useState("radiobuttonone");

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRadioValue(event.target.value);
  };
  const [value, setValue] = React.useState("1");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  const { data } = useDemoData({
    dataSet: "Commodity",
    rowLength: 1,
    maxColumns: 1,
  });

  return (
    <Box
      sx={{
        display: { xs: "flex" },
        backgroundColor: "#D6D6D4",
        justifyContent: "center",
        padding: "30px",
        width: { sm: "100%" },
        height: "2250px",
      }}
    >
      <Box
        sx={{
          backgroundColor: "white",
          width: "95%",
          maxWidth: 1400,
          padding: 3,
          marginTop: "3rem",
          height: "auto",
        }}
      >
        <TabContext value={value}>
          <Box
            sx={{
              borderBottom: 1,
              borderColor: "divider",
              backgroundColor: "white",
            }}
          >
            <TabList
              sx={{
                display: "flex",
                width: "100%",
                justifyContent: "space-around",
              }}
              centered
              onChange={handleChange}
              aria-label="lab API tabs example"
            >
              <Tab
                label="Create"
                sx={{
                  display: "flex",
                  minWidth: "50%",
                }}
                value="1"
              />
              <Tab
                label="View"
                sx={{
                  display: "flex",
                  minWidth: "50%",
                }}
                value="2"
              />
            </TabList>
          </Box>
          <TabPanel value="1">
            {/* stepper for item one  */}
            <FormControl
              sx={{
                display: "flex",
                justifyContent: "center",
                justifyItems: "center",

                alignItems: "center",
                marginTop: "4rem",
              }}
            >
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
                value={radioValue}
                onChange={handleRadioChange}
              >
                <FormControlLabel
                  value="radiobuttonone"
                  control={<Radio />}
                  label="Add New Config"
                />
                <FormControlLabel
                  value="radiobuttontwo"
                  control={<Radio />}
                  label="Add From Existing Config"
                />
                <FormControlLabel
                  value="radiobuttonthree"
                  control={<Radio />}
                  label="Edit From Existing Config"
                />
              </RadioGroup>
            </FormControl>

            {radioValue === "radiobuttontwo" && <SelectSecondRadio />}
            {radioValue === "radiobuttonthree" && <SelectThirdRadio />}
            <Box sx={{ display: "flex", justifyContent: "start" }}>
              <Button
                sx={{
                  paddingX: 3,
                  marginTop: "2rem",
                }}
                variant="contained"
              >
                Next
              </Button>
            </Box>
          </TabPanel>
          <TabPanel value="2">
            {/* second item */}
            <div style={{ height: 400, width: "100%" }}>
              <DataGrid
                {...data}
                slots={{
                  toolbar: GridToolbar,
                }}
              />
            </div>
          </TabPanel>
        </TabContext>
      </Box>{" "}
    </Box>
  );
}
