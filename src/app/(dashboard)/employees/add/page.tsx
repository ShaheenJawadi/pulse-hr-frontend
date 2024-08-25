"use client";
import PagerHeader from "@/components/listingPages/pageHeader";
import {
  Stack,
  Paper,
  Grid,
  Box,
  Button,
  Step,
  StepLabel,
  Stepper,
  Typography,
  Container,
} from "@mui/material";
import React from "react";

const steps = [
  "Informations Personnelles",

  "Détails d'Emploi",
  "Informations Complémentaires",
];
const AddEmployeePage = () => {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    const nextStep =
      activeStep + 1 === steps.length ? activeStep : activeStep + 1;

    setActiveStep(nextStep);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSubmit = () => {
    alert("submitted");
  };

  return (
    <Stack spacing={3}>
      <PagerHeader title="Ajouter un employée" />

      <Box>
        <Grid container spacing={3}>
          <Grid item xs={8.5}>
            <Paper>
              <Box> {activeStep + 1}</Box>
            </Paper>
          </Grid>
          <Grid item xs={3.5}>
            <Paper>
              <SideStepper
                activeStep={activeStep}
                handleNext={handleNext}
                handleBack={handleBack}
                handleSubmit={handleSubmit}
              />
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Stack>
  );
};

type StepperProps = {
  activeStep: number;
  handleNext: () => void;
  handleBack: () => void;
  handleSubmit: () => void;
};

const SideStepper = (props: StepperProps) => {
  const { activeStep, handleBack, handleNext, handleSubmit } = props;
  return (
    <Box padding={5}>
      <Stepper orientation="vertical" activeStep={activeStep}>
        {steps.map((label, index) => {
          return (
            <Step key={label} completed={false}>
              <StepLabel optional={<></>}>{label}</StepLabel>
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
        >
          Retour
        </Button>

        {activeStep === steps.length - 1 ? (
          <Button onClick={handleSubmit}>Soumettre</Button>
        ) : (
          <Button onClick={handleNext}>Suivant</Button>
        )}
      </Stack>
    </Box>
  );
};

export default AddEmployeePage;
