import { useDrawerAction } from "@/components/drawer/drawer.context";
import { InputField } from "@/components/utils/InputField";
import useFormWithMutation from "@/hooks/postFormHook";
import {
  WorkPositionDefaultValues,
  createWorkPositionSchema,
} from "@/modules/WorkPosition";

import { WpService } from "@/services/workPosition";
import { Box, Button, Stack, TextField } from "@mui/material";

const AddPoste = () => {
  const mutation = WpService.useCreateMutation();
  const { closeDrawer } = useDrawerAction();
  const {
    register,
    handleSubmit,
    formState: { errors },
    onSubmit,
  } = useFormWithMutation(
    WorkPositionDefaultValues,
    createWorkPositionSchema,
    mutation.mutateAsync,
    () => handleSuccess(),
    "Poste créé avec succès"
  );

  const handleSuccess = () => {
    closeDrawer();
  };

  return (
    <Box component={"form"} onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={5} justifyContent={"center"} height={"100%"}>
        <InputField
          formRegistartion={register("designation")}
          isError={errors?.designation ? true : false}
          errorMessage={errors?.designation?.message}
          label="Designation"
          type={"text"}
        />

        <Button type="submit" variant="contained" size="large">
          Créer
        </Button>
      </Stack>
    </Box>
  );
};

export default AddPoste;
