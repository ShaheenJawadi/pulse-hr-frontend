import { Padding } from "@mui/icons-material";
import type { Theme } from '@mui/material/styles'



const MUIPaper = (): Theme['components'] => {
    return {
        MuiPaper: {
            defaultProps: {
                variant: 'outlined', 
            },
            styleOverrides: {
                root:({ theme }) => ({
                  '&.MuiPaper-root.mainPaper': {
                    paddingTop: theme.spacing(5),
                    paddingBottom: theme.spacing(5),

                  }
                })
              }
         
          
        }
    }
}

export default MUIPaper;
