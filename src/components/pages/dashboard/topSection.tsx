/* import AppReactDatepicker from "@/components/utils/datePicker"; */
import {
  Badge,
  Box,
  Card,
  CardContent,
  Chip,
  colors,
  Grid,
  IconButton,
  Stack,
  SvgIconProps,
  Typography,
} from "@mui/material";
import { useState, useEffect } from "react";
import Image from "next/image";
import HailIcon from "@mui/icons-material/Hail";
import BadgeIcon from "@mui/icons-material/Badge";
import HotelIcon from "@mui/icons-material/Hotel";
import SelfImprovementIcon from "@mui/icons-material/SelfImprovement";
import ViewKanbanIcon from "@mui/icons-material/ViewKanban";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import EmailIcon from "@mui/icons-material/Email";
import NotificationsIcon from "@mui/icons-material/Notifications";
const DashboardTopSection = () => {
  return (
    <>
 
          <Grid container   spacing={2}>
            <Grid item xs={4.5}>
              <WelcomeCard />
            </Grid>
            <Grid item xs={4.5}>
              <MiddleCards />
            </Grid>
            <Grid item xs={3}>
              {/* <Stack spacing={3}> */}
                <ClockComponant />
                {/*     <Box>
              <AppReactDatepicker inline />
            </Box> */}
    {/*           </Stack> */}
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
 
      <Card onClick={() => setImgBg(randomBg)}
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

const MiddleCards = () => {
  type CardListItem = {
    title: string;
    value: string;
    icon: React.ReactElement<SvgIconProps>;
    color:
      | "primary"
      | "secondary"
      | "default"
      | "inherit"
      | "error"
      | "info"
      | "success"
      | "warning";
  };
  const cardList: CardListItem[] = [
    {
      title: "Total d'employés",
      value: "15",
      icon: <BadgeIcon sx={{ fontSize: 40 }} />,
      color: "primary",
    },
    {
      title: "Présents aujourd'hui",
      value: "12",
      icon: <HailIcon sx={{ fontSize: 40 }} />,
      color: "success",
    },
    {
      title: "Absents aujourd'hui",
      value: "1",
      icon: <HotelIcon sx={{ fontSize: 40 }} />,
      color: "error",
    },
    {
      title: "Employés en congé",
      value: "2",
      icon: <SelfImprovementIcon sx={{ fontSize: 40 }} />,
      color: "warning",
    },
  ];
  return (
    <Grid container spacing={2}>
      {cardList.map((item) => (
        <Grid item xs={6}>
          <Card sx={{ paddingX: 5, paddingY: 5 }} variant="elevation">
            <Stack
              justifyContent={"space-between"}
              alignItems={"center"}
              direction={"row"}
              spacing={2}
            >
              <Stack spacing={2}>
                <Typography
                  variant="body2"
                  color={"secondary"}
                  fontWeight={600}
                >
                  {item.title}
                </Typography>
                <Typography variant="body1" fontWeight={700}>
                  {item.value}
                </Typography>
              </Stack>
              <Box>
                <Card variant="lightone" color={item.color}>
                  <IconButton color={item.color}>{item.icon}</IconButton>
                </Card>
              </Box>
            </Stack>
          </Card>
        </Grid>
      ))}
    </Grid>
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
          width={180}
          height={180}
          alt=""
        />
      </Stack>
    </Card>
  );
};
export default DashboardTopSection;
