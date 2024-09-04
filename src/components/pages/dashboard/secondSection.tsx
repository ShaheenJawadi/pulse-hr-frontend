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
import dynamic from 'next/dynamic'
import Image from "next/image";
import LinearProgress from "@mui/material/LinearProgress";
import { ApexOptions } from "apexcharts"; 
import HailIcon from "@mui/icons-material/Hail";
import BadgeIcon from "@mui/icons-material/Badge";
import HotelIcon from "@mui/icons-material/Hotel";
import SelfImprovementIcon from "@mui/icons-material/SelfImprovement";
const AppReactApexCharts = dynamic(() => import("@/components/charts/ApexChartWrapper"))

const DashboardSecondSection = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={3}>
       {/*  <EmpOfWeek /> */}
       <ListCard />
      </Grid>
      <Grid item xs={9}>
        <AttendanceByDeP />
      </Grid>
    
    </Grid>
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
          height={300}
          width="100%"
          options={options}
          series={series}
        />
      </CardContent>
    </Card>
  );
};


const ListCard = () => {
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
      <Stack height={"100%"} spacing={2}>
        {cardList.map((item) => (
          <Box flex={1}>
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
