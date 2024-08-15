import { Theme } from '@mui/material/styles'

const MUITable = () => {
    return {
        MuiTableContainer: {
            styleOverrides: {
                root: ({ theme }: { theme: Theme }) => ({
                    boxShadow: theme.shadows[0],
                    borderTopColor: theme.palette.divider,
                    borderRadius: 0,
                })
            }
        },
        MuiTableHead: {
            styleOverrides: {
                root:   {
                    textTransform: 'uppercase',
                    '& .MuiTableCell-head': {
                        fontWeight: 800,
                        fontSize: '0.725rem',
                    }
                }
            }
        },
        MuiTableBody: {
            styleOverrides: {
                root: ({ theme }: { theme: Theme }) => ({
                    '& .MuiTableCell-body': {
                        fontWeight: 400,
                        fontSize: '0.775rem',

                    }
                })
            }
        },
        MuiTableRow: {
            styleOverrides: {
                root: ({ theme }: { theme: Theme }) => ({
                    '& .MuiTableCell-head:first-child, & .MuiTableCell-root:first-child ': {
                        paddingLeft: theme.spacing(5)
                    },
                    '& .MuiTableCell-head:last-child, & .MuiTableCell-root:last-child': {
                        paddingRight: theme.spacing(5)
                    }
                })
            }
        },
        MuiTableCell: {
            styleOverrides: {
                root: ({ theme }: { theme: Theme }) => ({
                    borderBottom: `1px solid ${theme.palette.divider}`,
                })
            }
        },

    }
}

export default MUITable
