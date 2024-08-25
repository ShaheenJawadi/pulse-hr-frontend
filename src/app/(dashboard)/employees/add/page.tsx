"use client";
import SideStepper from "@/components/form/StepperCom";
import PagerHeader from "@/components/listingPages/pageHeader";
import {
  PersonalInfo,
  ProfessionalInfo,
  AdditionalInfo,
} from "@/components/pages/employee/addForms";
import { StepperFormType } from "@/types/structureTypes";
import { Stack, Paper, Grid, Box, Divider, Typography } from "@mui/material";
import React from "react";

import WorkIcon from '@mui/icons-material/Work';
import InfoIcon from '@mui/icons-material/Info';
import ImportContactsIcon from '@mui/icons-material/ImportContacts';

const AddEmployeePage = () => {
  const [activeStep, setActiveStep] = React.useState(0);

  const steps: StepperFormType[] = [
    {
      label: "Informations Personnelles",
      componentPage: <PersonalInfo />,
      icon: <InfoIcon color="secondary" />,
    },

    {
      label: "Détails d'Emploi",
      componentPage: <ProfessionalInfo />,
      icon: <WorkIcon color="secondary" />,
    },
    {
      label: "Informations Complémentaires",
      componentPage: <AdditionalInfo />,
      icon: <ImportContactsIcon color="secondary" />,
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
              <Stack spacing={2} padding={4}>
                <Divider textAlign="left">
                    <Stack direction={"row"} alignItems={"center"} spacing={2}>
                        {steps[activeStep]?.icon}

                  <Typography variant="h5" color={"secondary"}>{steps[activeStep]?.label}</Typography>


                    </Stack>
                </Divider>

                {steps[activeStep]?.componentPage}
              </Stack>
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
