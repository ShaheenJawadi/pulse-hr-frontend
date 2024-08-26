"use client";
import PagerHeader from "@/components/listingPages/pageHeader";
import { InputField } from "@/components/utils/InputField";
import { SelectField } from "@/components/utils/SelectField";
import { SelectDataTypes } from "@/types/structureTypes";
import { Stack, Box, Grid, Paper, Button } from "@mui/material";
import SaveIcon from '@mui/icons-material/Save';
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
                <InputField label="Experiance" type="number" />
              </Grid>
              <Grid item xs={4}>
                <InputField label="Type de contrat" placeholder="CDI,CDD ..." type="text" />
              </Grid>

              <Grid item xs={4}>
                <InputField label="Mots clés" type="text" />
              </Grid>
              <Grid item xs={12}>
                <InputField
                  label="Exigences"
                  type="text"
                  multiline
                  rows={4}
                />
              </Grid>
              <Grid item xs={4}>
                <InputField label="Date d'expiration" type="date" />
              </Grid>
            </Grid>

<Stack alignContent={"center"} alignItems={"center"}>
    <Box>
         <Button size="large" startIcon={<SaveIcon/>} sx={{paddingX:8}} variant="contained" color="primary">Créer</Button>
    </Box>
     
</Stack>
      
          </Box>
        </Stack>
      </Paper>
    </Stack>
  );
};

export default AddJob;
