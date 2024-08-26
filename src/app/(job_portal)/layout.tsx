import {
  Box,
  Button,
  Container,
  Divider,
  IconButton,
  Link,
  Stack,
  Typography,
} from "@mui/material";
import { ChildrenType } from "@/types/themeTypes";
import XIcon from "@mui/icons-material/X";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import LanguageIcon from "@mui/icons-material/Language";
const Layout = async ({ children }: ChildrenType) => {
  return (
    <Box>
      <TopHeader />
      <Container sx={{ paddingBottom: 5 }}>{children}</Container>
      <Divider />
      <Container>
        <BtmFooter />
      </Container>
    </Box>
  );
};

const TopHeader = () => {
  return (
    <Box sx={{ backgroundColor: "#fff" }}>
      <Container>
        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Stack
            spacing={4}
            flex={3}
            direction={"row"}
            alignItems={"center"}
            divider={<Divider orientation="vertical" flexItem />}
          >
            <SocialMedia />
            <Stack direction={"row"} alignItems={"center"}>
              <IconButton sx={{ fontSize: 20 }} color="primary">
                <LocalPhoneIcon fontSize="inherit" />
              </IconButton>
              <Typography>(+216) 71 860 233</Typography>
            </Stack>
            <Stack direction={"row"} alignItems={"center"}>
              <IconButton sx={{ fontSize: 20 }} color="primary">
                <EmailIcon fontSize="inherit" />
              </IconButton>
              <Typography>info@groupe-telnet.net</Typography>
            </Stack>
          </Stack>
          <Stack alignItems={"flex-end"} flex={2}>
            <Box>
              <Button startIcon={<LanguageIcon />}>Notre site web</Button>
            </Box>
          </Stack>
        </Stack>
      </Container>
      <Divider />
    </Box>
  );
};
const BtmFooter = () => {
  return (
    <Stack
      direction={"row"}
      alignItems={"center"}
      justifyContent={"space-between"}
      padding={4}
    >
      <Typography variant="body2">
        Copyright © 2021 TELNET. All Rights Reserved.
      </Typography>
      <SocialMedia />
    </Stack>
  );
};

const SocialMedia = () => {
  return (
    <Stack alignItems={"center"} direction={"row"}>
      <IconButton
        href="https://www.facebook.com/telnet.holding.tn"
        sx={{ fontSize: 20 }}
        color="primary"
      >
        <FacebookIcon fontSize="inherit" />
      </IconButton>

      <IconButton
        href="https://x.com/telnetholding"
        sx={{ fontSize: 20 }}
        color="primary"
      >
        <XIcon fontSize="inherit" />
      </IconButton>
      <IconButton
        href="https://www.linkedin.com/in/telnet-tunisie-bb5883140/"
        sx={{ fontSize: 20 }}
        color="primary"
      >
        <LinkedInIcon fontSize="inherit" />
      </IconButton>
    </Stack>
  );
};

export default Layout;
