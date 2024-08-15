
import { Theme } from '@mui/material/styles'

const MUITable = () => {
  return {
    MuiTableContainer: {
      styleOverrides: {
        root:({ theme }: { theme: Theme }) => ({
            background: "#000",
        })
      }
    },
  
  }
}

export default MUITable
