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

const ForgotPws = () => {
  const router = useRouter();

  const openResetTest = () => {

    router.push(ROUTING.AUTH.RESETPWS);

  }
  
  return (
    <Stack spacing={1} height={"100%"}>
      <Typography variant="h5">Mot de passe oublié ?</Typography>
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
          label="Veuillez entrer votre email"
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

export default ForgotPws;
