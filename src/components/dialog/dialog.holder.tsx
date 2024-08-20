"use client";
import CommonDialog from "./dialog";
import { useDialogAction, useDialogState } from "./dialog.context";

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
    case "DIALOGTEST":
      currentDialog = {
        component: <div> DIALOG test </div>,
        title: "Dialog test", 
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
