"use client";

import DashboardFourthSection from "@/components/pages/dashboard/fourthSection";
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
    <DashboardFourthSection/>
   </Stack>
  );
}
 

export default Dashboard;