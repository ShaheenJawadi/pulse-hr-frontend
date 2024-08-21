'use client';
import React, { ReactNode } from "react";



type DrawerViewType= "ADD_DEPARTMENT"|"ADD_JOB_TITLE"|"ADD_WORKING_SHIFT"|undefined; 

interface State {
  isOpen: boolean;
  data:any;
  view: DrawerViewType;
}

type Action = { type: "open"; view : DrawerViewType ,  data?: any } | { type: "close" };

const initialState: State = {
  isOpen: false,
  data:null,
  view :undefined,
};

function drawerReducer(state: State, action: Action): State {
  switch (action.type) {
    case "open":
      return {
        ...state,
        isOpen: true,
        view: action.view,
        data: action.data,
      };

    case "close":
      return {
        ...state,
        isOpen: false,
        data:null ,
        view:undefined,
      };
    default:
      throw new Error("Unknown Drawer Action!");
  }
}

const DrawerStateContext = React.createContext<State>(initialState);
DrawerStateContext.displayName = "DrawerStateContext";
const DrawerActionContext = React.createContext<
  React.Dispatch<Action> | undefined
>(undefined);
DrawerActionContext.displayName = "DrawerActionContext";

interface Props {
  children: ReactNode;
}

export const DrawerProvider = (props: Props) => {
  const [state, dispatch] = React.useReducer(drawerReducer, initialState);
  const { children } = props;

  return (
    <DrawerStateContext.Provider value={state}>
      <DrawerActionContext.Provider value={dispatch}>
        {children}
      </DrawerActionContext.Provider>
    </DrawerStateContext.Provider>
  );
};

export function useDrawerState() {
  const context = React.useContext(DrawerStateContext);
  if (context === undefined) {
    throw new Error(`useDrawerState must be used within a DrawerProvider`);
  }

  return context;
}

export function useDrawerAction() {
  const dispatch = React.useContext(DrawerActionContext);
  if (dispatch === undefined) {
    throw new Error(`useDrawerAction must be used within a DrawerProvider`);
  }

  return {
    openDrawer(view :DrawerViewType,data?: any) {
      dispatch({ type: "open" , view:view  ,  data:data});
    },
    closeDrawer(returnClose?:any) {
        dispatch({ type: 'close'  });
      },
  };
}
