"use client";
import CommonDialog from "./dialog";
import { useDialogAction, useDialogState } from "./dialog.context";
import dynamic from "next/dynamic";

const ProcessLeave = dynamic(
  () => import("@/components/pages/leave/processLeave")
);

type DialogHType = {
  component: React.ReactNode;
  title: string; 
};

const DialogHolder = () => {
  const { isOpen, data, view } = useDialogState();
  const { closeDialog } = useDialogAction();

  let currentDialog: DialogHType = {
    component: null,
    title: "", 
  };

  switch (view) {
    case "PROCESS_LEAVE":
      currentDialog = {
        component: <ProcessLeave/>,
        title: "Traiter une demande de congé", 
      };

    default:
      break;
  }

  return (
    <CommonDialog
      closeDialog={closeDialog}
      isOpen={isOpen}
      dialogTitle={currentDialog.title}
    >
      {currentDialog.component}
    </CommonDialog>
  );
};

export default DialogHolder;
