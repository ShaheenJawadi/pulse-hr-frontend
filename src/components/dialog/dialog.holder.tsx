"use client";
import ClockInDialog from "../pages/clockInOut/clockIn";
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
  const { isOpen, data, view, size } = useDialogState();
  const { closeDialog } = useDialogAction();

  let currentDialog: DialogHType = {
    component: null,
    title: "",
  };

  switch (view) {
    case "PROCESS_LEAVE":
      currentDialog = {
        component: <ProcessLeave />,
        title: "Traiter une demande de congé",
      };

      break;
    case "CLOCK_IN":
      currentDialog = {
        component: <ClockInDialog />,
        title: "Pointer",
      };

      break;

    default:
      break;
  }

  return (
    <CommonDialog
      size={size}
      closeDialog={closeDialog}
      isOpen={isOpen}
      dialogTitle={currentDialog.title}
    > 
      {currentDialog.component}
    </CommonDialog>
  );
};

export default DialogHolder;
