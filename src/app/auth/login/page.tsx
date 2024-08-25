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

const Login = () => {
  return (
    <Stack spacing={1} height={"100%"}>
      <Typography variant="h5">Se connecter</Typography>
      <Stack spacing={5} justifyContent={"center"} height={"100%"}>
        <InputField
          startAdornment={
            <InputAdornment position="start">
              <AlternateEmailIcon />
            </InputAdornment>
          }
          label="Email"
          type={"email"}
        />

        <InputField
          startAdornment={
            <InputAdornment position="start">
              <LockIcon />
            </InputAdornment>
          }
          label="Mot de passe"
          type={"password"}
        />

        <Button variant="contained" size="large">
          Se connecter
        </Button>

        <Link href={ROUTING.AUTH.FORGOTPWS}>
          <Typography variant="body2">Mot de passe oublié ?</Typography>
        </Link>
      </Stack>
    </Stack>
  );
};

export default Login;
