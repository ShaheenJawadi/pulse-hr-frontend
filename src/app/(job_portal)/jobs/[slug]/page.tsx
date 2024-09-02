"use client";
import Image from "next/image";

import {
  Button,
  Box,
  Card,
  Typography,
  CardContent,
  Stack,
  Grid,
  Chip,
} from "@mui/material";
import { info } from "console";
import CorporateFareTwoToneIcon from "@mui/icons-material/CorporateFareTwoTone";
import LanguageIcon from "@mui/icons-material/Language";
import LocationOnTwoToneIcon from "@mui/icons-material/LocationOnTwoTone";
import StickyNote2TwoToneIcon from "@mui/icons-material/StickyNote2TwoTone";
import WorkHistoryTwoToneIcon from "@mui/icons-material/WorkHistoryTwoTone";
import { ROUTING } from "@/utils/routes";
import { useDrawerAction } from "@/components/drawer/drawer.context";
import { PublicJobListingService } from "@/services/publicListing";
import { JobOffer } from "@/modules/JobOffer";

const SingleJobPost = ({ params }: { params: { slug: string } }) => {
  const { data, error, isLoading } = PublicJobListingService.useSingleQuery(
    params.slug
  );
  const { openDrawer } = useDrawerAction();

  const openApply = () => {
    openDrawer("OPEN_APPLY_DRAWER", { id: data?.id });
  };

  return (
    <Box padding={2}>
      <Stack spacing={10}>
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Image src="/telnet/logo.webp" width={180} height={45} alt="" />
          <Button
            href={ROUTING.PUBLIC.JOBLISTING.MAIN}
            variant="outlined"
            size="large"
            color="primary"
          >
            Trouver plus
          </Button>
        </Stack>
        <Stack spacing={4}>
          <Stack spacing={4} alignItems={"center"}>
            <Typography variant="h3" color={"#000"}>
              {data?.title}
            </Typography>
            <Typography variant="h6">{data?.short_description}</Typography>

            <Stack spacing={1} direction={"row"}>
              {data?.tags.map((tag, index) => (
                <Chip
                  variant="outlined"
                  size="small"
                  color="primary"
                  label={tag}
                />
              ))}
            </Stack>
          </Stack>

          <BreifCard single={data ? data :null} />

          <Card>
            <CardContent>
              <Stack spacing={4}>
                <Typography variant="h6">Description</Typography>
                <Typography
                  dangerouslySetInnerHTML={{ __html: data?.requirements || "" }}
                  variant="body1"
                />
              </Stack>
            </CardContent>
          </Card>

          <Stack alignItems={"center"}>
            <Box>
              <Button
                onClick={() => openApply()}
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
      </Stack>
    </Box>
  );
};
/* maybe add share btn and copy link  */

const BreifCard = ({ single }: { single: JobOffer|null }) => {
  const data = [
    {
      title: "Emplacement",
      info: single?.location,
      icon: <LocationOnTwoToneIcon color="primary" sx={{ fontSize: 29 }} />,
    },
    {
      title: "Departement",
      info: "IT addddddddddddddddddd",
      icon: <CorporateFareTwoToneIcon color="primary" sx={{ fontSize: 29 }} />,
    },
    {
      title: "Expérience",
      info: single?.max_experience
        ? `${single.min_experience} - ${single.max_experience} ans`
        : `${single?.min_experience} ans`,
      icon: <WorkHistoryTwoToneIcon color="primary" sx={{ fontSize: 29 }} />,
    },
    {
      title: "Type de contrat",
      info: "addddddddddd",
      icon: <StickyNote2TwoToneIcon color="primary" sx={{ fontSize: 29 }} />,
    },
  ];
  return (
    <Stack alignItems={"center"}>
      <Card sx={{ width: 800 }}>
        <CardContent>
          <Grid spacing={6} container>
            {data.map((item) => {
              return (
                <Grid item sm={6}>
                  <Stack direction={"row"} spacing={4}>
                    {item.icon}
                    <Stack spacing={2}>
                      <Typography variant="body1">{item.title}</Typography>
                      <Typography variant="h6" sx={{ color: "#000" }}>
                        {item.info}
                      </Typography>
                    </Stack>
                  </Stack>
                </Grid>
              );
            })}
          </Grid>
        </CardContent>
      </Card>
    </Stack>
  );
};

export default SingleJobPost;
