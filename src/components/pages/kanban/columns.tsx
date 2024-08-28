import {
  Box,
  Button,
  Card,
  CardContent,
  Stack,
  styled,
  Typography,
} from "@mui/material";
import KanbanTask from "./task";
import AddIcon from "@mui/icons-material/Add";

const ColumnBox = styled(Box)(({ theme }) => ({
  padding: 10,
  backgroundColor: "var(--mui-palette-primary-mainOpacity)",
  borderRadius: theme.shape.borderRadius,
  borderTopLeftRadius: 0,
  borderTopRightRadius: 0,
}));
const ColumnTitle = styled(Box)(({ theme }) => ({
  padding: 4,
  backgroundColor: "var(--mui-palette-secondary-lighterOpacity)",
  borderRadius:theme.shape.borderRadius,
  borderBottomLeftRadius: 0,
  borderBottomRightRadius: 0,
}));

const KanbanColumns = () => {
  return (
    <Stack>
  
        <ColumnTitle>
          <Typography textAlign={"center"} variant="h6" fontWeight={600} color={"secondary"}>
            TODO
          </Typography>
        </ColumnTitle>
     

      <Stack spacing={2}>
        <ColumnBox>
          <Stack spacing={2}>
            {[1, 2, 3, 4, 5].map((item, index) => {
              return <KanbanTask />;
            })}{" "}
          </Stack>
        </ColumnBox>
        <Button startIcon={<AddIcon />}>Ajouter une tâche</Button>
      </Stack>
    </Stack>
  );
};

export default KanbanColumns;
