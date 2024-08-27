import { Box, Stack, Typography } from "@mui/material";

type Props = {
  title: string;
  info: React.ReactNode;
};

const CustomInfoData = ({ title, info }: Props) => {
  if (typeof info === "string") {
  

  return (
    <Stack direction={"row"} spacing={2}>
      <Typography>{title}</Typography>
      <Typography color={"secondary"}>{info}</Typography>
    </Stack>
  );}

  else {
  

    return (
      <Stack direction={"row"} spacing={2}>
        <Typography>{title}</Typography>
        <Box>{info}</Box>
      </Stack>
    );}
};


export { CustomInfoData };  
