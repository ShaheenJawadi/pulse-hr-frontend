"use client";

import DashboardSecondSection from "@/components/pages/dashboard/secondSection";
import DashboardTopSection from "@/components/pages/dashboard/topSection";
import { Stack } from "@mui/material";

const Dashboard=() =>{


  return (
   <Stack spacing={3}>

    <DashboardTopSection/>
    <DashboardSecondSection/>
   </Stack>
  );
}
 

export default Dashboard;