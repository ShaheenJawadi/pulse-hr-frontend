import CardListing from "@/components/listingPages/cardsListing";
import PagerHeader from "@/components/listingPages/pageHeader";
import {
  Box,
  Button,
  ButtonGroup,
  Card,
  CardContent,
  Chip,
  Divider,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import LocationOnTwoToneIcon from "@mui/icons-material/LocationOnTwoTone";
import SingleJobGrid from "@/components/pages/recruitement/SingleJobGrid";
import { SelectField } from "@/components/utils/SelectField";

const ApplicationsListPage = () => {
  return (
    <Stack spacing={3}>
      <PagerHeader title={'liste des candidatures pour "Full Stack Dev"'} />
      <Box>
        <Grid spacing={2} container>
          <Grid item sm={5}>
            <JobDescripton />
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
              {[1, 2, 3 ].map((item) => {
                return <SingleApplication />;
              })}
            </Stack>
          </Grid>
        </Grid>
      </Box>
    </Stack>
  );
};

const JobDescripton = () => {
  return (
    <Stack sx={{position:"sticky" , top:30}} alignItems={"center"} justifyContent={"center"}>
      <Box sx={{ maxWidth: 800 }}>
        <Card>
          <CardContent>
            {" "}
            <SingleJobGrid />
          </CardContent>
        </Card>
      </Box>
    </Stack>
  );
};

const SingleApplication = () => {
  return (
    <Stack>
      <CardListing
        title={"Nom & prenom"}
        notReverse={true}
        avatar="/utils/goat.jpg" 
        customAction={
          <Chip color="warning" variant={"outlined"} label={"En attente"} />
        }
      ></CardListing>
    </Stack>
  );
};

export default ApplicationsListPage;
