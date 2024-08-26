"use client";

import Image from "next/image";
import LocationOnTwoToneIcon from "@mui/icons-material/LocationOnTwoTone";
import WindowIcon from "@mui/icons-material/Window";
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
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  IconButton,
  Checkbox,
  FormControlLabel,
  FormGroup,
} from "@mui/material";
import Link from "next/link";
import { ROUTING } from "@/utils/routes";
import { SelectField } from "@/components/utils/SelectField";
import { SelectDataTypes } from "@/types/structureTypes";

const LogoHolder = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: 25,
  left: 25,
}));

const Home = () => {
  return (
    <>
      <Box position={"relative"}>
        <Image src="/job_portal/bg.jpg" width={1200} height={600} alt="" />
        <LogoHolder>
          <Image src="/telnet/logo.webp" width={180} height={45} alt="" />
        </LogoHolder>
      </Box>
      <Grid container spacing={4} sx={{ marginTop: 3 }}>
        <Grid position={"relative"} item sm={3.5}>
          <FilterSide />
        </Grid>
        <Grid item sm={8.5}>
          <Stack divider={<Divider />} spacing={2}>
            <JobListHeader />
            <Grid container spacing={3}>
              {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(() => {
                return <SingleGrid />;
              })}
            </Grid>
          </Stack>
        </Grid>
      </Grid>
    </>
  );
};

const FilterSide = () => {
   const emplacementList: SelectDataTypes[] = [
    {
      labelText: "Tunis, tunisia",
      value: "Tunis, tunisia",
    },
    {
      labelText: "Sfax , tunisie",
      value: "Sfax , tunisie",
    },
  ];

  return (
    <Card sx={{ backgroundColor: "#f5fcff", position: "sticky", top: 5 }}>
      <CardContent>
        <Stack divider={<Divider />} spacing={4}>
          <Stack spacing={1}>
            <Typography>Emplacement</Typography>
            <SelectField label={"Emplacement"} selectData={emplacementList} />
          
          </Stack>
          <Stack spacing={1}>
            <Typography>Expérience</Typography>
            <FormGroup>
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="1-2 ans"
              />
              <FormControlLabel
                required
                control={<Checkbox />}
                label="2-4 ans"
              />
              <FormControlLabel control={<Checkbox />} label="+4 ans" />
            </FormGroup>
          </Stack>
          <Stack spacing={1}>
            <Typography>Type de contrat</Typography>
            <FormGroup>
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="Temps plein"
              />
              <FormControlLabel required control={<Checkbox />} label="CDD" />
              <FormControlLabel control={<Checkbox />} label="CDI" />
            </FormGroup>
          </Stack>

          <Stack direction={"row"} spacing={1}>
            <Chip color="primary" label="tag1" />

            <Chip color="primary" label="tag1" />

            <Chip color="primary" label="tag1" />
          </Stack>

          <Stack spacing={2}>
            <Button variant="contained">Appliquer le filtre</Button>
            <Button variant="text">Réinitialiser le filtre</Button>
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  );
};

const SingleGrid = () => {
  return (
    <Grid item sm={6}>
      <Card variant="elevation">
        <CardContent>
          <Link href={ROUTING.PUBLIC.JOBLISTING.SINGLEJOB}>
            <Stack spacing={4}>
              <Typography variant="h5" sx={{ color: "#000" }}>
                jOBtITLE
              </Typography>
              <Stack direction={"row"} justifyContent={"space-between"}>
                <Stack direction={"row"}>
                  <LocationOnTwoToneIcon color="success" />
                  <Typography variant="body1">Tunisie , tunis</Typography>
                </Stack>

                <Stack direction={"row"}>
                  <SafetyCheckTwoToneIcon color="warning" />
                  <Typography variant="body1">full time </Typography>
                </Stack>
              </Stack>

              

              <Box>
                <Typography variant="subtitle1">
                  qsjdhkjqsh dkjhsqjkd hjksqh kdjhsqkdhk
                </Typography>
              </Box>
              <Stack spacing={1} direction={"row"}>
                <Chip
                  variant="outlined"
                  size="small"
                  color="primary"
                  label="tag1"
                />
                <Chip
                  variant="outlined"
                  size="small"
                  color="primary"
                  label="tag2"
                />
              </Stack>

              <Divider />
              <Stack
                alignItems={"center"}
                direction={"row"}
                justifyContent={"space-between"}
              >
                <Typography variant="body2">Il ya 5 jours </Typography>
                <Button variant="contained">Postuler</Button>
              </Stack>
            </Stack>{" "}
          </Link>
        </CardContent>
      </Card>
    </Grid>
  );
};

const JobListHeader = () => {
  const orderByList: SelectDataTypes[] = [
    {
      labelText: "Plus récent",
      value: 0,
    },
    {
      labelText: "Plus ancien",
      value: 1,
    },
  ];

  return (
    <Stack justifyContent={"space-between"} direction={"row"}>
      <Box>
        <Typography variant="h5">8 emplois trouvés</Typography>
      </Box>
      <Stack alignItems={"center"} direction={"row"} spacing={2}>
        <Typography typography={"body1"}>Trier par</Typography>
        <FormControl size="small" sx={{ minWidth: 100 }}>
        <SelectField dataValue={1} size="small"  selectData={orderByList} />
          
    
        </FormControl>

        <IconButton color="primary">
          <WindowIcon />
          {/*      <ViewStreamIcon/> */}
        </IconButton>
      </Stack>
    </Stack>
  );
};
export default Home;
