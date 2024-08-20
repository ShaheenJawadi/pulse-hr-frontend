// ** MUI Imports
import { Theme } from '@mui/material/styles'

 
const MUIDialog  = (): Theme['components'] =>  {
  return {
    MuiDialog: {
      styleOverrides: {
 
      },
    },
    MuiDialogTitle: {
      styleOverrides: {
        root: ({ theme }) => ({
          padding: theme.spacing(4),
          fontSize: theme.typography.h5.fontSize,
          color: theme.palette.primary.dark, 
          paddingLeft: theme.spacing(5),
        }),
      },
    },
    MuiDialogContent: {
      styleOverrides: {
        root: ({ theme }) => ({
          padding: theme.spacing(5),
       
       
        }),
      },
    },

  };
}

export default MUIDialog
