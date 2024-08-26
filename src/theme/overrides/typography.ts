
import type { Theme } from '@mui/material/styles'

const MUITypography = (): Theme['components'] => {
    return {
        MuiTypography: {
            styleOverrides: {
                gutterBottom: ({ theme }) => ({
                    marginBottom: theme.spacing(2)
                })
            },
            variants: [
                {
                    props: { color: "info" },
                    style: {
                        color: "var(--mui-palette-info-main)",
                    },
                },
                {
                    props: { color: "success" },
                    style: {
                        color: "var(--mui-palette-success-main)",
                    },
                },
            ],
        },

    }
}

export default MUITypography
