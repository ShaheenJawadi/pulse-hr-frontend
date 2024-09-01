"use client";
import PagerHeader from "@/components/listingPages/pageHeader";
import { InputField } from "@/components/utils/InputField";
import { SelectField } from "@/components/utils/SelectField";
import { SelectDataTypes } from "@/types/structureTypes";
import {
  Stack,
  Box,
  Grid,
  Paper,
  Button,
  Typography,
  IconButton,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import SaveIcon from "@mui/icons-material/Save";
import QuillEditor from "@/components/utils/quillEditor";
import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import AutocompleteTagsInput from "@/components/utils/AutocompleteTagsInput";

import useFormWithMutation from "@/hooks/postFormHook";
import { JobOfferService } from "@/services/jobOffer";
import {
  createJobOfferSchema,
  jobOfferDefaultValues,
} from "@/modules/JobOffer";
import { useRouter } from "next/navigation";
import { ROUTING } from "@/utils/routes";
import { set, UseFormRegisterReturn, UseFormSetValue } from "react-hook-form";
const AddJob = () => {
  const mutation = JobOfferService.useCreateMutation();

  const router = useRouter();
  const {
    setValue,
    control,
    register,
    handleSubmit,
    formState: { errors },
    onSubmit,
  } = useFormWithMutation(
    jobOfferDefaultValues,
    createJobOfferSchema,
    mutation.mutateAsync,
    () => handleSuccess(),
    "Offre d'emploi créé avec succès"
  );

  const handleSuccess = () => {
    router.push(ROUTING.RECRUTEMENT.MAIN);
  };

  const emplacementList: SelectDataTypes[] = [
    {
      labelText: "Homme",
      value: 3,
    },
    {
      labelText: "Femme",
      value: 2,
    },
  ];

  return (
    <Box component={"form"} onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={3}>
        <PagerHeader title=" Ajouter une offre d'emploi" />

        <Stack direction={"row"} spacing={4} alignItems={"center"}>
          <Box flex={1}>
            <Grid container spacing={4}>
              <Grid item xs={8.5}>
                <Paper sx={{ padding: 4  , height:"100%"}}>
                  <Grid container spacing={4}>
                    <Grid item xs={7}>
                      <InputField
                        formRegistartion={register("title")}
                        isError={errors?.title ? true : false}
                        errorMessage={errors?.title?.message}
                        label="Titre d'emploi"
                        type="text"
                      />
                    </Grid>
                    <Grid item xs={5}>
                    <AutocompleteTagsInput
                      name="Tags"
                      formRegistration={register("tags")}
                      isError={!!errors.tags}
                      errorMessage={errors.tags?.message}
                      defaultTags={[]}
                    />
                    </Grid>
                    {/*
                    <Grid item xs={3}>
                      <InputField
                        formRegistartion={register("location")}
                        isError={errors?.location ? true : false}
                        errorMessage={errors?.location?.message}
                        label="Emplacement"
                        type="text"
                      />
                    </Grid> */}

                    <Grid item xs={12}>
                      <InputField
                        formRegistartion={register("short_description")}
                        isError={errors?.short_description ? true : false}
                        errorMessage={errors?.short_description?.message}
                        label="Description courte"
                        type="text"
                        multiline
                        rows={2}
                      />
                    </Grid>

                    {/*       <Grid item xs={4}>
                      <ExperianceYears
                        setValue={setValue}
                        minExperienceProps={{
                          formRegistartion: register("min_experience"),
                          isError: !!errors.min_experience,
                          errorMessage: errors.min_experience?.message,
                        }}
                        maxExperienceProps={{
                          formRegistartion: register("max_experience"),
                          isError: !!errors.max_experience,
                          errorMessage: errors.max_experience?.message,
                        }}
                      />
                    </Grid>

                    <Grid item xs={4}>
                      <InputField
                        formRegistartion={register("contract_type_id")}
                        isError={errors?.contract_type_id ? true : false}
                        errorMessage={errors?.contract_type_id?.message}
                        label="Type de contrat"
                        placeholder="CDI,CDD ..."
                        type="text"
                      />
                    </Grid>

                    <Grid item xs={4}>
                      <AutocompleteTagsInput
                        name="Tags"
                        formRegistration={register("tags")}
                        isError={!!errors.tags}
                        errorMessage={errors.tags?.message}
                        defaultTags={[]}
                      />
                    </Grid> */}
                    <Grid item xs={12}>
                      <Typography fontSize={18}>Exigences du poste</Typography>
                      <QuillEditor control={control} name="requirements" />
                    </Grid>
                    {/*   <Grid item xs={4}>
                      <InputField
                        formRegistartion={register("expire_at")}
                        isError={errors?.expire_at ? true : false}
                        errorMessage={errors?.expire_at?.message}
                        label="Date d'expiration"
                        type="date"
                      />
                    </Grid> */}
                    {/*     <Grid item xs={4}>
                      <FormControlLabel
                        control={<Checkbox defaultChecked disabled />}
                        label="Demander un CV"
                      />
                    </Grid>
                    <Grid item xs={4}>
                      <FormControlLabel
                        control={<Checkbox defaultChecked={false} />}
                        label="Demander une lettre de motivation"
                      />
                    </Grid> */}
                  </Grid>
                </Paper>
              </Grid>
              <Grid item xs={3.5}>
                <Paper sx={{ padding: 4  , height:"100%"}}>
                  <Stack spacing={3}>
              
                    <InputField
                      formRegistartion={register("contract_type_id")}
                      isError={errors?.contract_type_id ? true : false}
                      errorMessage={errors?.contract_type_id?.message}
                      label="Type de contrat"
                      placeholder="CDI,CDD ..."
                      type="text"
                    />

                    <SelectField
                      label={"Departement"}
                      formRegistartion={register("department_id")}
                      isError={errors?.department_id ? true : false}
                      errorMessage={errors?.department_id?.message}
                      selectData={emplacementList}
                    />
                          <ExperianceYears
                      setValue={setValue}
                      minExperienceProps={{
                        formRegistartion: register("min_experience"),
                        isError: !!errors.min_experience,
                        errorMessage: errors.min_experience?.message,
                      }}
                      maxExperienceProps={{
                        formRegistartion: register("max_experience"),
                        isError: !!errors.max_experience,
                        errorMessage: errors.max_experience?.message,
                      }}
                    />
                    <InputField
                      formRegistartion={register("location")}
                      isError={errors?.location ? true : false}
                      errorMessage={errors?.location?.message}
                      label="Emplacement"
                      type="text"
                    />

                    <InputField
                      formRegistartion={register("expire_at")}
                      isError={errors?.expire_at ? true : false}
                      errorMessage={errors?.expire_at?.message}
                      label="Date d'expiration"
                      type="date"
                    />
                    <FormControlLabel
                      control={<Checkbox defaultChecked disabled />}
                      label="Demander un CV"
                    />
                    <FormControlLabel
                      control={<Checkbox defaultChecked={false} />}
                      label="Demander une lettre de motivation"
                    />
                    <Button
                      type="submit"
                      size="large"
                      startIcon={<SaveIcon />}
                      sx={{ paddingX: 8 }}
                      variant="contained"
                      color="primary"
                    >
                      Créer
                    </Button>
                  </Stack>
                </Paper>
              </Grid>
            </Grid>
          </Box>
        </Stack>
      </Stack>
    </Box>
  );
};

type ExperianceYearsProps = {
  minExperienceProps: {
    formRegistartion: UseFormRegisterReturn;
    isError: boolean;
    errorMessage?: string;
  };
  maxExperienceProps: {
    formRegistartion: UseFormRegisterReturn;
    isError: boolean;
    errorMessage?: string;
  };
  setValue: UseFormSetValue<any>;
};

const ExperianceYears = ({
  minExperienceProps,
  maxExperienceProps,
  setValue,
}: ExperianceYearsProps) => {
  const [intervalle, setIntervalle] = useState<boolean>(false);

  const handleToggleIntervalle = (n: boolean) => {
    setIntervalle(n);
    setValue("intervalle", n);
    if (!n) {

      setValue("max_experience", null);
    }
  };

  return (
    <Stack
      direction={"row"}
      spacing={4}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <Typography>Expérience</Typography>
      <InputField
        label="min"
        type="number"
        formRegistartion={minExperienceProps.formRegistartion}
        isError={minExperienceProps.isError}
        errorMessage={minExperienceProps.errorMessage}
      />
      {intervalle && (
        <>
          <Typography>-</Typography>
          <InputField
            label="max"
            type="number"
            formRegistartion={maxExperienceProps.formRegistartion}
            isError={maxExperienceProps.isError}
            errorMessage={maxExperienceProps.errorMessage}
          />
          <IconButton onClick={() => handleToggleIntervalle(false)}>
            <CloseIcon />
          </IconButton>
        </>
      )}
      {!intervalle && (
        <Button
          sx={{ textWrap: "nowrap" }}
          onClick={() => handleToggleIntervalle(true)}
          size="small"
        >
          Intervalle ?
        </Button>
      )}
    </Stack>
  );
};

export default AddJob;
