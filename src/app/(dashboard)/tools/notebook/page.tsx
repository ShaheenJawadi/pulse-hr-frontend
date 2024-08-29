"use client";
import PagerHeader from "@/components/listingPages/pageHeader";
import columns from "@/components/pages/kanban/columns";
import { InputField } from "@/components/utils/InputField";
import {
  Stack,
  Paper,
  Grid,
  Box,
  Divider,
  Card,
  CardContent,
  CardHeader,
  Typography,
  IconButton,
  Fab,
  Button,
} from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import SearchIcon from "@mui/icons-material/Search";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import NoteAddIcon from "@mui/icons-material/NoteAdd";
import SaveIcon from '@mui/icons-material/Save';
import QuillEditor from "@/components/utils/quillEditor";

const NotePadPage = () => {
  return (
    <Stack spacing={3}>
      <PagerHeader title="Bloc notes" />

      <Paper className="mainPaper">
        <Box paddingX={3}>
          <Grid container spacing={5}>
            <Grid item sm={4}>
              <Box>
                <Stack
                  divider={<Divider orientation="vertical" />}
                  spacing={10}
                  direction={"row"}
                  alignContent={"center"}
                >
                  <Box flex={1}>
                    <NotesList />
                  </Box>
                </Stack>
              </Box>
            </Grid>

            <Grid item sm={8}>
              <NoteContent />
            </Grid>
          </Grid>
        </Box>
      </Paper>
    </Stack>
  );
};

const NotesList = () => {
  return (
    <Stack spacing={3}>
      <Stack
        justifyContent={"space-between"}
        alignItems={"center"}
        direction={"row"}
      >
        <Box>
          <InputField
            startAdornment={<SearchIcon />}
            size="small"
            label={"Recherche"}
          />
        </Box>
        <Fab variant="circular" color="secondary" size="medium">
          <NoteAddIcon />
        </Fab>
      </Stack>

      <Box>
        <Stack spacing={2}>
          <Card variant="lightone" color={"primary"}>
            <CardContent>
              <Stack spacing={1}>
                <Typography color={"primary"}>sqdqs</Typography>
                <Stack
                  direction={"row"}
                  justifyContent={"space-between"}
                  alignItems={"center"}
                >
                  <Typography variant="caption">04/05/2025</Typography>
                  <IconButton size="small">
                    <DeleteForeverIcon sx={{ fontSize: 18 }} />
                  </IconButton>
                </Stack>
              </Stack>
            </CardContent>
          </Card>
          <Card variant="lightone" color={"warning"}>
            <CardContent>
              <Stack spacing={1}>
                <Typography color={"warning"}>sqdqs</Typography>
                <Stack
                  direction={"row"}
                  justifyContent={"space-between"}
                  alignItems={"center"}
                >
                  <Typography variant="caption">04/05/2025</Typography>
                  <IconButton size="small">
                    <DeleteForeverIcon sx={{ fontSize: 18 }} />
                  </IconButton>
                </Stack>
              </Stack>
            </CardContent>
          </Card>
          <Card variant="lightone" color={"error"}>
            <CardContent>
              <Stack spacing={1}>
                <Typography color={"error"}>sqdqs</Typography>
                <Stack
                  direction={"row"}
                  justifyContent={"space-between"}
                  alignItems={"center"}
                >
                  <Typography variant="caption">04/05/2025</Typography>
                  <IconButton size="small">
                    <DeleteForeverIcon sx={{ fontSize: 18 }} />
                  </IconButton>
                </Stack>
              </Stack>
            </CardContent>
          </Card>
        </Stack>
      </Box>
    </Stack>
  );
};

const NoteContent = () => {
  return (
    <Stack spacing={3}>
{/*       <CreateEditNote /> */}
      <Card sx={{ height: "100%", padding: 3 }} variant="outlined">
        <Stack spacing={2}>
          <Typography variant="h6" color={"primary"}>
            title lksqjdlksqjdiosqdioqsdsqd,qs ldkjsqlkd
          </Typography>
          <Box>
            <div>
              <h4>qsjkld klqskldsqkldj </h4>

              <p>qsqskldjlksq dkjsqlkd jlsqkdjklsqdl qskld</p>

              <ol>
                <li data-list="bullet">
                  <span></span>sqkldlkqsdqsdqskd q
                </li>
                <li data-list="bullet">
                  <span></span>dqsmlkdqmlskdmlqsd
                </li>
                <li data-list="bullet">
                  <span></span>qsmkldmsqldkmqsd
                </li>
              </ol>

              <p>
                lmqsjkdmlsqdqsdqlmskd mlksqmldkmlsqkdmlqksmldkqmlsd kpoza doaz
                jdlk ajzaljdlkasjd oasjdlksqdsqdqsdqsdqskjdklqsjdioiozajdlksqj
                dklsqjlkdhsqkld jlmsqkjdklsqjldmjioazd
              </p>

              <ol>
                <li data-list="ordered">
                  <span></span>qsdmlksqmld
                </li>
                <li data-list="ordered">
                  <span></span>dsqmlkdmlsqd
                </li>
                <li data-list="ordered">
                  <span></span>qsmlkdmlqsd
                </li>
              </ol>
            </div>
          </Box>
        </Stack>
      </Card>

      <Stack
        direction={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Stack direction={"row"}>
          <IconButton color="primary">
            <CircleIcon sx={{ fontSize: 18 }} />
          </IconButton>
          <IconButton color="secondary">
            <CircleIcon sx={{ fontSize: 18 }} />
          </IconButton>
          <IconButton color="success">
            <CircleIcon sx={{ fontSize: 18 }} />
          </IconButton>
          <IconButton color="error">
            <CircleIcon sx={{ fontSize: 18 }} />
          </IconButton>
          <IconButton color="info">
            <CircleIcon sx={{ fontSize: 18 }} />
          </IconButton>
          <IconButton color="warning">
            <CircleIcon sx={{ fontSize: 18 }} />
          </IconButton>
        </Stack>
        <Box>
          <Button startIcon={<ModeEditIcon />}>Modifier</Button>
        </Box>
      </Stack>
    </Stack>
  );
};

const CreateEditNote = () => {
  return (
    <Stack spacing={1}>
      <InputField label="Titre" />
      <QuillEditor value={""} onChange={(text) => console.log(text)} />
      <Button startIcon={<SaveIcon />}>Enregistrer</Button>
    </Stack>
  );
};
export default NotePadPage;
