import { CustomInfoData } from "@/components/utils/InfoDataCustom";
import { InputField } from "@/components/utils/InputField";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent, 
  Chip,
  Divider, 
  Stack,
  Typography,
} from "@mui/material";
import OutputIcon from '@mui/icons-material/Output';

import LoginIcon from '@mui/icons-material/Login';
const ClockOutDialog = () => {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    
 

    return (
        <Stack spacing={2}>
      <Stack direction={"row"} spacing={1} alignItems={"center"}>
        <Divider sx={{ flex: 1 }} />
        <Card
          is={"bg-secondary"}
          sx={{ padding: 2, backgroundColor: "secondary" }}
        >
          <Stack direction={"row"} spacing={4}>
            <Box>
              <Avatar
                sx={{ width: 75, height: 75 }}
                variant="rounded"
                src={"/utils/goat.jpg"}
              />
            </Box>
            <Stack spacing={1}>
              <Typography color={"white"}> nom & prenom</Typography>
              <Typography color={"white"}> departement</Typography>
              <Typography color={"white"}> poste</Typography>
            </Stack>
          </Stack>
        </Card>

        <Divider sx={{ flex: 1 }} />
      </Stack>
      <Card>
        <CardContent>
          <Stack spacing={1}>
            <Typography variant="h6">Pointage de sortie</Typography>
            <CustomInfoData title={"Votre IP:"} info={"197.150.12.4"}/>


            <CustomInfoData title={"Temps:"} info={`${hours}:${minutes}:${seconds}`}/>
 


          </Stack>
        </CardContent>
      </Card>

 
      <InputField label="Commantaire" type={"text"} multiline rows={2} />
  

      <Stack alignSelf={"center"} direction={"row"} spacing={2}>
        <Button startIcon={ <OutputIcon/> } variant="contained" color="primary">
        Sortie
        </Button>
       
      </Stack>
    </Stack>
    )

}


export default ClockOutDialog;