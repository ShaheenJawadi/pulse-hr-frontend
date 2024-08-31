import { Box, Button, Stack, TextField } from "@mui/material";

import { InputField } from "@/components/utils/InputField";

import { DepService } from "@/services/department";
import useFormWithMutation from "@/hooks/postFormHook";
import {
  createDepartmentSchema,
  departmentDefaultValues,
} from "@/modules/Department";
import { useDrawerAction } from "@/components/drawer/drawer.context";

const AddDepartment = () => {
  const mutation = DepService.useCreateMutation();
  const { closeDrawer } = useDrawerAction();
  const {
    register,
    handleSubmit,
    formState: { errors },
    onSubmit,
  } = useFormWithMutation(
    departmentDefaultValues,
    createDepartmentSchema,
    mutation.mutateAsync,
    ()=> handleSuccess(),
    "Department créé avec succès"
  );

  const handleSuccess =()=>{ 
    closeDrawer();
  }

  return (
    <Box component={"form"} onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={5} justifyContent={"center"} height={"100%"}>
        <InputField
          formRegistartion={register("name")}
          isError={errors?.name ? true : false}
          errorMessage={errors?.name?.message}
          label="Designation"
          type={"text"}
        />
        <InputField
          formRegistartion={register("location")}
          isError={errors?.location ? true : false}
          errorMessage={errors?.location?.message}
          label="Location"
          type={"text"}
        />
        <Button type="submit" variant="contained" size="large">
          Créer
        </Button>
      </Stack>{" "}
    </Box>
  );
};

export default AddDepartment;
