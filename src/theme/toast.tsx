"use client";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import { BoxProps } from "@mui/material/Box";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

const ToastifyWrapper = styled(Box)<BoxProps>(({ theme }) => {
  return {
    "& .Toastify__close-button": {
      color: "var(--mui-palette-text-primary)",
    },
    "& .Toastify__toast": {
      borderRadius: "var(--mui-shape-borderRadius)",
      backgroundColor: "var(--mui-palette-background-paper)",

      "&:not(.custom-toast)": {
        "& .Toastify__toast-body": {
          color: "var(--mui-palette-text-primary)",
        },
        "&.Toastify__toast--success": {
          "& .Toastify__toast-icon svg": {
            fill: "var(--mui-palette-success-main)",
          },
        },
        "&.Toastify__toast--error": {
          "& .Toastify__toast-icon svg": {
            fill: "var(--mui-palette-error-main)",
          },
        },
        "&.Toastify__toast--warning": {
          "& .Toastify__toast-icon svg": {
            fill: "var(--mui-palette-warning-main)",
          },
        },
        "&.Toastify__toast--info": {
          "& .Toastify__toast-icon svg": {
            fill: "var(--mui-palette-info-main)",
          },
        },
      },
       
    },
  
    
  };
});

const ReactToastify = () => {
  return (
    <ToastifyWrapper>
      <ToastContainer position={"top-left"} />
    </ToastifyWrapper>
  );
};

export default ReactToastify;
