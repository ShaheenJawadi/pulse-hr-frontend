import PagerHeader from "@/components/listingPages/pageHeader";
import columns from "@/components/pages/kanban/columns";
import GeneralTable from "@/ui/table/mainTable";
import { Stack, Paper, Grid, Box, Divider } from "@mui/material";

const NotePadPage = () => {
  return (
    <Stack spacing={3}>
      <PagerHeader title="Départements" />

      <Paper className="mainPaper">
        <Box paddingX={10}>
          <Grid container spacing={2}>
            <Grid item sm={3.5}>
              <Stack height={250} spacing={2} direction={"row"}>
                <Box flex={1}> list</Box>
                <Divider orientation="vertical" />
              </Stack>
            </Grid>

            <Grid item sm={8.5}>
               Box
            </Grid>
          </Grid>
        </Box>
      </Paper>
    </Stack>
  );
};

export default NotePadPage;
