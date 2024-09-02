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
            <ClockComponant />
            <Box>
              <AppReactDatepicker inline />
            </Box>
          </Stack>
        </Grid>
      </Grid>
    </>
  );
};

const ClockComponant = () => {
  const randomBg = Math.floor(Math.random() * 11) + 1;

  const imgBg = randomBg;

  return (
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
        <CardContent sx={{ height: "100%" }}>
          <Stack
            sx={{ height: "100%" }}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <Typography
              variant="h4"
              sx={{
                fontSize: "6.5rem",
                color: "#fff",
                textShadow: "1px 4px 10px #070421a3",
              }} 
            >
              12:30
            </Typography>
          </Stack>
        </CardContent>
      </Card>
    </Box>
  );
};
export default DashboardTopSection;