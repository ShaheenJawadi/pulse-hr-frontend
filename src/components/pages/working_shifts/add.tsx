import { InputField } from "@/components/utils/InputField";
import {
  Button,
  Stack,
  TextField,
  Box,
  Typography,
  Divider,
} from "@mui/material";

const AddWorkingShift = () => {
  return (
    <Stack spacing={8} justifyContent={"center"} height={"100%"}>
      <InputField label="Designation" type={"text"} />

      <Box>
        <Stack spacing={3} divider={<Divider />}>
          <Stack spacing={2} direction={"row"} alignItems={"center"}>
            <Typography flex={3} variant="body1"></Typography>
            <Typography flex={4} variant="body2">
              Pointage à la sortie
            </Typography>
            <Typography flex={4} variant="body2">
              Pointage à la sortie
            </Typography>
          </Stack>

          {["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"].map(
            (item) => {
              return (
                <Stack spacing={2} direction={"row"} alignItems={"center"}>
                  <Typography flex={1} variant="body1" minWidth={100}>
                    {item}
                  </Typography>
                  <Box flex={3}>
                    <TextField
                      sx={{ width: "100%" }}
                      variant="outlined"
                      type="time"
                    />
                  </Box>

                  <Box flex={3}>
                    <TextField
                      sx={{ width: "100%" }}
                      variant="outlined"
                      type="time"
                    />
                  </Box>
                </Stack>
              );
            }
          )}
        </Stack>
      </Box>

      <Button variant="contained" size="large">
        Créer
      </Button>
    </Stack>
  );
};

export default AddWorkingShift;
