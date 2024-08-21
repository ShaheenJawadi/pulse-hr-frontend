
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

const Login = () => {
  return (
    <Stack spacing={1} height={"100%"}>
      <Typography variant="h5">Se connecter</Typography>
      <Stack spacing={5} justifyContent={"center"} height={"100%"}>
        <TextField
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AlternateEmailIcon />
              </InputAdornment>
            ),
          }}
          sx={{ width: "100%" }}
          label="Email"
          variant="outlined"
        />
        <TextField
          type="password"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <LockIcon />
              </InputAdornment>
            ),
          }}
          sx={{ width: "100%" }}
          label="Mot de passe"
          variant="outlined"
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
