import {
  Box,
  Button,
  Container,
  Divider,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import { ChildrenType } from "@/types/themeTypes";
import XIcon from "@mui/icons-material/X";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";

const Layout = async ({ children }: ChildrenType) => {
  return (
    <Box>
      <Box sx={{ backgroundColor: "#fff" }}>
        <Container>
          <Stack
            direction={"row"}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <Stack
              flex={2}
              direction={"row"}
              alignItems={"center"}
              divider={<Divider orientation="vertical" flexItem />}
            >
              <Stack flex={1} alignItems={"center"} direction={"row"}>
                <IconButton sx={{fontSize:20}} color="primary">
                  <FacebookIcon fontSize="inherit" />
                </IconButton >
                <IconButton  sx={{fontSize:20}} color="primary">
                  <XIcon fontSize="inherit" />
                </IconButton>
                <IconButton  sx={{fontSize:20}} color="primary">
                  <LinkedInIcon fontSize="inherit"/>
                </IconButton>
              </Stack>
              <Stack flex={1} direction={"row"} alignItems={"center"}>
                <IconButton sx={{fontSize:20}}  color="primary">
                  <LocalPhoneIcon fontSize="inherit"/>
                </IconButton>
                <Typography>(+216) 71 860 233</Typography>
              </Stack>
              <Stack flex={1} direction={"row"} alignItems={"center"}>
                <IconButton sx={{fontSize:20}}  color="primary">
                  <EmailIcon fontSize="inherit" />
                </IconButton>
                <Typography  >info@groupe-telnet.net</Typography>
              </Stack>
            </Stack>
            <Stack alignItems={"flex-end"} flex={1}>
              <Box>
                {" "}
                <Button>Visit our web</Button>
              </Box>
            </Stack>
          </Stack>
        </Container>
        <Divider />
      </Box>
      <Container sx={{ paddingBottom: 5 }}>{children}</Container>
      <Divider />
      <Container>
        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
          padding={4}
        >
          <Typography variant="body2">
            Copyright © 2021 TELNET. All Rights Reserved.
          </Typography>
          <Stack
            alignItems={"center"}
            justifyContent={"center"}
            direction={"row"}
          >
            <IconButton color="primary">
              <FacebookIcon />
            </IconButton>
            <IconButton color="primary">
              <XIcon />
            </IconButton>
            <IconButton color="primary">
              <LinkedInIcon />
            </IconButton>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default Layout;
