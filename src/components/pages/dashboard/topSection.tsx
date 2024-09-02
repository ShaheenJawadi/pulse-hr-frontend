import AppReactDatepicker from "@/components/utils/datePicker";
import { Box, Card, CardContent, Grid, Stack, Typography } from "@mui/material";

const DashboardTopSection = () => {
  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={7.5}>
          <Card is={"bg-secondary"}>
            <CardContent>
              <Typography variant="h5">sdg jsqhdgjsqgdjhsq dqsdsqd</Typography>
              <Typography variant="body2">
                sqdqsdqsdqsdsqd
                <br />
                {'"qsdqsdqsdqsd sqdqsdqsd"'}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={4.5}>
          <Stack spacing={3}>
            <Box>qskld</Box>
            <Box>
              <AppReactDatepicker
                inline
             
              />
            </Box>
          </Stack>
        </Grid>
      </Grid>
    </>
  );
};

export default DashboardTopSection;
