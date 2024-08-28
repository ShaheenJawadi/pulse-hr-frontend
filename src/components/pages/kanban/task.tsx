import {
  Avatar,
  Box,
  Card,
  CardContent,
  Chip,
  Divider,
  Stack,
  Typography,
} from "@mui/material";
import FilePresentIcon from "@mui/icons-material/FilePresent";
import ChatTwoToneIcon from "@mui/icons-material/ChatTwoTone";
import FilePresentTwoToneIcon from "@mui/icons-material/FilePresentTwoTone";

const KanbanTask = () => {
  return (
    <Card variant="elevation" sx={{ width: 300, maxWidth: 300 }}>
      <CardContent>
        <Stack spacing={2}>
          <Stack direction={"row"} sx={{ flexWrap: "wrap" }} gap={2}>
            <Box>
              <Chip label={"Haute Priorité"} variant="lightone" color="error" />
            </Box>
          </Stack>

          <Box>
            {" "}
            <Typography fontWeight={500} variant="body1">
              single qsjkd hjksqhdkjhqsjkdhkjqsdhjksqhd jksqhdkjqsdhsqkd sqjkhdk
              jsqd
            </Typography>
          </Box>

          <Stack alignItems={"center"} spacing={2} direction={"row"}>
            <Stack>
              <FilePresentTwoToneIcon color="secondary" fontSize="small" />
            </Stack>
            <Stack spacing={1} direction={"row"} alignItems={"center"}>
              <ChatTwoToneIcon color="secondary" fontSize="small" />
              <Typography color={"secondary"} variant="body2" >2</Typography>
            </Stack>
          </Stack>
          <Box>
            <Divider />
            <Stack
              spacing={2}
              alignSelf={"center"}
              direction={"row"}
              alignItems={"center"}
              justifyContent={"center"}
            >
              <Box>
                <Avatar src="/utils/goat.jpg" sx={{ height: 30, width: 30 }} />
              </Box>
              <Typography variant="body2" color="textSecondary">
                <b>Attribué par:</b> <br />
                <span>Shaheen jawadi</span>
              </Typography>
            </Stack>{" "}
           
          </Box>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default KanbanTask;
