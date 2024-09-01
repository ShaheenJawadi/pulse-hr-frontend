"use client";
import { StepperFormType } from "@/types/structureTypes";
import { Stack, Button, Step, StepLabel, Stepper } from "@mui/material";
import React from "react";

import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import SaveIcon from "@mui/icons-material/Save";
type StepperProps = {
  activeStep: number;
  handleNext: () => void;
  handleBack: () => void;
  handleSubmit: () => void;
  steps: StepperFormType[];
};

const SideStepper = (props: StepperProps) => {
  const { activeStep, handleBack, handleNext, handleSubmit, steps } = props;
  return (
    <Stack spacing={4} padding={5}>
      <Stepper orientation="vertical" activeStep={activeStep}>
        {steps.map((item, index) => {
          return (
            <Step key={index} completed={false}>
              <StepLabel optional={<></>}>{item.label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>

      <Stack direction={"row"} justifyContent={"space-between"}>
        <Button
          color="inherit"
          disabled={activeStep === 0}
          onClick={handleBack}
          sx={{ mr: 1 }}
          startIcon={<NavigateBeforeIcon />}
        >
          Retour
        </Button>

        {activeStep === steps.length - 1 ? (
          <Button startIcon={<SaveIcon />} onClick={handleSubmit}>
            Soumettre
          </Button>
        ) : (
          <Button type="submit" endIcon={<NavigateNextIcon />} onClick={handleNext}>
            Suivant
          </Button>
        )}
      </Stack>
    </Stack>
  );
};

export default SideStepper;
