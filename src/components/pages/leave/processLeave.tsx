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
            <Stack direction={"row"} spacing={2}>
              <Typography>Statut :</Typography>
              <Chip label="En attente" color="warning" />
            </Stack>
            <Stack direction={"row"} spacing={2}>
              <Typography>Date de début :</Typography>
              <Typography color={"secondary"}>01/01/2022</Typography>
            </Stack>
            <Stack direction={"row"} spacing={2}>
              <Typography>Date de fin :</Typography>
              <Typography color={"secondary"}>01/01/2022</Typography>
            </Stack>
            <Stack direction={"row"} spacing={2}>
              <Typography>Nombre de jours :</Typography>
              <Typography color={"secondary"}>1</Typography>
            </Stack>
            <Stack direction={"row"} spacing={2}>
              <Typography>Commentaire :</Typography>
              <Typography color={"secondary"}>
                qksjdhkjqshdqsjkdhksqjhdjkqshdkjqshdkjq hskdjhqskjdhsqjkdhkjsq
                hd jkqhskjdhsqkjdhksqj qslodiopqodsoiduoqisudoiqsdioqs
                dsqduiyqsiudyiuazodiuazoidu oaizudoiazud azdu azdazd
                azdjksqhduiqsy dyqsiduyqsiudy
              </Typography>
            </Stack>
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
