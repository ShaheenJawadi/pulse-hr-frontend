import { InputField } from "@/components/utils/InputField";
import { Button, Stack, TextField } from "@mui/material";

const AddPoste = () => {
  return (
    <Stack spacing={5} justifyContent={"center"} height={"100%"}>
      <InputField label="Designation" type={"text"} />

      <Button variant="contained" size="large">
        Créer
      </Button>
    </Stack>
  );
};

export default AddPoste;
