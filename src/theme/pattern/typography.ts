import { Theme } from '@mui/material/styles'

const Typography = () => {
  return {
    fontFamily:'mukta',
    h1: {
      fontWeight: 500,
      letterSpacing: '-1.5px',
      color: 'var(--mui-palette-text-primary)'
    },
    h2: {
      fontWeight: 500,
      letterSpacing: '-0.5px',
      color: 'var(--mui-palette-text-primary)'
    },
    h3: {
      fontWeight: 500,
      letterSpacing: 0,
      color: 'var(--mui-palette-text-primary)'
    },
    h4: {
      fontWeight: 500,
      letterSpacing: '0.25px',
      color: 'var(--mui-palette-text-primary)'
    },
    h5: {
      fontWeight: 500,
      letterSpacing: 0,
      color: 'var(--mui-palette-text-primary)'
    },
    h6: {
      letterSpacing: '0.15px',
      color: 'var(--mui-palette-text-primary)'
    },
    subtitle1: {
      letterSpacing: '0.15px',
      color: 'var(--mui-palette-text-primary)'
    },
    subtitle2: {
      letterSpacing: '0.1px',
      color: 'var(--mui-palette-text-secondary)'
    },
    body1: {
      letterSpacing: '0.15px',
      color: 'var(--mui-palette-text-primary)'
    },
    body2: {
      lineHeight: 1.429,
      letterSpacing: '0.15px',
      color: 'var(--mui-palette-text-secondary)'
    },
    button: {
      letterSpacing: '0.4px',
      color: 'var(--mui-palette-text-primary)'
    },
    caption: {
      lineHeight: 1.25,
      letterSpacing: '0.4px',
      color: 'var(--mui-palette-text-secondary)'
    },
    overline: {
      letterSpacing: '1px',
      color: 'var(--mui-palette-text-secondary)'
    }
  }
}

export default Typography
