"use client";
import { Box, Card, Container, Dialog, Stack, Typography } from "@mui/material";
import { ChildrenType } from "@/types/themeTypes";
import Image from "next/image";
import WavingHandIcon from "@mui/icons-material/WavingHand";
const Layout =  ({ children }: ChildrenType) => {
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
          <Stack flex={1} spacing={4} margin={10} mb={5} alignItems={"center"}>
            <Image src="/logo/logo.svg" width={240} height={80} alt="logo" />
            <Stack direction={"row"} spacing={4}>
              <Typography variant="body1">Rebonjour </Typography>
              <WavingHandIcon color="primary" />
            </Stack>
            <Stack flex={1} width={"100%"} spacing={2}>
              <>{children}</>
            </Stack>
            <Stack spacing={2} alignItems={"center"} >
              <Image
                src="/telnet/logo.webp"
                width={160}
                height={40}
                alt="telnet logo"
              />
              <Typography variant="caption">
                © 2024 TELNET. Tous droits réservés.
              </Typography>
            </Stack>
          </Stack>
        </Stack>
      </Card>
    </Box>
  );
};

export default Layout;
