
import React from "react"; 
import { 
  IconButton,
  Paper,
  Stack,
  Typography,
} from "@mui/material";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
 
const PagerHeader = ({title}:{title:string}) => {
  return (
    <Paper>
        <Stack
          alignItems={"center"}
          paddingX={4}
          paddingY={2}
          spacing={5}
          direction={"row"}
        >
          <IconButton size="medium" color="primary">
            <ArrowBackIcon />
          </IconButton>
          <Typography variant="h6">{title}</Typography>
        </Stack>
      </Paper>
  );
};

export default PagerHeader;
