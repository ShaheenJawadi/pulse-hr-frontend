"use client";

import Image from "next/image";
import styles from "./page.module.css";
import BusinessTwoToneIcon from "@mui/icons-material/BusinessTwoTone";
import WindowIcon from "@mui/icons-material/Window";
import ViewStreamIcon from "@mui/icons-material/ViewStream";
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
            <Image src="/telnet/logo.webp" width={220} height={55} alt="" />
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
  return (
    <Card sx={{ backgroundColor: "#f5fcff"  , position:"sticky" , top:5 }}>
      <CardContent>
        <Stack divider={<Divider />} spacing={4}>
          <Stack spacing={1}>
            <Typography>Emplacement</Typography>
            <FormControl fullWidth>
              <Select value={10}>
                <MenuItem value={10}>Tunis, tunisia</MenuItem>
                <MenuItem value={20}>Sfax , tunisie</MenuItem>
              </Select>
            </FormControl>
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
            <Typography>Type d'emploi</Typography>
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
                <BusinessTwoToneIcon color="success" />
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
          </Stack>  </Link>
        </CardContent>
      </Card>
    </Grid>
  );
};

const JobListHeader = () => {
  return (
    <Stack justifyContent={"space-between"} direction={"row"}>
      <Box>
        <Typography variant="h5">8 emplois trouvés</Typography>
      </Box>
      <Stack alignItems={"center"} direction={"row"} spacing={2}>
        <Typography typography={"body1"}>Trier par</Typography>
        <FormControl size="small" sx={{ minWidth: 100 }}>
          <Select value={0} autoWidth>
            <MenuItem value={0}>Plus récent</MenuItem>
            <MenuItem value={1}>Plus ancien</MenuItem>
          </Select>
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
