
'use client'
import CommonDrawer from ".";
import { useDrawerAction, useDrawerState } from "./drawer.context";

 
type DHType = {


  component : React.ReactNode;
  title  : string;
  subTitle?  : string;

}

const DrawerHolder = ( ) => { 
  const { isOpen,data , view } = useDrawerState();
  const { closeDrawer } = useDrawerAction();

  let currentDrawer : DHType = {
    component : null,
    title : "",
    subTitle : "",
  } ;

  switch(view) {
    case "ADD_DEPARTMENT":
 
      currentDrawer = {

        component : <div>  departemnet section </div>,
        title : "Département",
        subTitle : "Ajouter un nouveau département au système",

      }
     
    default:
      break;
  }



  return (
    <CommonDrawer closeDrawer={closeDrawer} isOpen={isOpen} drawerTitle={currentDrawer.title} drawerSubtitle={currentDrawer.subTitle}>
      {currentDrawer.component}
 
    </CommonDrawer>
  );
};

export default DrawerHolder;
