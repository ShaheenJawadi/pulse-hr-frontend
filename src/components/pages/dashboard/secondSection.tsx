import {
  Avatar,
  Badge,
  Box,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  IconButton,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import Image from "next/image";
import LinearProgress from "@mui/material/LinearProgress";
import { ApexOptions } from "apexcharts";
import AppReactApexCharts from "@/components/charts/ApexChartWrapper";
import HailIcon from "@mui/icons-material/Hail";
import BadgeIcon from "@mui/icons-material/Badge";
import HotelIcon from "@mui/icons-material/Hotel";
import SelfImprovementIcon from "@mui/icons-material/SelfImprovement";
const DashboardSecondSection = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={3}>
       {/*  <EmpOfWeek /> */}
       <MiddleCards />
      </Grid>
      <Grid item xs={9}>
        <AttendanceByDeP />
      </Grid>
      <Grid item xs={12}>
        <TasksChart />
      </Grid>
    </Grid>
  );
};

/* const EmpOfWeek = () => {
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
          <Stack spacing={2}>
            <Typography variant="h5" color={"white"}>
              Employé de la semaine{" "}
              <Typography component={"strong"} fontSize={45}>
                {" "}
                🎊
              </Typography>
            </Typography>
            <Stack alignItems={"center"} position={"relative"}>
              <Avatar
                sx={{ width: 250, height: 250 }}
                variant="rounded"
                src={"/utils/goat.jpg"}
              />
              <Box sx={{ position: "absolute", bottom: -50, right: 0 }}>
                <Image
                  src={`/dashboard/items/emp-week-badge.png`}
                  width={120}
                  height={120}
                  alt=""
                />{" "}
              </Box>
            </Stack>
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
          </Stack>
        </CardContent>
      </Stack>
    </Card>
  );
};
 */
const TasksChart = () => {
  const theme = useTheme();

  const options: ApexOptions = {
    stroke: { dashArray: 8 },
    labels: ["Tâche terminée"],
    colors: ["var(--mui-palette-primary-main)"],
    states: {
      hover: {
        filter: { type: "none" },
      },
      active: {
        filter: { type: "none" },
      },
    },
    fill: {
      type: "gradient",
      gradient: {
        shade: "dark",
        opacityTo: 0.5,
        opacityFrom: 1,
        shadeIntensity: 0.5,
        stops: [30, 70, 100],
        inverseColors: false,
        gradientToColors: ["var(--mui-palette-primary-main)"],
      },
    },
    plotOptions: {
      radialBar: {
        endAngle: 130,
        startAngle: -140,
        hollow: { size: "60%" },
        track: { background: "transparent" },
        dataLabels: {
          name: {
            offsetY: -24,
            color: "var(--mui-palette-text-disabled)",
            fontFamily: theme.typography.fontFamily,
            fontSize: theme.typography.body2.fontSize as string,
          },
          value: {
            offsetY: 8,
            fontWeight: 500,
            formatter: (value) => `${value}%`,
            color: "var(--mui-palette-text-primary)",
            fontFamily: theme.typography.fontFamily,
            fontSize: theme.typography.h3.fontSize as string,
          },
        },
      },
    },
    grid: {
      padding: {
        top: -18,
        left: 0,
        right: 0,
        bottom: 14,
      },
    },
  };

  return (
    <Card>
      <CardHeader title="Suivi des tickets" subheader="Les 7 derniers jours" />
      <CardContent>
        <AppReactApexCharts
          type="radialBar"
          height={300}
          width="100%"
          series={[35]}
          options={options}
        />
      </CardContent>
    </Card>
  );
};

const AttendanceByDeP = () => {
  const series = [
    {
      name: "Present - Yesterday",
      group: "Yesterday",
      data: [10, 12, 8, 15, 6, 9],
    },
    {
      name: "Absent - Yesterday",
      group: "Yesterday",
      data: [4, 6, 5, 3, 2, 4],
    },
    {
      name: "Late - Yesterday",
      group: "Yesterday",
      data: [2, 4, 3, 2, 1, 3],
    },
    {
      name: "Present - Today",
      group: "Today",
      data: [12, 15, 10, 18, 7, 10],
    },
    {
      name: "Absent - Today",
      group: "Today",
      data: [5, 7, 6, 4, 3, 5],
    },
    {
      name: "Late - Today",
      group: "Today",
      data: [3, 5, 4, 2, 2, 4],
    },
  ];

  const options: ApexOptions = {
    chart: {
      type: "bar",
      stacked: true,
    },
    stroke: {
      width: 1,
      colors: ["#fff"],
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "60%", // Adjust column width for spacing
      },
    },
    xaxis: {
      categories: [
        "Sales",
        "Marketing",
        "HR",
        "Development",
        "Support",
        "Finance",
      ],
    },
    fill: {
      opacity: 1,
    },
    colors: [
      "var(--mui-palette-primary-mainOpacity)",
      "var(--mui-palette-error-mainOpacity)",
      "var(--mui-palette-warning-mainOpacity)",
      "var(--mui-palette-primary-main)",
      "var(--mui-palette-error-main)",
      "var(--mui-palette-warning-main)",
    ],
    yaxis: {
      max: 45,
      labels: {
        formatter: (val) => val,
      },
    },
    legend: {
      position: "top",
      horizontalAlign: "left",
    },
    tooltip: {
      shared: true,
      intersect: false,
    },
    grid: {
      padding: {
        top: -16,
        left: -18,
        right: -17,
        bottom: -11,
      },
    },
  };

  return (
    <Card>
      <CardHeader
        title="Suivi des départements"
        subheader="Hier vs Aujourd'hui"
      />
      <CardContent>
        <AppReactApexCharts
          type="bar"
          height={400}
          width="100%"
          options={options}
          series={series}
        />
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
      <Stack spacing={2}>
        {cardList.map((item) => (
          <Box>
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
          </Box>
        ))}
      </Stack>
    );
  };
  
export default DashboardSecondSection;
