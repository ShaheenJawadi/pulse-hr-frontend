"use client";

import Image from "next/image";
import styles from "./page.module.css";
import BusinessTwoToneIcon from "@mui/icons-material/BusinessTwoTone";
import LocationOnTwoToneIcon from "@mui/icons-material/LocationOnTwoTone";

import SafetyCheckTwoToneIcon from "@mui/icons-material/SafetyCheckTwoTone";
import {
  Button,
  Box,
  Container,
  styled,
  Card,
  Typography,
  CardContent,
  Grid,
  Stack,
  Chip,
  Divider,
} from "@mui/material";

const LogoHolder = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: 25,
  left: 25,
}));

const Home = () => {
  return (
    <Box sx={{ backgroundColor: "#fff" }}>
      <Container sx={{ paddingBottom: 5 }}>
        <Box position={"relative"}>
          <Image src="/job_portal/bg.jpg" width={1200} height={600} alt="" />
          <LogoHolder>
            <Image src="/telnet/logo.webp" width={220} height={55} alt="" />
          </LogoHolder>
        </Box>
        <Grid container>
          <Grid item sm={3.5}>
            filter section
          </Grid>
          <Grid item sm={8.5}>
            <JobListHeader/>
            <Grid container spacing={3}>
              {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(() => {
                return <SingleGrid />;
              })}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

const SingleGrid = () => {
  return (
    <Grid item sm={6}>
      <Card variant="elevation">
        <CardContent>
          <Stack spacing={4}>
            <Typography variant="h5" sx={{ color: "#000" }}>
              jOBtITLE
            </Typography>
            <Stack direction={"row"} justifyContent={"space-between"}>
              <Stack direction={"row"}>
                <BusinessTwoToneIcon color="primary" />
                <Typography variant="body1">Tunisie , tunis</Typography>
              </Stack>

              <Stack direction={"row"}>
                <SafetyCheckTwoToneIcon color="primary" />
                <Typography variant="body1">full time </Typography>
              </Stack>
            </Stack>

            <Box>
              <Typography variant="subtitle1">
                qsjdhkjqsh dkjhsqjkd hjksqh kdjhsqkdhk
              </Typography>
            </Box>
            <Stack spacing={1} direction={"row"}>
              <Chip size="small" color="primary" label="tag1" />
              <Chip size="small" color="primary" label="tag2" />
            </Stack>

            <Divider />
            <Stack
              alignItems={"center"}
              direction={"row"}
              justifyContent={"space-between"}
            >
              <Typography variant="body2">Il ya 5 jours </Typography>
              <Button variant="outlined">Postuler</Button>
            </Stack>
          </Stack>
        </CardContent>
      </Card>
    </Grid>
  );
};


const JobListHeader=()=>{
  return(
    <Box>
      <Typography variant="h4">header</Typography>
    </Box>
  )
}
export default Home;
