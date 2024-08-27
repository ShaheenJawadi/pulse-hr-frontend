import { CustomInfoData } from "@/components/utils/InfoDataCustom";
import { InputField } from "@/components/utils/InputField";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  Checkbox,
  Chip,
  Divider,
  FormControlLabel,
  Stack,
  Typography,
} from "@mui/material";

const ProcessLeave = () => {
  return (
    <Stack spacing={3}>
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
          <Stack spacing={2}>
            <Typography variant="h6">Demande de congé</Typography>

            <CustomInfoData title={"Statut :"} info={ <Chip label="En attente" color="warning" />}/>
            <CustomInfoData title={"Date de début :"} info={ "01/01/2022"}/>
            <CustomInfoData title={"Date de fin :"} info={ "01/01/2022"}/>


            <CustomInfoData title={"Nombre de jours :"} info={ "1"}/> 
            <CustomInfoData title={"Commentaire :"} info={"qksjdhkjqshdqsjkdhksqjhdjkqshdkjqshdkjq hskdjhqskjdhsqjkdhkjsqhd jkqhskjdhsqkjdhksqj qslodiopqodsoiduoqis"}/>
            
         
           
           
            <Stack direction={"row"} spacing={2}>
              <Typography>Justificatif :</Typography>
              <Stack spacing={1} flex={1}>
                <Stack direction={"row"} alignItems={"center"}>
                  <Typography color={"secondary"} variant="body2">
                    Certificat
                  </Typography>

                  <Divider sx={{ flex: 1 }} />
                  <Button>
                    <Chip label="Télécharger" color="primary" />
                  </Button>
                </Stack>
                <Stack direction={"row"} alignItems={"center"}>
                  <Typography color={"secondary"} variant="body2">
                    Certificat
                  </Typography>

                  <Divider sx={{ flex: 1 }} />
                  <Button>
                    <Chip label="Télécharger" color="primary" />
                  </Button>
                </Stack>
              </Stack>
            </Stack>
          </Stack>
        </CardContent>
      </Card>

      <Button color="primary">Afficher l'historique des congés</Button>

      <Divider textAlign="left">
        <Chip label={"Agissez"} size="medium" color="secondary" />
      </Divider>

      <InputField label="Commantaire" type={"text"} multiline rows={4} />
      <FormControlLabel
        control={<Checkbox defaultChecked={false} />}
        label="Je valide ma décision"
      />

      <Stack alignSelf={"center"} direction={"row"} spacing={2}>
        <Button variant="contained" color="success">
          Accepter la demande
        </Button>
        <Button variant="contained" color="error">
          Refuser la demande
        </Button>
      </Stack>
    </Stack>
  );
};

export default ProcessLeave;
