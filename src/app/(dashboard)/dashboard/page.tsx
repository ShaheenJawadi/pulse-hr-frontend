"use client";

import DashboardSecondSection from "@/components/pages/dashboard/secondSection";
import DashboardThirSection from "@/components/pages/dashboard/thirdSection";
import DashboardTopSection from "@/components/pages/dashboard/topSection";
import { Stack } from "@mui/material";

const Dashboard=() =>{


  return (
   <Stack spacing={3}>

    <DashboardTopSection/>
    <DashboardSecondSection/>
    <DashboardThirSection/>
   </Stack>
  );
}
 

export default Dashboard;