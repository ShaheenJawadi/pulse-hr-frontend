import { Box, Button, Stack, TextField } from "@mui/material";

import { InputField } from "@/components/utils/InputField";

import { DepService } from "@/services/department";
import useFormWithMutation from "@/hooks/postFormHook";
import {
  createDepartmentSchema,
  departmentDefaultValues,
} from "@/modules/Department";
import { useDrawerAction } from "@/components/drawer/drawer.context";
import { DynamicSelectField, SelectField } from "@/components/utils/SelectField";
import { SelectDataTypes } from "@/types/structureTypes";

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
    () => handleSuccess(),
    "Department créé avec succès"
  );

  const handleSuccess = () => {
    closeDrawer();
  };

  const emplacementList: SelectDataTypes[] = [
    {
      labelText: "Homme",
      value: 3,
    },
    {
      labelText: "Femme",
      value: 5,
    },
  ];

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
        <DynamicSelectField
          label={"Manager"}
          selectData={emplacementList}
          formRegistartion={register("manager_id")}
          isError={errors?.manager_id ? true : false}
          errorMessage={errors?.manager_id?.message}
           targetMenu="Manager"

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
