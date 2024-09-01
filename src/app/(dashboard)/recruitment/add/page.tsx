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
const AddJob = () => {
  const mutation = JobOfferService.useCreateMutation();

  const router = useRouter();
  const {
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
      value: "h",
    },
    {
      labelText: "Femme",
      value: "f",
    },
  ];

  return (
    <Box component={"form"} onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={3}>
        <PagerHeader title=" Ajouter une offre d'emploi" />
        <Paper sx={{ padding: 5 }}>
          <Stack direction={"row"} spacing={4} alignItems={"center"}>
            <Box flex={1}>
              <Grid container spacing={4}>
                <Grid item xs={6}>
                  <InputField
                    formRegistartion={register("title")}
                    isError={errors?.title ? true : false}
                    errorMessage={errors?.title?.message}
                    label="Titre d'emploi"
                    type="text"
                  />
                </Grid>
                <Grid item xs={3}>
                  <SelectField
                    label={"Departement"}
                    formRegistartion={register("department_id")}
                    isError={errors?.department_id ? true : false}
                    errorMessage={errors?.department_id?.message}
                    selectData={emplacementList}
                  />
                </Grid>

                <Grid item xs={3}>
                  <InputField
                    formRegistartion={register("location")}
                    isError={errors?.location ? true : false}
                    errorMessage={errors?.location?.message}
                    label="Emplacement"
                    type="text"
                  />
                </Grid>

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

                <Grid item xs={4}>
                  <ExperianceYears />
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
                    onTagsChange={(vals) => null}
                    defaultTags={[]}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Typography fontSize={18}>Exigences du poste</Typography>
                  <QuillEditor
                        control={control} name="requirements"
                  />
                </Grid>
                <Grid item xs={4}>
                  <InputField
                    formRegistartion={register("expire_at")}
                    isError={errors?.expire_at ? true : false}
                    errorMessage={errors?.expire_at?.message}
                    label="Date d'expiration"
                    type="date"
                  />
                </Grid>
                <Grid item xs={4}>
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
                </Grid>
              </Grid>

              <Stack alignContent={"center"} alignItems={"center"}>
                <Box>
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
                </Box>
              </Stack>
            </Box>
          </Stack>
        </Paper>
      </Stack>
    </Box>
  );
};

const ExperianceYears = () => {
  const [intervalle, setIntervalle] = useState<boolean>(false);

  return (
    <Stack
      direction={"row"}
      spacing={4}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <Typography>Expérience</Typography>
      <InputField label="min" type="number" />
      {intervalle && (
        <>
          {" "}
          <Typography>-</Typography>
          <InputField label="max" type="number" />{" "}
          <IconButton onClick={() => setIntervalle(false)}>
            <CloseIcon />
          </IconButton>
        </>
      )}
      {!intervalle && (
        <Button
          sx={{ textWrap: "nowrap" }}
          onClick={() => setIntervalle(true)}
          size="small"
        >
          Intervalle ?
        </Button>
      )}
    </Stack>
  );
};

export default AddJob;
