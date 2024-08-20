'use client';
import React, { ReactNode } from "react";



type DialogViewType= "DIALOGTEST"|undefined ; 

interface State {
  isOpen: boolean;
  data:any;
  view: DialogViewType;
}

type Action = { type: "open"; view : DialogViewType ,  data?: any } | { type: "close" };

const initialState: State = {
  isOpen: false,
  data:null,
  view :undefined
};

function dialogReducer(state: State, action: Action): State {
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
      throw new Error("Unknown Dialog Action!");
  }
}

const DialogStateContext = React.createContext<State>(initialState);
DialogStateContext.displayName = "DialogStateContext";
const DialogActionContext = React.createContext<
  React.Dispatch<Action> | undefined
>(undefined);
DialogActionContext.displayName = "DialogActionContext";

interface Props {
  children: ReactNode;
}

export const DialogProvider = (props: Props) => {
  const [state, dispatch] = React.useReducer(dialogReducer, initialState);
  const { children } = props;

  return (
    <DialogStateContext.Provider value={state}>
      <DialogActionContext.Provider value={dispatch}>
        {children}
      </DialogActionContext.Provider>
    </DialogStateContext.Provider>
  );
};

export function useDialogState() {
  const context = React.useContext(DialogStateContext);
  if (context === undefined) {
    throw new Error(`useDialogState must be used within a DialogProvider`);
  }

  return context;
}

export function useDialogAction() {
  const dispatch = React.useContext(DialogActionContext);
  if (dispatch === undefined) {
    throw new Error(`useDialogAction must be used within a DialogProvider`);
  }

  return {
    openDialog(view :any,data?: any) {
      dispatch({ type: "open" , view:view  ,  data:data});
    },
    closeDialog(returnClose?:any) {
        dispatch({ type: 'close'  });
      },
  };
}
