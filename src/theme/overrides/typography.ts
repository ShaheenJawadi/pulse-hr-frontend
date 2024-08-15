
import type { Theme } from '@mui/material/styles'

const MUITypography = (): Theme['components'] => {
    return {
        MuiTypography: {
            styleOverrides: {
                gutterBottom: ({ theme }) => ({
                    marginBottom: theme.spacing(2)
                })
            }
        }
    }
}

export default MUITypography
