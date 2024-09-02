import AppReactDatepicker from "@/components/utils/datePicker";
import { Box, Card, CardContent, Grid, Stack, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import Image from "next/image";

const DashboardTopSection = () => {

    const [imgBg, setImgBg] = useState<number>(1);

    const changeImgBg = () => {

        if (imgBg<14) {
            setImgBg(imgBg+1)
            
        }
        else {
            setImgBg(imgBg-1)
        }

    }

  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={7.5}>
          <Card sx={{padding:0}} variant="lightone" color="primary">
            <Stack direction={"row"} justifyContent={"space-between"}>
              <CardContent>
                <Typography variant="h5">
                  sdg jsqhdgjsqgdjhsq dqsdsqd
                </Typography>
                <Typography variant="body2">
                  sqdqsdqsdqsdsqd
                  <br />
                  {'"qsdqsdqsdqsd sqdqsdqsd"'}
                </Typography>
              </CardContent>
              <Box>
              <Image onClick={()=>changeImgBg()} src={`/dashboard/persons/${imgBg}.png`} width={200} height={200} alt="" />
              </Box>
            </Stack>
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
  const randomBg = () => Math.floor(Math.random() * 11) + 1;
  const [imgBg, setImgBg] = useState<number>(randomBg);

  const [time, setTime] = useState<string>(
    new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(
        new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        })
      );
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Box onClick={() => setImgBg(randomBg)}>
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
              sx={{
                userSelect: "none",
                fontSize: "6.5rem",
                color: "#fff",
                textShadow: "1px 4px 10px #070421a3",
              }}
            >
              {time}
            </Typography>
          </Stack>
        </CardContent>
      </Card>
    </Box>
  );
};
export default DashboardTopSection;
