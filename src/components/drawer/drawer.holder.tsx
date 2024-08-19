
'use client'
import CommonDrawer from ".";
import { useDrawerAction, useDrawerState } from "./drawer.context";

 

const DrawerHolder = ( ) => { 
  const { isOpen,data } = useDrawerState();
  const { closeDrawer } = useDrawerAction();

  return (
    <CommonDrawer closeDrawer={() => closeDrawer} isOpen={isOpen}>
      <h1>{data}</h1>
    </CommonDrawer>
  );
};

export default DrawerHolder;
