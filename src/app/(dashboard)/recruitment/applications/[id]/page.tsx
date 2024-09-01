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
import { Candidate } from "@/modules/Candidate";
import { useRouter } from "next/router";

const ApplicationsListPage = ({ params }: { params: { id: number } }) => {
 
  
  const { data, error, isLoading } = JobOfferService.useSingleQuery(params.id);
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
              {data?.candidates?.map((item) => {
                return <SingleApplication single={item} />;
              })}
            </Stack>
          </Grid>
        </Grid>
      </Box>
    </Stack>
  );
};

const SingleApplication = ({single}:{single:Candidate}) => {

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
                {single.full_name} 
              </Typography>
              <Typography color={"secondaryy"}>
                {single.email}
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
        {openInfo && <CandidatInfo single={single} />}
      </Card>
    </Stack>
  );
};

const CandidatInfo = ({single}:{single:Candidate}) => {
  return (
    <CardContent>
      <Stack spacing={1}>
        <CustomInfoData title={"Nom & Prenom :"} info={single.full_name} />
        <CustomInfoData title={"Email :"} info={single.email} />
        <CustomInfoData title={"Télephone :"} info={single.phone} />
        <CustomInfoData title={"Date de naissance  :"} info={single.birthday} />
        <CustomInfoData title={"Poste actuel  :"} info={single.actual_position} />
        <CustomInfoData title={"LinkedIn :"} info={single.linkedin_profile} />
        <CustomInfoData
          title={"Github :"}
          info={single.github_profile}
        />
        <CustomInfoData
          title={"Motivation :"}
          info={
            single.motivation
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
