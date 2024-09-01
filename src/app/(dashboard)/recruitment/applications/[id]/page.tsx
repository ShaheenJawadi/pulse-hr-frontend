"use client";

import CardListing from "@/components/listingPages/cardsListing";
import PagerHeader from "@/components/listingPages/pageHeader";
import {
  Box,
  Button,
  ButtonGroup,
  Card,
  CardContent,
  CardHeader,
  Chip,
  Divider,
  Grid,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import LocationOnTwoToneIcon from "@mui/icons-material/LocationOnTwoTone";
import SingleJobGrid from "@/components/pages/recruitement/SingleJobGrid";
import { SelectField } from "@/components/utils/SelectField";
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useState } from "react";
import { CustomInfoData } from "@/components/utils/InfoDataCustom";
import { JobOfferService } from "@/services/jobOffer";

const ApplicationsListPage = () => {

  const { data, error, isLoading } = JobOfferService.useSingleQuery(1);
  return (
    <Stack spacing={3}>
      <PagerHeader title={'liste des candidatures pour "Full Stack Dev"'} />
      <Box>
        <Grid spacing={2} container>
          <Grid item sm={5}>
            <Card>
              <CardContent>
                <SingleJobGrid single={data!} />
              </CardContent>
            </Card>
          </Grid>
          <Grid item sm={7}>
            <Stack spacing={2}>
              <Stack
                direction={"row"}
                justifyContent={"space-between"}
                alignItems={"center"}
                spacing={2}
              >
                <Box></Box>

                <ButtonGroup variant="outlined">
                  <Button variant="contained" color="warning">
                    En attente
                  </Button>
                  <Button color="success">Présélectionné</Button>
                  <Button color="error">Refusées</Button>
                  <Button color="secondary">Toutes</Button>
                </ButtonGroup>
              </Stack>
              {[1, 2, 3].map((item) => {
                return <SingleApplication />;
              })}
            </Stack>
          </Grid>
        </Grid>
      </Box>
    </Stack>
  );
};

const SingleApplication = () => {
  const [openInfo, setOpenInfo] = useState(false);

  return (
    <Stack>
      <Card>
        <Box>
          <Stack
            direction={"row"}
            justifyContent={"space-between"}
            alignItems={"center"}
            padding={2}
            onClick={() => setOpenInfo(!openInfo)}
          >
            <Stack spacing={1}>
              <Typography variant="body1" color={"secondary"}>
                Nom & prenom
              </Typography>
              <Typography color={"secondaryy"}>
                jawadishaheen@gmail.com
              </Typography>
              <Box>
                {/*  <Chip
                  color="warning"
                  size="small"
                  variant={"outlined"}
                  label={"En attente"}
                /> */}
              </Box>
            </Stack>
            <Box>
              <IconButton color="secondary">
                {openInfo ? (
                  <KeyboardDoubleArrowUpIcon />
                ) : (
                  <KeyboardArrowDownIcon />
                )}
              </IconButton>
            </Box>
          </Stack>
          <Divider />
        </Box>
        {openInfo && <CandidatInfo />}
      </Card>
    </Stack>
  );
};

const CandidatInfo = () => {
  return (
    <CardContent>
      <Stack spacing={1}>
        <CustomInfoData title={"Nom :"} info={"Jawadi"} />
        <CustomInfoData title={"Prenom :"} info={"shaheen"} />
        <CustomInfoData title={"Email :"} info={"jawadishaheen@gmail.com"} />
        <CustomInfoData title={"Télephone :"} info={"52723344"} />
        <CustomInfoData title={"Date de naissance  :"} info={"12/04/1998"} />
        <CustomInfoData title={"Poste actuel  :"} info={"Full Stack dev"} />
        <CustomInfoData title={"LinkedIn :"} info={"linkedin.com/"} />
        <CustomInfoData
          title={"Github :"}
          info={"https://github.com/ShaheenJawadi"}
        />
        <CustomInfoData
          title={"Motivation :"}
          info={
            "qsjkhd jsqdtgq sgduy za g uagyz gyuyzagdhgza jd fzaudfazfdhzagfduyzfa ud uzyfduyazhdigajkzgdjzahgduyazgdjaghzduyg azudyfajhzgfdsqghfdhgfqshdqydtazdapodjmlasdjoiqji"
          }
        />

        <Button>Cv</Button>
        <Button>lettre de motivation</Button>

        <Box>
          <Stack
            marginTop={4}
            direction={"row"}
            alignContent={"center"}
            alignItems={"center"}
            justifyContent={"center"}
            spacing={4}
          >
            <Button variant="contained" color="error">
              rejeter
            </Button>
            <Button variant="contained" color="success">
              mis en présélection
            </Button>
          </Stack>
        </Box>
      </Stack>
    </CardContent>
  );
};

export default ApplicationsListPage;
