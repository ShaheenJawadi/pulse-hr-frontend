"use client";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import PerfectScrollbar from "react-perfect-scrollbar";

import MuiDialog, { DialogProps } from "@mui/material/Dialog";
import CloseIcon from "@mui/icons-material/Close";

import * as React from "react";
import Button from "@mui/material/Button";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import { Divider } from "@mui/material";

const Dialog = styled(MuiDialog)<DialogProps>(({ theme }) => ({
  "& .MuiDialog-paper": {
    
  },
}));

type Props = {
  isOpen: boolean;
  closeDialog: () => void;
  children: React.ReactNode;
  dialogTitle: string;
  size:"lg"|"md"|"sm"|"xl"|"xs";
};
const CommonDialog = (props: Props) => {
  const { isOpen, closeDialog, children, dialogTitle , size } = props;

  return (
    <Dialog maxWidth={size} onClose={closeDialog} open={isOpen}>
      <DialogTitle sx={{ padding: 2 }}>{dialogTitle}</DialogTitle>
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
      <Divider/>
      <PerfectScrollbar>
        <DialogContent dividers>{children}</DialogContent>
      </PerfectScrollbar>
    </Dialog>
  );
};

export default CommonDialog;
