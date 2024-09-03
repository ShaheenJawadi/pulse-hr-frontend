import {
  Avatar,
  Badge,
  Box,
  Card,
  CardContent,
  Divider,
  Grid,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import Image from "next/image";
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';

const DashboardSecondSection = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={3}>
        <EmpOfWeek />
      </Grid>
      <Grid item xs={9}>
        qsdqsdqs
      </Grid>
    </Grid>
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
        <CardContent sx={{ height: "100%" ,width:"100%"}}>
          
            <Stack spacing={2} >
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
                <Box sx={{position:"absolute" , bottom:-50, right:0}}>

               
                <Image
                  src={`/dashboard/items/emp-week-badge.png`}
                  width={120}
                  height={120}
                  alt=""
                /> </Box>
              </Stack>
              <Typography color={"white"} textAlign={"center"} variant="h6">
                Shaheen jawadi
              </Typography>

              <Card>
                <Stack  spacing={2}   padding={2} divider={<Divider/>}>
                    
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
              
                    
                  <Typography variant="h6" color={"success"}>95%</Typography>
                
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
                     
                
              
                    
                  <Typography variant="h6" color={"success"}>253</Typography>
                
                </Stack>
                </Stack>
              </Card>
            </Stack>
    
        </CardContent>
      </Stack>
    </Card>
  );
};

export default DashboardSecondSection;
