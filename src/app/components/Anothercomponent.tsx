import * as React from "react";
import Box from "@mui/material/Box";
import { Button, useMediaQuery } from "@mui/material";
import TextField from "@mui/material/TextField";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import LanverStepOne from "./Landingstepone";
import StepTwoItems from "./SteptwoItems";
import LaneverStepTwo from "./Landingsteptwo";
import LaneverStepThree from "./Landingstepthree";
import LaneverStepFourth from "./Landingstepfourth";
import LanverStepFifth from "./Landingstepfifth";

const steps = [
  "Add Category Detail",
  "Add Category Type",
  "Add Essay Type",
  "Add Query Info",
  "Preview Query",
  "Add Display BreakUp",
];
function AnotherComponent() {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };
  const isXsScreen = useMediaQuery("(max-width:600px)");

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "start",
          justifyItems: "start",
          fontWeight: 500,
          marginTop: "2rem",
        }}
      >
        Current Version - 1
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyItems: "center",
          flexWrap: "wrap",
          justifyContent: "center",
          marginTop: "1rem",
          gap: "2rem",
        }}
      >
        <Button
          sx={{
            paddingX: 3,
            marginRight: "1rem",
            backgroundColor: "#D6D6D4",
          }}
          variant="contained"
        >
          SAVE LANDING PAGE CONFIG
        </Button>
        <Button
          sx={{
            paddingX: 3,
            backgroundColor: "#D6D6D4",
          }}
          variant="contained"
        >
          SAVE LANDING AND TRIGGER SIMULATIONS{" "}
        </Button>
      </Box>
      <Box
        sx={{
          color: "#074A36",
          fontWeight: 500,
          marginTop: "2rem",
          display: "flex",
          marginLeft: { sm: "6rem" },
          justifyContent: { xs: "center", sm: "start" },
        }}
      >
        ADD A PAGE
      </Box>
      <Box
        component="form"
        sx={{ "& > :not(style)": { m: 1, width: "15ch" }, marginTop: "4rem" }}
        noValidate
        autoComplete="off"
      >
        <TextField id="standard-basic" label="Page Id" variant="standard" />
        <TextField id="standard-basic" label="Page Name" variant="standard" />
        <TextField id="standard-basic" label="DFI" variant="standard" />
        <TextField
          id="standard-basic"
          label="Page Content"
          variant="standard"
        />
        <Button
          sx={{
            border: "1px solid ",
          }}
        >
          ADD CATEGORY
        </Button>
        <Button
          sx={{
            border: "1px solid ",
          }}
        >
          SAVE PAGE
        </Button>
        <Button
          sx={{
            border: "1px solid ",
          }}
        >
          REMOVE PAGE
        </Button>
      </Box>

      {/* stepper */}
      <Box sx={{ width: "100%", marginTop: "4rem" }}>
        <Stepper
          activeStep={activeStep}
          sx={{
            marginTop: "2rem",
            display: {
              xs: "grid",
              sm: isXsScreen ? "grid" : "flex",
            },
          }}
          alternativeLabel
          orientation={isXsScreen ? "vertical" : "horizontal"}
        >
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
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

        {activeStep === 0 && <LanverStepOne />}
        {activeStep === 1 && <LaneverStepTwo />}
        {activeStep === 2 && <LaneverStepThree />}
        {activeStep === 3 && <LaneverStepFourth />}
        {activeStep === 4 && <LanverStepFifth />}
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
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
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
      </Box>
    </Box>
  );
}
export default AnotherComponent;
