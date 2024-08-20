"use client";
import PerfectScrollbar from "react-perfect-scrollbar";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import MuiDialog, { DialogProps } from "@mui/material/Dialog";
import CloseIcon from "@mui/icons-material/Close";

import * as React from "react";
import Button from "@mui/material/Button";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";

const Dialog = styled(MuiDialog)<DialogProps>(({ theme }) => ({
  "& .MuiDialog-paper": {
    minWidth: 600,
  },
}));

type Props = {
  isOpen: boolean;
  closeDialog: () => void;
  children: React.ReactNode;
  dialogTitle: string;
};
const CommonDialog = (props: Props) => {
  const { isOpen, closeDialog, children, dialogTitle } = props;

  return (
    <Dialog onClose={closeDialog} open={isOpen}>
      <DialogTitle sx={{ m: 0, p: 2 }}>{dialogTitle}</DialogTitle>
      <IconButton
        aria-label="close"
        onClick={closeDialog}
        sx={{
          position: "absolute",
          right: 8,
          top: 8,
          color: (theme) => theme.palette.error.main,
        }}
      >
        <CloseIcon />
      </IconButton>
      <DialogContent dividers>{children}</DialogContent>
    </Dialog>
  );
};

export default CommonDialog;
