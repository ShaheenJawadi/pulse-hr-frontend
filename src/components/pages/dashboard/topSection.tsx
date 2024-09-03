/* import AppReactDatepicker from "@/components/utils/datePicker"; */
import {
  Avatar,
  Badge,
  Box,
  Card,
  CardContent,
  Chip,
  colors,
  Divider,
  Grid,
  IconButton,
  LinearProgress,
  Stack,
  SvgIconProps,
  Typography,
} from "@mui/material";
import { useState, useEffect } from "react";
import Image from "next/image";

import ViewKanbanIcon from "@mui/icons-material/ViewKanban";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import EmailIcon from "@mui/icons-material/Email";
import NotificationsIcon from "@mui/icons-material/Notifications"; 

const DashboardTopSection = () => {
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={4.5}>
          <WelcomeCard />
        </Grid>
        <Grid item xs={3}>
          <ClockComponant />
          {/*  <MiddleCards /> */}
        </Grid>
        <Grid item xs={4.5}>
          <EmpOfWeek />
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
    <Card
      onClick={() => setImgBg(randomBg)}
      sx={{
        backgroundImage: `url(/dashboard/clock_bg/${imgBg}.jpg)`,
        backgroundSize: "cover",
        borderRadius: 2,
        backgroundPosition: "center",
        height: "100%",
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
  );
};

const WelcomeCard = () => {
  const [imgBg, setImgBg] = useState<number>(2);

  const changeImgBg = () => {
    if (imgBg < 14) {
      setImgBg(imgBg + 1);
    } else {
      setImgBg(1);
    }
  };

  return (
    <Card
      sx={{
        height: "100%",
        padding: 0,
        backgroundImage:
          "linear-gradient(to right bottom, #051937, #102f54, #194772, #1f6192, #237cb2, #2990c4, #34a5d4, #41bae4, #5dcbe8, #7bdbec, #98ebf1, #b6fbf7)",
        border: "unset",
      }}
    >
      <Stack
        direction={"row"}
        sx={{ height: "100%" }}
        alignItems={"self-end"}
        justifyContent={"space-between"}
      >
        <CardContent sx={{ height: "100%" }}>
          <Stack sx={{ height: "100%" }} justifyContent={"space-between"}>
            <Stack spacing={1}>
              <Typography variant="h4" color={"white"}>
                Bonjour Shaheen 👋
              </Typography>
              <Typography color={"white"} variant="h6">
                Prêt pour une journée productive !
              </Typography>
            </Stack>
            <Stack
              direction={"row"}
              alignItems={"center"}
              alignSelf={"center"}
              spacing={4}
            >
              <Badge variant="dot" color="error">
                <Card variant="lightone" color={"secondary"}>
                  <IconButton sx={{ color: "#fff" }}>
                    <ViewKanbanIcon />
                  </IconButton>
                </Card>
              </Badge>{" "}
              <Badge variant="dot" color="error">
                <Card variant="lightone" color={"secondary"}>
                  <IconButton sx={{ color: "#fff" }}>
                    <FormatListBulletedIcon />
                  </IconButton>
                </Card>{" "}
              </Badge>{" "}
              <Badge badgeContent={4} color="error">
                <Card variant="lightone" color={"secondary"}>
                  <IconButton sx={{ color: "#fff" }}>
                    <EmailIcon />
                  </IconButton>
                </Card>{" "}
              </Badge>{" "}
              <Badge badgeContent={4} color="error">
                <Card variant="lightone" color={"secondary"}>
                  <IconButton sx={{ color: "#fff" }}>
                    <NotificationsIcon />
                  </IconButton>
                </Card>{" "}
              </Badge>
            </Stack>
          </Stack>
        </CardContent>

        <Image
          onClick={() => changeImgBg()}
          src={`/dashboard/persons/${imgBg}.png`}
          width={200}
          height={200}
          alt=""
        />
      </Stack>
    </Card>
  );
};

const EmpOfWeek = () => {
  return (
    <Card
      sx={{
        height: "100%",
        padding: 0,
        backgroundImage:
          "linear-gradient(to  top left, #051937, #102f54, #194772, #1f6192, #237cb2, #2990c4, #34a5d4, #41bae4, #5dcbe8, #7bdbec, #98ebf1, #b6fbf7)",
        border: "unset",
      }}
    >
      <Stack
        direction={"row"}
        sx={{ height: "100%" }}
        alignItems={"self-end"}
        justifyContent={"space-between"}
      >
        <CardContent sx={{ height: "100%", width: "100%" }}>
          <Stack alignItems={"center"} justifyContent={"space-between"} direction={"row"} spacing={2}>
            <Box>
              <Typography variant="h5" color={"white"}>
                Employé de la semaine{" "}
                <Typography component={"strong"} fontSize={45}>
                  {" "}
                  🎊
                </Typography>

              </Typography>
              <Typography color={"white"} textAlign={"center"} variant="h6">
                Shaheen jawadi
              </Typography>
              <Card>
                <Stack spacing={2} padding={2} divider={<Divider />}>
                  <Stack
                    direction={"row"}
                    alignItems={"center"}
                    justifyContent={"space-between"}
                    spacing={3}
                  >
                    <Stack spacing={2} flex={1}>
                      <Typography
                        variant="body2"
                        color={"secondary"}
                        fontWeight={600}
                      >
                        Tâches accomplies
                      </Typography>
                      <Box>
                        <LinearProgress variant="determinate" value={50} />
                      </Box>
                    </Stack>

                    <Typography variant="h6" color={"success"}>
                      95%
                    </Typography>
                  </Stack>
                  <Stack
                    direction={"row"}
                    alignItems={"center"}
                    justifyContent={"space-between"}
                    spacing={3}
                  >
                    <Typography
                      variant="body2"
                      color={"secondary"}
                      fontWeight={600}
                    >
                      Score
                    </Typography>

                    <Typography variant="h6" color={"success"}>
                      253
                    </Typography>
                  </Stack>
                </Stack>
              </Card>
            </Box>
            <Box>
              <Stack alignItems={"center"} position={"relative"}>
                <Avatar
                  sx={{ width: 150, height: 150 }}
                  variant="rounded"
                  src={"/utils/goat.jpg"}
                />
                <Box sx={{ position: "absolute", bottom: -50, right: 0 }}>
                  <Image
                    src={`/dashboard/items/emp-week-badge.png`}
                    width={100}
                    height={100}
                    alt=""
                  />{" "}
                </Box>
              </Stack>
              
            </Box>
          </Stack>
        </CardContent>
      </Stack>
    </Card>
  );
};

export default DashboardTopSection;
