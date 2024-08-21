"use client";
import CommonDrawer from ".";
import { useDrawerAction, useDrawerState } from "./drawer.context";
import dynamic from "next/dynamic";

const AddDepartment = dynamic(
  () => import("@/components/pages/department/add")
);

const AddJOBTitle = dynamic(() => import("@/components/pages/job_title/add"));

const AddWorkingShift = dynamic(
  () => import("@/components/pages/working_shifts/add")
);

type DHType = {
  component: React.ReactNode;
  title: string;
  subTitle?: string;
};

const DrawerHolder = () => {
  const { isOpen, data, view } = useDrawerState();
  const { closeDrawer } = useDrawerAction();

  let currentDrawer: DHType = {
    component: null,
    title: "",
    subTitle: "",
  };

  switch (view) {
    case "ADD_DEPARTMENT":
      currentDrawer = {
        component: <AddDepartment />,
        title: "Département",
        subTitle: "Ajouter un nouveau département au système",
      };
      break;
    case "ADD_JOB_TITLE":
      currentDrawer = {
        component: <AddJOBTitle />,
        title: "Poste",
        subTitle: "Ajouter un nouveau poste au système",
      };
      break;
      case "ADD_WORKING_SHIFT":
        currentDrawer = {
          component: <AddWorkingShift />,
          title: "Heures de Travail",
          subTitle: "Ajouter des Heures de Travail au système",
        };
        break;
    default:
      break;
  }

  return (
    <CommonDrawer
      closeDrawer={closeDrawer}
      isOpen={isOpen}
      drawerTitle={currentDrawer.title}
      drawerSubtitle={currentDrawer.subTitle}
    >
      {currentDrawer.component}
    </CommonDrawer>
  );
};

export default DrawerHolder;
