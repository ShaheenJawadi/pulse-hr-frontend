
'use client'
import CommonDrawer from ".";
import { useDrawerAction, useDrawerState } from "./drawer.context";

 

const DrawerHolder = ( ) => { 
  const { isOpen,data , view } = useDrawerState();
  const { closeDrawer } = useDrawerAction();




  return (
    <CommonDrawer closeDrawer={closeDrawer} isOpen={isOpen}>
      {view=="ADD_DEPARTMENT" ? <div>Add departemnet sectiuon </div> : null}
 
    </CommonDrawer>
  );
};

export default DrawerHolder;
