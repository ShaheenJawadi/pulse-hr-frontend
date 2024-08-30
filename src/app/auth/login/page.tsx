"use client";

import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import LockIcon from "@mui/icons-material/Lock";
import Link from "next/link";
import { ROUTING } from "@/utils/routes";
import { InputField } from "@/components/utils/InputField";

import * as yup from "yup";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

interface FormData {
  email: string;
  password: string;
}

const Login = () => {
  let schema = yup.object().shape({
    email: yup
      .string()
      .email("Veuillez fournir un email valide")
      .required("Veuillez fournir un email valide"),

    password: yup
      .string()
      .min(8, "Le mot de passe doit comporter au moins 8 caractères")
      .required(),
  });

  const {
    register,
    handleSubmit,
    setError,
    getValues,

    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data: FormData) => {
    alert("oeky");
  };

  return (
    <Stack spacing={1} height={"100%"}>
      <Typography variant="h5">Se connecter</Typography>
      <Box component={"form"} onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={5} justifyContent={"center"} height={"100%"}>
          <InputField
            startAdornment={
              <InputAdornment position="start">
                <AlternateEmailIcon />
              </InputAdornment>
            }
            label="Email"
            type={"email"}
            formRegistartion={register("email")}
            isError={errors?.email ? true : false}
            errorMessage={errors?.email?.message}
          />

          <InputField
            startAdornment={
              <InputAdornment position="start">
                <LockIcon />
              </InputAdornment>
            }
            label="Mot de passe"
            type={"password"}
            formRegistartion={register("password")}
            isError={errors?.password ? true : false}
            errorMessage={errors?.password?.message}
          />

          <Button type="submit" variant="contained" size="large">
            Se connecter
          </Button>

          <Link href={ROUTING.AUTH.FORGOTPWS}>
            <Typography variant="body2">Mot de passe oublié ?</Typography>
          </Link>
        </Stack>
      </Box>
    </Stack>
  );
};

export default Login;
