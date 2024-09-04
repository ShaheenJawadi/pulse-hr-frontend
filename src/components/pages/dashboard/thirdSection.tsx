import dynamic from "next/dynamic";
import { useTheme } from "@emotion/react";
import {
  Card,
  CardHeader,
  CardContent,
  Stack,
  Box,
  Divider,
  Avatar,
  Typography,
  Grid,
  LinearProgress,
} from "@mui/material";
import { ApexOptions } from "apexcharts"; 
import { count } from "console";
import FeaturedPlayListIcon from '@mui/icons-material/FeaturedPlayList';
import InventoryIcon from '@mui/icons-material/Inventory';
import BookmarkAddedIcon from '@mui/icons-material/BookmarkAdded';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import PeopleIcon from '@mui/icons-material/People';
const AppReactApexCharts = dynamic(
  () => import("@/components/charts/ApexChartWrapper")
);

const DashboardThirSection = () => {

    const jobOffers=[
        {
            title:"Offres d'emploi actives",
            count:5,
            icon:<FeaturedPlayListIcon color="primary" sx={{fontSize:35}}/>

        },
        {
            title:"Candidatures",
            count:5,
            icon:<PeopleIcon color="primary" sx={{fontSize:35}}/>
        },{
            title:"Présélectionnées",
            count:5,
            icon:<InventoryIcon color="primary" sx={{fontSize:35}}/>
        },{
            title:"Rejetées",
            count:5,
            icon:<ThumbDownIcon color="primary" sx={{fontSize:35}}/>
        },
        {
            title:"Acceptées",
            count:5,
            icon:<BookmarkAddedIcon color="primary" sx={{fontSize:35}}/>
        },
    ]

  return (
    <Stack spacing={3}>
      <Card>       <CardHeader sx={{borderBottom:"unset"}} title="Recrutement" />
        <CardContent>
          <Box>
            <Stack direction="row"    >
              {jobOffers.map((item) => (
                <Box flex={1}  >
                  <Stack spacing={5} direction={"row"}>
             
                    
                    <Card variant="lightone" color={"primary"} sx={{height:70 , width:70}}>
                        <Stack height={"100%"}  alignItems={"center"} justifyContent={"center"} >
                            {item.icon}
                        </Stack>

                    </Card>

                    <Stack spacing={2}>
                    <Typography >{item.title}</Typography>

                        <Typography fontWeight={600} variant="h5"  color={"secondary"}>{item.count}</Typography>
                    </Stack>
                  </Stack>
                </Box>
              ))}
              <Box></Box>
            </Stack>
          </Box>
        </CardContent>
      </Card>
      <Grid container spacing={3}>
        <Grid item xs={7.5} >
              <LeavesChart/>
        </Grid>
        <Grid item xs={4.5} >
        <TasksChart />
        </Grid>
        
      </Grid>
      <Box>

      </Box>
    </Stack>
  );
};

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


const LeavesChart = () => {
  
  type SeriesData = { x: Date; y: number }[];

  function generateDayWiseTimeSeries(range: { min: number; max: number }): SeriesData {
    const series: SeriesData = [];
    const count = Math.floor(Math.random() * 15) + 0;  
    const currentDate = new Date();
  
    for (let i = 0; i < count; i++) {
      const y =
        Math.floor(Math.random() * (range.max - range.min + 1)) + range.min;
  
      const randomDays = Math.floor(Math.random() * 365);  
      const randomDate = new Date(currentDate);
      randomDate.setDate(currentDate.getDate() - randomDays);
  
      series.push({
        x: randomDate,
        y,
      });
    }
  
    return series;
  }
    const series = [
      {
        name: 'Congé annuel',
        data: generateDayWiseTimeSeries( 
          {
            min: 5,
            max: 30,
          }
        ),
      },
      {
        name: 'Congé de maladie ',
        data: generateDayWiseTimeSeries( 
          {
            min: 3,
            max: 7,
          }
        ),
      },
      {
        name: 'Congé de maternité/paternité',
        data: generateDayWiseTimeSeries( 
          {
            min: 5,
            max: 30,
          }
        ),
      },
      {
        name: 'Congé sans solde ',
        data: generateDayWiseTimeSeries( 
          {
            min: 1,
            max: 10,
          }
        ),
      },
    
      {
        name: 'Congé de décès ',
        data: generateDayWiseTimeSeries( 
          {
            min: 1,
            max: 5,
          }
        ),
      },
      {
        name: 'Congé sabbatique ',
        data: generateDayWiseTimeSeries( 
          {
            min: 1,
            max: 4,
          }
        ),
      },
      {
        name: 'Congé parental ',
        data: generateDayWiseTimeSeries( 
          {
            min: 5,
            max: 15,
          }
        ),
      },
    
      {
        name: 'Congé exceptionnel ',
        data: generateDayWiseTimeSeries( 
          {
            min: 1,
            max: 7,
          }
        ),
      },
      {
        name:"Congé d'études",
        data: generateDayWiseTimeSeries( 
          {
            min: 3,
            max: 5,
          }
        ),
      },
    ];

  const options: ApexOptions =   {
    chart: {
      height: 450,
      type: 'scatter',
      zoom: {
        type: 'xy',
      },
    },
    colors: [
      "var(--mui-palette-info-light)",

      "var(--mui-palette-primary-light)",
      "var(--mui-palette-error-light)",
      "var(--mui-palette-warning-light)",
      "var(--mui-palette-success-light)",

      "var(--mui-palette-primary-main)",
      "var(--mui-palette-error-main)",
      "var(--mui-palette-warning-main)",
      "var(--mui-palette-success-main)",

    ],
    dataLabels: {
      enabled: false,
    },
    grid: {
      xaxis: {
        lines: {
          show: true,
        },
      },
      yaxis: {
        lines: {
          show: true,
        },
      },
    },
    xaxis: {
      type: 'datetime',
    },
    yaxis: {},
    legend: {
      markers: {
        strokeWidth: [1, 1, 3, 3, 1, 4, 1, 1, 1],
      },
    },
    markers: {
      shape: [
        'diamond',
        'triangle',
        'cross',
        'plus',
        'square',
        'line',
        'circle',
        'star',
        'sparkle',
      ],
      size: 10,
      fillOpacity: 0.8,
      strokeColors: '#333',
      strokeWidth: [1, 1, 3, 3, 1, 4, 1, 1, 1],
    },
  };
 
  return (
    <Card>
      <CardHeader
        title="Les demandes des congés"
        subheader=""
      />
      <CardContent>
        <AppReactApexCharts
          type="scatter"
          height={450}
          width="100%"
          options={options}
          series={series}
        />
      </CardContent>
    </Card>
  );
}
export default DashboardThirSection;
