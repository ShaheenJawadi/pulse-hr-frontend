import AppReactDatepicker from "@/components/utils/datePicker";
import {
  Box,
  Card,
  CardContent,
  Chip,
  colors,
  Grid,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import { useState, useEffect } from "react";
import Image from "next/image";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import { title } from "process";
const DashboardTopSection = () => {
  const [imgBg, setImgBg] = useState<number>(1);

  const changeImgBg = () => {
    if (imgBg < 14) {
      setImgBg(imgBg + 1);
    } else {
      setImgBg(imgBg - 1);
    }
  };

  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={4.5}>
          <Card
            sx={{
              padding: 0,
              backgroundImage:
                "linear-gradient(to right bottom, #051937, #102f54, #194772, #1f6192, #237cb2, #2990c4, #34a5d4, #41bae4, #5dcbe8, #7bdbec, #98ebf1, #b6fbf7)",
              border: "unset",
            }}
          >
            <Stack direction={"row"} justifyContent={"space-between"}>
              <CardContent>
                <Stack spacing={1}>
                  <Typography variant="h4" color={"white"}>
                    Bonjour Shaheen 👋
                  </Typography>
                  <Typography color={"white"} variant="h6">
                    Prêt pour une journée productive !
                  </Typography>
                </Stack>
              </CardContent>
              <Box>
                <Image
                  onClick={() => changeImgBg()}
                  src={`/dashboard/persons/${imgBg}.png`}
                  width={180}
                  height={180}
                  alt=""
                />
              </Box>
            </Stack>
          </Card>
        </Grid>
        <Grid item xs={4.5}>
          <MiddleCards />
        </Grid>
        <Grid item xs={3}>
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

const MiddleCards = () => {

 
  return (
    <Grid container spacing={2}>
      {[1, 2, 3,4].map((item) => (
        <Grid item xs={6}>
          <Card sx={{ paddingX: 5, paddingY: 8 }} variant="elevation">
            <Stack
              justifyContent={"space-between"}
              alignItems={"center"}
              direction={"row"}
              spacing={2}
            >
              <Stack spacing={2}>
                <Typography variant="body2" color={"secondary"} fontWeight={600}>Temps de travail</Typography>
                <Typography variant="body1" fontWeight={700}>4h 30m</Typography>
              </Stack>
              <Box>
                <Card variant="lightone" color={"primary"}>
                  <IconButton color="primary">
                    <AccessTimeFilledIcon sx={{ fontSize: 40 }} />
                  </IconButton>
                </Card>
              </Box>
            </Stack>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};
export default DashboardTopSection;
