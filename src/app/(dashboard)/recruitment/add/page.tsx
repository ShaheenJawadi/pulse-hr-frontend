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
  Autocomplete,
  Chip,
  TextField,
} from "@mui/material";
import SaveIcon from "@mui/icons-material/Save";
import QuillEditor from "@/components/utils/quillEditor";
import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import AutocompleteTagsInput from "@/components/utils/AutocompleteTagsInput";
import { text } from "stream/consumers";
const AddJob = () => {
 

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
    <Stack spacing={3}>
      <PagerHeader title=" Ajouter une offre d'emploi" />
      <Paper sx={{ padding: 5 }}>
        <Stack direction={"row"} spacing={4} alignItems={"center"}>
          <Box flex={1}>
            <Grid container spacing={4}>
              <Grid item xs={6}>
                <InputField label="Titre d'emploi" type="text" />
              </Grid>
              <Grid item xs={3}>
                <SelectField
                  label={"Departement"}
                  selectData={emplacementList}
                />
              </Grid>

              <Grid item xs={3}>
                <InputField label="Emplacement" type="text" />
              </Grid>

              <Grid item xs={12}>
                <InputField
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
                  label="Type de contrat"
                  placeholder="CDI,CDD ..."
                  type="text"
                />
              </Grid>

              <Grid item xs={4}>
                <AutocompleteTagsInput onTagsChange={(vals)=>null } defaultTags={[]} />
              </Grid>
              <Grid item xs={12}>
                <Typography fontSize={18}>Exigences du poste</Typography>
                <QuillEditor
                  value={""}
                  onChange={(text) => console.log(text)}
                />
              </Grid>
              <Grid item xs={4}>
                <InputField label="Date d'expiration" type="date" />
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
