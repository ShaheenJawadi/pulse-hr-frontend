"use client";
import { Box, Card, Container, Dialog, Stack, Typography } from "@mui/material";
import { ChildrenType } from "@/types/themeTypes";
import Image from "next/image";
import WavingHandIcon from '@mui/icons-material/WavingHand';
const Layout = async ({ children }: ChildrenType) => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
    >
      <Card variant="elevation" sx={{ minWidth: 900, minHeight: 600 }}>
        <Stack direction={"row"}>
          <Image src="/auth/img.jpg" width={420} height={600} alt="logo" />
          <Stack flex={1} spacing={6} margin={10} alignItems={"center"}>
            <Image  src="/logo/logo.svg" width={240} height={80} alt="logo" />
            <Stack width={"100%"} direction={"row"} spacing={4} > <Typography variant="h5">Rebonjour </Typography> <WavingHandIcon color="primary"/></Stack>
           

            <Box>{children}</Box>
          </Stack>
        </Stack>
      </Card>
    </Box>
  );
};

export default Layout;
