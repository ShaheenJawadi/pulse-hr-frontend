import { Box, Button, Stack, TextField } from "@mui/material";

import { InputField } from "@/components/utils/InputField";

import * as yup from "yup";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { AuthService } from "@/services/auth";
import { DepService } from "@/services/department";
import useFormWithMutation from "@/hooks/postFormHook";

interface FormData {
  name: string;
  location: string;
}
const AddDepartment = () => {
  let schema = yup.object().shape({
    name: yup.string().required("Entrer une designation"),

    location: yup.string(),
  });

  const mutation = DepService.useCreateMutation();

  const handleSuccess = (data: any) => {
    console.log("Form submitted successfully!", data);
    // Perform any additional actions on success
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    onSubmit,
  } = useFormWithMutation(
    { name: "", location: "" },
    schema,
    mutation.mutateAsync,
    () => {
      console.log("Form submitted successfully!");
    }
  );

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
