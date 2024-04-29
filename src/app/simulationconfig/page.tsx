"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { Fullscreen } from "@mui/icons-material";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { useDemoData } from "@mui/x-data-grid-generator";
import { FormControlLabel, Radio, useMediaQuery } from "@mui/material";
import RadioGroup from "@mui/material/RadioGroup";
import FormControl from "@mui/material/FormControl";
import StepOneItems from "../components/SteponeItems";
import StepTwoItems from "../components/SteptwoItems";
import StepThreeItems from "../components/StepthreeItems";
import StepFourthItems from "../components/StepfourthItems";
import StepFifthItems from "../components/StepfifthItems";
const steps = [
  "Select Creation Mode",
  "Add Rating Weights",
  "Add Exponential Weights",
  "Add Quality Weights",
  "Add Other Parameters",
];

function SimulationConfig() {
  const { data } = useDemoData({
    dataSet: "Commodity",
    rowLength: 1,
    maxColumns: 1,
  });

  const [value, setValue] = React.useState("1");
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  const handleReset = () => {
    setActiveStep(0);
  };
  const isXsScreen = useMediaQuery("(max-width:600px)");

  return (
    <Box
      sx={{
        display: { xs: "flex", md: "flex" },
        backgroundColor: "#D6D6D4",
        justifyContent: "center",
        padding: "40px",
        width: { sm: "100%" },
        height: "auto",
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
              onChange={handleChange}
              centered
              sx={{
                display: "flex",
                width: "100%",
                justifyContent: "space-around",
              }}
              aria-label="lab API tabs example"
            >
              <Tab
                label="Create"
                sx={{
                  minWidth: "50%",
                }}
                value="1"
              />
              <Tab
                label="View"
                sx={{
                  minWidth: "50%",
                }}
                value="2"
              />
            </TabList>
          </Box>
          <TabPanel value="1">
            {/* stepper for item one  */}
            <Box
              sx={{
                backgroundColor: "white",
              }}
            >
              <Box>
                <Stepper
                  sx={{
                    marginTop: "2rem",
                    display: {
                      xs: "grid",
                      sm: isXsScreen ? "grid" : "flex",
                    },
                  }}
                  activeStep={activeStep}
                  alternativeLabel
                  orientation={isXsScreen ? "vertical" : "horizontal"}
                >
                  {steps.map((label) => (
                    <Step key={label}>
                      <StepLabel>{label}</StepLabel>
                    </Step>
                  ))}
                </Stepper>
              </Box>
              {/* reset button */}
              {activeStep === steps.length && (
                <>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "start",
                      marginTop: "2rem",
                      color: "green",
                    }}
                  >
                    All Steps Completed !
                  </Box>
                  <Button
                    sx={{
                      display: "flex",
                      justifyContent: "start",
                    }}
                    variant="outlined"
                    onClick={handleReset}
                  >
                    {" "}
                    Reset
                  </Button>
                </>
              )}
              {/* reset button ends */}
              <Box sx={{ marginTop: "4rem" }}>
                <Typography sx={{ fontWeight: "600" }}>
                  Current Version -1.0
                </Typography>

                {activeStep === 0 && <StepOneItems />}
                {activeStep === 1 && <StepTwoItems />}
                {activeStep === 2 && <StepThreeItems />}
                {activeStep === 3 && <StepFourthItems />}
                {activeStep === 4 && <StepFifthItems />}

                <Box
                  sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "start",
                    gap: "8px",
                    mt: 5,
                  }}
                >
                  <Button
                    sx={{ border: "1px solid" }}
                    disabled={activeStep === 0}
                    onClick={handleBack}
                  >
                    Back
                  </Button>

                  {activeStep === steps.length - 1 ? (
                    <>
                      <Box
                        sx={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}
                      >
                        <Button variant="contained" onClick={handleNext}>
                          SAVE SIMULATION CONFIG
                        </Button>
                        <Button variant="contained" onClick={handleNext}>
                          SAVE & TRIGGER SIMULATION CONFIG
                        </Button>
                      </Box>
                    </>
                  ) : (
                    <>
                      <Button
                        variant="contained"
                        onClick={handleNext}
                        disabled={activeStep === steps.length}
                      >
                        Next
                      </Button>
                      <Button variant="contained">CANCEL</Button>
                    </>
                  )}
                </Box>
              </Box>{" "}
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
      </Box>
    </Box>
  );
}

export default SimulationConfig;
