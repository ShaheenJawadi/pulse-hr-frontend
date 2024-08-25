"use client";
import SideStepper from "@/components/form/StepperCom";
import PagerHeader from "@/components/listingPages/pageHeader";
import { PersonalInfo, ProfessionalInfo, AdditionalInfo } from "@/components/pages/employee/addForms";
import { StepperFormType } from "@/types/structureTypes";
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
const AddEmployeePage = () => {
  const [activeStep, setActiveStep] = React.useState(0);

  const steps: StepperFormType[] = [
    {
      label: "Informations Personnelles",
      componentPage: <PersonalInfo />,
    },

    {
      label: "Détails d'Emploi",
      componentPage: <ProfessionalInfo />,
    },
    {
      label: "Informations Complémentaires",
      componentPage: <AdditionalInfo />,
    },
  ];

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
              <Box> {steps[activeStep]?.componentPage}</Box>
            </Paper>
          </Grid>
          <Grid item xs={3.5}>
            <Paper>
              <SideStepper
                steps={steps}
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

export default AddEmployeePage;
