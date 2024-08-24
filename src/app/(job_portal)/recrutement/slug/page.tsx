"use client";
import Image from "next/image";

import {
  Button,
  Box,
  Card,
  Typography,
  CardContent,
  Stack,
} from "@mui/material";

const SingleJobPost = () => {
  return (
    <Box padding={2}>
      <Stack spacing={10}>
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Image src="/telnet/logo.webp" width={220} height={55} alt="" />
          <Button variant="outlined" size="large" color="primary">
            Find more
          </Button>
        </Stack>

        <Stack spacing={4} alignItems={"center"}>
          <Typography variant="h3" color={"#000"}>
            {" "}
            Job title ksqdkjlsq kdhkqjlh duioqs ydiusqd
          </Typography>
          <Typography variant="h6">
            {" "}
            short description qsk:jd lkqsjdkl sqjkd hkjsqdh ksqjkdhsqui dui
            qskduyqs jdlksqjdkhsqkjdhuk sqgd jgsqjdg sqhgdsqhd ghqsfdhg
          </Typography>
        </Stack>

        <Card>
          <CardContent>
            <Stack spacing={4} direction={"row"}>
              <Stack flex={1} spacing={2}>
                <Box>
                  <Typography variant="h6">title</Typography>
                  <Typography variant="subtitle1">info</Typography>
                </Box>
                <Box>
                  <Typography variant="h6">title</Typography>
                  <Typography variant="subtitle1">info</Typography>
                </Box>
              </Stack>
              <Stack flex={1} spacing={2}>
                <Box>
                  <Typography variant="h6">title</Typography>
                  <Typography variant="subtitle1">info</Typography>
                </Box>
                <Box>
                  <Typography variant="h6">title</Typography>
                  <Typography variant="subtitle1">info</Typography>
                </Box>
              </Stack>
            </Stack>
          </CardContent>
        </Card>

        <Stack spacing={4}>
          <Typography variant="h6">Description</Typography>
          <Typography variant="body1">
            qskjdhkjqsh dkjhsqjkd hjksqh kdjhsqkdhk qskjdhkjqsh dkjhsqjkd hjksqh
            kdjhsqkdhk qskjdhkjqsh dkjhsqjkd hjksqh kdjhsqkdhk qskjdhkjqsh
            dkjhsqjkd hjksqh kdjhsqkdhk qskjdhkjqsh dkjhsqjkd hjksqh kdjhsqkdhk
            qskjdhkjqsh dkjhsqjkd hjksqh kdjhsqkdhk qskjdhkjqsh dkjhsqjkd hjksqh
            kdjhsqkdhk qskjdhkjqsh dkjhsqjkd hjksqh kdjhsqkdhk qskjdhkjqsh
            dkjhsqjkd hjksqh kdjhsqkdhk qskjdhkjqsh dkjhsqjkd hjksqh kdjhsqkdhk
            qskjdhkjqsh dkjhsqjkd hjksqh kdjhsqkdhk qskjdhkjqsh dkjhsqjkd hjksqh
            kdjhsqkdhk qskjdhkjqsh dkjhsqjkd hjksqh kdjhsqkdhk qskjdhkjqsh
            dkjhsqjkd hjksqh kdjhsqkdhk qskjdhkjqsh dkjhsqjkd hjksqh kdjhsqkdhk
            qskjdhkjqsh dkjhsqjkd hjksqh kdjhsqkdhk qskjdhkjqsh dkjhsqjkd hjksqh
            kdjhsqkdhk qskjdhkjqsh dkjhsqjkd hjksqh kdjhsqkdhk qskjdhkjqsh
            dkjhsqjkd hjksqh kdjhsqkdhk qskjdhkjqsh dkjhsqjkd hjksqh kdjhsqkdhk
            qskjdhkjqsh dkjhsqjkd hjksqh kdjhsqkdhk qskjdhkjqsh dkjhsqjkd hjksqh
            kdjhsqkdhk qskjdhkjqsh dkjhsqjkd hjksqh kdjhsqkdhk qskjdhkjqsh
            dkjhsqjkd hjksqh kdjhsqkdhk qskjdhkjqsh dkjhsqjkd hjksqh kdjhsqkdhk
            qskjdhkjqsh dkjhsqjkd hjksqh kdjhsqkdhk qskjdhkjqsh dkjhsqjkd hjksqh
            kdjhsqkdhk qskjdhkjqsh dkjhsqjkd hjksqh kdjhsqkdhk qskjdhkjqsh
            dkjhsqjkd hjksqh kdjhsqkdhk qskjdhkjqsh dkjhsqjkd hjksqh kdjhsqkdhk
            qskjdhkjqsh dkjhsqjkd hjksqh kdjhsqkdhk qskjdhkjqsh dkjhsqjkd hjksqh
            kdjhsqkdhk qskjdhkjqsh dkjhsqjkd hjksqh kdjhsqkdhk qskjdhkjqsh
            dkjhsqjkd hjksqh kdjhsqkdhk qskjdhkjqsh dkjhsqjkd hjksqh kdjhsqkdhk
            qskjdhkjqsh dkjhsqjkd hjksqh kdjhsqkdhk qskjdhkjqsh dkjhsqjkd hjksqh
            kdjhsqkdhk qskjdhkjqsh dkjhsqjkd hjksqh kdjhsqkdhk qskjdhkjqsh
            dkjhsqjkd hjksqh kdjhsqkdhk qskjdhkjqsh dkjhsqjkd hjksqh kdjhsqkdhk
            qskjdhkjqsh dkjhsqjkd hjksqh kdjhsqkdhk qskjdhkjqsh dkjhsqjkd hjksqh
            kdjhsqkdhk qskjdhkjqsh dkjhsqjkd hjksqh kdjhsqkdhk qskjdhkjqsh
            dkjhsqjkd hjksqh kdjhsqkdhk
          </Typography>
        </Stack>

        <Stack alignItems={"center"}>
          <Box>
            <Button
              color="primary"
              size="large"
              sx={{ paddingX: 25 }}
              variant="contained"
            >
              Postuler
            </Button>
          </Box>
        </Stack>
      </Stack>
    </Box>
  );
};
/* maybe add share btn and copy link  */

export default SingleJobPost;
