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
import { useRouter } from "next/navigation";
import { ROUTING } from "@/utils/routes";

const ResetPws = () => {
  const router = useRouter();

  const openResetTest = () => {

    router.push(ROUTING.AUTH.RESETPWS);

  }
  
  return (
    <Stack spacing={1} height={"100%"}>
      <Typography variant="h5">Réinitialiser le mot de passe</Typography>
      <Stack spacing={5} justifyContent={"center"} height={"100%"}>
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
          label="Saisir un nouveau mot de passee"
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
          label="Ressaisissez votre nouveau mot de passe"
          variant="outlined"
        />

        <Button onClick={()=>openResetTest()} variant="contained" size="large">
          Réinitialiser 
        </Button>

        <Link href={ROUTING.AUTH.LOGIN}>
          <Typography variant="body2">Se connecter !</Typography>
        </Link>
      </Stack>
    </Stack>
  );
};

export default ResetPws;