"use client";
import Image from "next/image";

import {
  Button,
  Box,
  Card,
  Typography,
  CardContent,
  Stack,
  Grid,
} from "@mui/material";
import { info } from "console";
import CorporateFareTwoToneIcon from "@mui/icons-material/CorporateFareTwoTone";
import LanguageIcon from "@mui/icons-material/Language";
import LocationOnTwoToneIcon from "@mui/icons-material/LocationOnTwoTone";
import StickyNote2TwoToneIcon from "@mui/icons-material/StickyNote2TwoTone";
import WorkHistoryTwoToneIcon from "@mui/icons-material/WorkHistoryTwoTone";
const SingleJobPost = () => {
  return (
    <Box padding={2}>
      <Stack spacing={10}>
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Image src="/telnet/logo.webp" width={180} height={45} alt="" />
          <Button variant="outlined" size="large" color="primary">
            Find more
          </Button>
        </Stack>

        <Stack spacing={4} alignItems={"center"}>
          <Typography variant="h3" color={"#000"}>
            {" "}
            Job title ksqdkjlsq kdhkqjlh duioqs ydiusqd
          </Typography>
          <Typography variant="h6">
            {" "}
            short description qsk:jd lkqsjdkl sqjkd hkjsqdh ksqjkdhsqui dui
            qskduyqs jdlksqjdkhsqkjdhuk sqgd jgsqjdg sqhgdsqhd ghqsfdhg
          </Typography>
        </Stack>

        <BreifCard />

        <Stack spacing={4}>
          <Typography variant="h6">Description</Typography>
          <Typography variant="body1">
            qskjdhkjqsh dkjhsqjkd hjksqh kdjhsqkdhk qskjdhkjqsh dkjhsqjkd hjksqh
            kdjhsqkdhk qskjdhkjqsh dkjhsqjkd hjksqh kdjhsqkdhk qskjdhkjqsh
            dkjhsqjkd hjksqh kdjhsqkdhk qskjdhkjqsh dkjhsqjkd hjksqh kdjhsqkdhk
            qskjdhkjqsh dkjhsqjkd hjksqh kdjhsqkdhk qskjdhkjqsh dkjhsqjkd hjksqh
            kdjhsqkdhk qskjdhkjqsh dkjhsqjkd hjksqh kdjhsqkdhk qskjdhkjqsh
            dkjhsqjkd hjksqh kdjhsqkdhk qskjdhkjqsh dkjhsqjkd hjksqh kdjhsqkdhk
            qskjdhkjqsh dkjhsqjkd hjksqh kdjhsqkdhk qskjdhkjqsh dkjhsqjkd hjksqh
            kdjhsqkdhk qskjdhkjqsh dkjhsqjkd hjksqh kdjhsqkdhk qskjdhkjqsh
            dkjhsqjkd hjksqh kdjhsqkdhk qskjdhkjqsh dkjhsqjkd hjksqh kdjhsqkdhk
            qskjdhkjqsh dkjhsqjkd hjksqh kdjhsqkdhk qskjdhkjqsh dkjhsqjkd hjksqh
            kdjhsqkdhk qskjdhkjqsh dkjhsqjkd hjksqh kdjhsqkdhk qskjdhkjqsh
            dkjhsqjkd hjksqh kdjhsqkdhk qskjdhkjqsh dkjhsqjkd hjksqh kdjhsqkdhk
            qskjdhkjqsh dkjhsqjkd hjksqh kdjhsqkdhk qskjdhkjqsh dkjhsqjkd hjksqh
            kdjhsqkdhk qskjdhkjqsh dkjhsqjkd hjksqh kdjhsqkdhk qskjdhkjqsh
            dkjhsqjkd hjksqh kdjhsqkdhk qskjdhkjqsh dkjhsqjkd hjksqh kdjhsqkdhk
            qskjdhkjqsh dkjhsqjkd hjksqh kdjhsqkdhk qskjdhkjqsh dkjhsqjkd hjksqh
            kdjhsqkdhk qskjdhkjqsh dkjhsqjkd hjksqh kdjhsqkdhk qskjdhkjqsh
            dkjhsqjkd hjksqh kdjhsqkdhk qskjdhkjqsh dkjhsqjkd hjksqh kdjhsqkdhk
            qskjdhkjqsh dkjhsqjkd hjksqh kdjhsqkdhk qskjdhkjqsh dkjhsqjkd hjksqh
            kdjhsqkdhk qskjdhkjqsh dkjhsqjkd hjksqh kdjhsqkdhk qskjdhkjqsh
            dkjhsqjkd hjksqh kdjhsqkdhk qskjdhkjqsh dkjhsqjkd hjksqh kdjhsqkdhk
            qskjdhkjqsh dkjhsqjkd hjksqh kdjhsqkdhk qskjdhkjqsh dkjhsqjkd hjksqh
            kdjhsqkdhk qskjdhkjqsh dkjhsqjkd hjksqh kdjhsqkdhk qskjdhkjqsh
            dkjhsqjkd hjksqh kdjhsqkdhk qskjdhkjqsh dkjhsqjkd hjksqh kdjhsqkdhk
            qskjdhkjqsh dkjhsqjkd hjksqh kdjhsqkdhk qskjdhkjqsh dkjhsqjkd hjksqh
            kdjhsqkdhk qskjdhkjqsh dkjhsqjkd hjksqh kdjhsqkdhk qskjdhkjqsh
            dkjhsqjkd hjksqh kdjhsqkdhk
          </Typography>
        </Stack>

        <Stack alignItems={"center"}>
          <Box>
            <Button
              color="primary"
              size="large"
              sx={{ paddingX: 25 }}
              variant="contained"
            >
              Postuler
            </Button>
          </Box>
        </Stack>
      </Stack>
    </Box>
  );
};
/* maybe add share btn and copy link  */

const BreifCard = () => {
  const data = [
    {
      title: "Emplacement",
      info: "Tunis , tunisie",
      icon: <LocationOnTwoToneIcon  color="primary" sx={{fontSize:29}}/>,
    },
    {
      title: "Departement",
      info: "IT",
      icon: <CorporateFareTwoToneIcon  color="primary" sx={{fontSize:29}}/>,
    },
    {
      title: "Expérience",
      info: "2-3 ans",
      icon: <WorkHistoryTwoToneIcon  color="primary" sx={{fontSize:29}}/>,
    },
    {
      title: "Type de contrat",
      info: "CDI",
      icon: <StickyNote2TwoToneIcon  color="primary" sx={{fontSize:29}}/>,
    },
  ];
  return (
    <Stack alignItems={"center"}>
      <Card sx={{width:800}}>
        <CardContent>
          <Grid spacing={6} container>
            {data.map((item) => {
              return (
                <Grid item sm={6}>
                  <Stack direction={"row"} spacing={4}>
                    {item.icon}
                    <Stack spacing={2} >
                      <Typography variant="body1">{item.title}</Typography>
                      <Typography variant="h6" sx={{ color: "#000" }}>
                        {item.info}
                      </Typography>
                    </Stack>
                  </Stack>
                </Grid>
              );
            })}
          </Grid>
        </CardContent>
      </Card>
    </Stack>
  );
};

export default SingleJobPost;
