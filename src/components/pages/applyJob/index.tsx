import { InputField } from "@/components/utils/InputField";
import { Box, Button, InputAdornment, Stack, Typography } from "@mui/material";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PersonIcon from "@mui/icons-material/Person";

import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import WorkIcon from "@mui/icons-material/Work";

import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import UploadFileInput from "@/components/utils/UploadFile";
import { JobApplicationService } from "@/services/publicListing/applications";
import { useDrawerAction } from "@/components/drawer/drawer.context";
import useFormWithMutation from "@/hooks/postFormHook";
import { candidateDefaultValues, candidateSchema } from "@/modules/Candidate";
const ApplyJob = () => {
  const mutation = JobApplicationService.useCreateMutation();
  const { closeDrawer } = useDrawerAction();
  const {
    setValue,
    register,
    handleSubmit,
    formState: { errors },
    onSubmit,
  } = useFormWithMutation(
    candidateDefaultValues,
    candidateSchema,
    mutation.mutateAsync,
    () => handleSuccess(),
    "La candidature a été envoyée avec succès !"
  );

  const handleSuccess = () => {
    closeDrawer();
  };
  setValue("job_offer_id", 1);

  return (
    <Box component={"form"} onSubmit={handleSubmit(onSubmit)}>
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
               formRegistartion={register("full_name")}
               isError={errors?.full_name ? true : false}
               errorMessage={errors?.full_name?.message}
            startAdornment={
              <InputAdornment position="start">
                <PersonIcon />
              </InputAdornment>
            }
            label="Nom et Prénom"
            type={"text"}
          />
         
          <InputField
               formRegistartion={register("email")}
               isError={errors?.email ? true : false}
               errorMessage={errors?.email?.message}
            startAdornment={
              <InputAdornment position="start">
                <AlternateEmailIcon />
              </InputAdornment>
            }
            label="Email"
            type={"email"}
          />

          <InputField
            formRegistartion={register("phone")}
            isError={errors?.phone ? true : false}
            errorMessage={errors?.phone?.message}
            startAdornment={
              <InputAdornment position="start">
                <LocalPhoneIcon />
              </InputAdornment>
            }
            label="Téléphone"
            type={"text"}
          />

          <InputField
            formRegistartion={register("actual_position")}
            isError={errors?.actual_position ? true : false}
            errorMessage={errors?.actual_position?.message}
            startAdornment={
              <InputAdornment position="start">
                <WorkIcon />
              </InputAdornment>
            }
            label="Poste actuel"
            type={"text"}
          />
           <InputField
               formRegistartion={register("birthday")}
               isError={errors?.birthday ? true : false}
               errorMessage={errors?.birthday?.message}
            startAdornment={
              <InputAdornment position="start">
                <CalendarMonthIcon />
              </InputAdornment>
            }
            label="Data de naissance"
            type={"date"}
          />
          <InputField
            formRegistartion={register("linkedin_profile")}
            isError={errors?.linkedin_profile ? true : false}
            errorMessage={errors?.linkedin_profile?.message}
            startAdornment={
              <InputAdornment position="start">
                <LinkedInIcon />
              </InputAdornment>
            }
            label="Linkedin"
            type={"link"}
          />
          <InputField
            formRegistartion={register("github_profile")}
            isError={errors?.github_profile ? true : false}
            errorMessage={errors?.github_profile?.message}
            startAdornment={
              <InputAdornment position="start">
                <GitHubIcon />
              </InputAdornment>
            }
            label="Github"
            type={"link"}
          />

          <InputField
            formRegistartion={register("motivation")}
            isError={errors?.motivation ? true : false}
            errorMessage={errors?.motivation?.message}
            startAdornment={<InputAdornment position="start"></InputAdornment>}
            label="Motivation"
            multiline
            rows={4}
            type={"text"}
          />
        </Stack>
        <Box>
          <Typography variant="body1">Veuillez télécharger votre CV</Typography>
          <UploadFileInput maxFiles={1} maxSize={1} />
        </Box>

        <Button type="submit" color="primary" variant="contained">
          Postuler
        </Button>
      </Stack>
    </Box>
  );
};

export default ApplyJob;
