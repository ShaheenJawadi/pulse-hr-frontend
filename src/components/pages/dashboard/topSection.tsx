import AppReactDatepicker from "@/components/utils/datePicker";
import { Box, Card, CardContent, Grid, Stack, Typography } from "@mui/material";

const DashboardTopSection = () => {


    const randomBg = Math.floor(Math.random() * 11) + 1;

    const imgBg=randomBg;
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
            <Box>
              <Card
                sx={{
                  backgroundImage: `url(/dashboard/clock_bg/${imgBg}.jpg)`, 
                  backgroundSize: "cover",
                  borderRadius: 2,
                  backgroundPosition: "center",
                  height: 150, 
                
                }}
              >
                <CardContent >
                  <Typography>12;30</Typography>
                </CardContent>
              </Card>
            </Box>
            <Box>
              <AppReactDatepicker inline />
            </Box>
          </Stack>
        </Grid>
      </Grid>
    </>
  );
};

export default DashboardTopSection;
