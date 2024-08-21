import type { Theme } from '@mui/material/styles'

const MUICard = (): Theme['components'] => {
    return {
        MuiCard: {
            defaultProps: {
                variant: 'outlined'
            },
            styleOverrides: {
            }
        },
        MuiCardHeader: {
            styleOverrides: {
                root: ({ theme }) => ({
                    padding: theme.spacing(3.5),
                    
                    borderBottom: `1px solid var(--mui-palette-grey-300)`,
                    '&.reverse .MuiCardHeader-content': {
                       display:"flex",
                       flexDirection:"column-reverse",
                    },
                }),

                title: ({ theme }) => ({
                    ...theme.typography.h6,
                  
                }),

                subheader: ({ theme }) => ({
                    ...theme.typography.subtitle1,
                }),
                avatar: ({ theme }) => ({
                    color: theme.palette.primary.main,
                }),
                action: {
                    marginTop: 0,
                    marginRight: 0,
                    '& .MuiIconButton-root': {
                        color: 'inherit'
                    }
                }
            }
        },
        MuiCardContent: {
            styleOverrides: {
                root: ({ theme }) => ({
                    padding: theme.spacing(4),
                    color: 'var(--mui-palette-text-secondary)',
                    '&:last-child': {
                        paddingBlockEnd: theme.spacing(6)
                    },
                    '& + .MuiCardHeader-root, & + .MuiCardContent-root, & + .MuiCardActions-root': {
                        paddingBlockStart: 0
                    },
                    '& + .MuiCollapse-root .MuiCardHeader-root:first-child, & + .MuiCollapse-root .MuiCardContent-root:first-child, & + .MuiCollapse-root .MuiCardActions-root:first-child':
                    {
                        paddingBlockStart: 0
                    }
                })
            }
        },
        MuiCardActions: {
            styleOverrides: {
                root: ({ theme }) => ({
                    padding: theme.spacing(6),
                    '& .MuiButtonBase-root:not(:first-of-type)': {
                        marginInlineStart: theme.spacing(4)
                    },
                    '&:where(.card-actions-dense)': {
                        padding: theme.spacing(3),
                        '& .MuiButton-text': {
                            paddingInline: theme.spacing(3)
                        }
                    },
                    '& + .MuiCardHeader-root, & + .MuiCardContent-root, & + .MuiCardActions-root': {
                        paddingBlockStart: 0
                    },
                    '& + .MuiCollapse-root .MuiCardHeader-root:first-child, & + .MuiCollapse-root .MuiCardContent-root:first-child, & + .MuiCollapse-root .MuiCardActions-root:first-child':
                    {
                        paddingBlockStart: 0
                    }
                })
            }
        }
    }
}

export default MUICard
