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
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import NoteAddIcon from "@mui/icons-material/NoteAdd";

const NotePadPage = () => {
  return (
    <Stack spacing={3}>
      <PagerHeader title="Départements" />

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
      <Box>
        <InputField
          startAdornment={<SearchIcon />}
          size="small"
          label={"Recherche"}
        />
      </Box>

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


export default NotePadPage;
