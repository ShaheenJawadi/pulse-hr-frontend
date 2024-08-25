import { InputField } from "@/components/utils/InputField";
import { SelectField } from "@/components/utils/SelectField";
import { SelectDataTypes } from "@/types/structureTypes";
import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  Card,
  Grid,
  Stack,
} from "@mui/material";
import Image from "next/image";

const PersonalInfo = () => {
  const photoSize = 250;
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
    <Stack direction={"row"} spacing={4} alignItems={"center"}>
      <Box>
        <Stack spacing={2}>
          <Card sx={{ width: photoSize, height: photoSize }}>
            <Image
              alt=""
              width={photoSize}
              height={photoSize}
              src={"/utils/goat.jpg"}
            />
          </Card>
          <Stack
            direction={"row"}
            alignItems={"center"}
            justifyContent={"center"}
            spacing={2}
          >
            <Button variant="outlined" color="error">
              reset
            </Button>
            <Button variant="outlined" color="primary">
              upload
            </Button>
          </Stack>
        </Stack>
      </Box>
      <Box flex={1}>
        <Grid container spacing={4}>
          <Grid item xs={6}>
            <InputField label="Nom" />
          </Grid>
          <Grid item xs={6}>
            <InputField label="Prenom" />
          </Grid>
          <Grid item xs={6}>
            <InputField label="Email" type="email" />
          </Grid>
          <Grid item xs={6}>
            <InputField label="Numéro de téléphone" />
          </Grid>
          <Grid item xs={6}>
            <InputField
              label="Date de naissance" 
             
              type="date"
            />
          </Grid>

          <Grid item xs={6}>
            <SelectField label={"Genre"} selectData={emplacementList} />
          </Grid>
        </Grid>
      </Box>
    </Stack>
  );
};

const ProfessionalInfo = () => {
  return <div>proff</div>;
};

const AdditionalInfo = () => {
  return <div>Addit</div>;
};

export { PersonalInfo, ProfessionalInfo, AdditionalInfo };
