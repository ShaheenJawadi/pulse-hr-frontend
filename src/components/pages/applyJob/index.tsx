import { InputField } from "@/components/utils/InputField";
import { Box, Button, InputAdornment, Stack, Typography } from "@mui/material";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PersonIcon from "@mui/icons-material/Person";

import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import WorkIcon from '@mui/icons-material/Work';

import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import UploadFileInput from "@/components/utils/UploadFile";
const ApplyJob = () => {
  return (
    <Stack spacing={6}>
      <Stack spacing={2}>
        <Typography textAlign={"center"} color={"secondary"} variant="h5">
          Vous voulez rejoindre nos équipes !​
        </Typography>
        <Typography>
          Nous fournissons un mentorat et soutenons fortement le développement
          de vos compétences
        </Typography>
      </Stack>

      <Stack spacing={3}>
        <InputField
          startAdornment={
            <InputAdornment position="start">
              <PersonIcon />
            </InputAdornment>
          }
          label="Nom et Prénom"
          type={"text"}
        />
        <InputField
          startAdornment={
            <InputAdornment position="start">
              <CalendarMonthIcon />
            </InputAdornment>
          }
          label="Data de naissance"
          type={"date"}
        />
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
              <LocalPhoneIcon />
            </InputAdornment>
          }
          label="Téléphone"
          type={"text"}
        />

        <InputField
          startAdornment={
            <InputAdornment position="start">
              <WorkIcon />
            </InputAdornment>
          }
          label="Poste actuel"
          type={"text"}
        />
        <InputField
          startAdornment={
            <InputAdornment position="start">
              <LinkedInIcon />
            </InputAdornment>
          }
          label="Linkedin"
          type={"link"}
        />
        <InputField
          startAdornment={
            <InputAdornment position="start">
              <GitHubIcon />
            </InputAdornment>
          }
          label="Github"
          type={"link"}
        />

        <InputField
          startAdornment={<InputAdornment position="start"></InputAdornment>}
          label="Motivation"
          multiline
          rows={4}
          type={"text"}
        />
      </Stack>
      <Box>
        <Typography variant="body1"  >
          Veuillez télécharger votre CV
        </Typography>
        <UploadFileInput maxFiles={1}  maxSize={1}/>
      </Box>

  
    

      <Button color="primary" variant="contained">
        Postuler
      </Button>
    </Stack>
  );
};

export default ApplyJob;
