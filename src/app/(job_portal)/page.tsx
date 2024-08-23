"use client";

import Image from "next/image";
import styles from "./page.module.css";
import { Button, Box, Container, styled } from "@mui/material";

const LogoHolder = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: 25,
  left: 25,
}));

const Home = () => {
  return (
    <div>
      <Container>
        <Box position={"relative"}>
          <Image src="/job_portal/bg.jpg" width={1200} height={600} alt="" />
          <LogoHolder>
            <Image src="/telnet/logo.webp" width={220} height={55} alt="" />
          </LogoHolder>
        </Box>
      </Container>
    </div>
  );
};

export default Home;
