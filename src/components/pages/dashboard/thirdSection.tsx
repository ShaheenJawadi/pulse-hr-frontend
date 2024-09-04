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
     
    </Stack>
  );
};

 
export default DashboardThirSection;
