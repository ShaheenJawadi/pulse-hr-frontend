import React from "react";
import {
  Box,
  Button,
  Stack,
  styled,
  Typography,
} from "@mui/material";
import KanbanTask from "./task";
import AddIcon from "@mui/icons-material/Add";
import { KanbanColumnType, KanbanTasksType } from "@/types/kanbanTypes";
import { Draggable } from "react-beautiful-dnd";

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
  borderRadius: theme.shape.borderRadius,
  borderBottomLeftRadius: 0,
  borderBottomRightRadius: 0,
}));

interface KanbanColumnsProps {
  column: KanbanColumnType;
  tasks: KanbanTasksType[];
}

const KanbanColumns = ({ column, tasks }: KanbanColumnsProps) => {
  return (
    <Stack  >
      <ColumnTitle>
        <Typography
          textAlign={"center"}
          variant="h6"
          fontWeight={600}
          color={"secondary"}
        >
          {column.title}
        </Typography>
      </ColumnTitle>

      <Stack spacing={2}>
        <ColumnBox>
          <Stack spacing={2}>
            {column?.tasks?.map((task, index) => (
                <Draggable key={task.id}  draggableId={`task-${task.id}`} index={index}>
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps} 
                    >
                      <KanbanTask task={task} />
                    </div>
                  )}
                </Draggable>
              ))}
          </Stack>
        </ColumnBox>
        <Button startIcon={<AddIcon />}>Ajouter une tâche</Button>
      </Stack>
    </Stack>
  );
};

export default KanbanColumns;
