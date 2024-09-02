
import { PaletteMode } from '@mui/material'

const DefaultPalette = () => {
  const mode = 'light' as PaletteMode;

  const textColor = '59, 55, 75'
  return {

    common: {
      black: '#000',
      white: '#FFF',

    },
    mode: mode,
    primary: {
      light: '#00bce1',
      main: '#22A2DD',
      dark: '#006fa6',
      lighterOpacity: 'rgb(var(--mui-palette-primary-mainChannel) / 0.08)',
      lightOpacity: 'rgb(var(--mui-palette-primary-mainChannel) / 0.12)',
      mainOpacity: 'rgb(var(--mui-palette-primary-mainChannel) / 0.24)',
      contrastText: '#FFF'
    },
    secondary: {
      light: '#006bac',
      main: '#1E1666',
      dark: '#004391',
      lighterOpacity: 'rgb(var(--mui-palette-secondary-mainChannel) / 0.08)',
      lightOpacity: 'rgb(var(--mui-palette-secondary-mainChannel) / 0.12)',
      mainOpacity: 'rgb(var(--mui-palette-secondary-mainChannel) / 0.24)',
      contrastText: '#FFF'
    },
    success: {
      light: '#33ddb7',
      main: '#00d5a6',
      dark: '#009574',
      lighterOpacity: 'rgb(var(--mui-palette-success-mainChannel) / 0.08)',
      lightOpacity: 'rgb(var(--mui-palette-success-mainChannel) / 0.12)',
      mainOpacity: 'rgb(var(--mui-palette-success-mainChannel) / 0.24)',
      contrastText: '#FFF'
    },
    error: {
      light: '#ff4569',
      main: '#ff1744',
      dark: '#b2102f',
      lighterOpacity: 'rgb(var(--mui-palette-error-mainChannel) / 0.08)',
      lightOpacity: 'rgb(var(--mui-palette-error-mainChannel) / 0.12)',
      mainOpacity: 'rgb(var(--mui-palette-error-mainChannel) / 0.24)',
      contrastText: '#FFF'
    },
    warning: {
      light: '#fdc353',
      main: '#FDB528',
      dark: '#b17e1c',
      lighterOpacity: 'rgb(var(--mui-palette-warning-mainChannel) / 0.08)',
      lightOpacity: 'rgb(var(--mui-palette-warning-mainChannel) / 0.12)',
      mainOpacity: 'rgb(var(--mui-palette-warning-mainChannel) / 0.24)',
      contrastText: '#FFF'
    },
    info: {
      light: '#33c7cd',
      main: '#00b9c1',
      dark: '#008187',
      lighterOpacity: 'rgb(var(--mui-palette-info-mainChannel) / 0.08)',
      lightOpacity: 'rgb(var(--mui-palette-info-mainChannel) / 0.12)',
      mainOpacity: 'rgb(var(--mui-palette-info-mainChannel) / 0.24)',
      contrastText: '#FFF'
    },
    grey: {
      50: '#FAFAFA',
      100: '#F5F5F5',
      200: '#EEEEEE',
      300: '#E0E0E0',
      400: '#BDBDBD',
      500: '#9E9E9E',
      600: '#757575',
      700: '#616161',
      800: '#424242',
      900: '#212121',
      A100: '#D5D5D5',
      A200: '#AAAAAA',
      A400: '#616161',
      A700: '#303030'
    },
    text: {
      primary: `rgba(${textColor}, 0.9)`,
      secondary: `rgba(${textColor}, 0.68)`,
      disabled: `rgba(${textColor}, 0.38)`
    },
    divider: `rgba(${textColor}, 0.12)`,
    background: {
      paper: mode === 'light' ? '#FFF' : '#010A0F',
      default: '#f1f5f9',
    },
    action: {
      active: `rgba(${textColor}, 0.54)`,
      hover: `rgba(${textColor}, 0.05)`,
      hoverOpacity: 0.05,
      selected: `rgba(${textColor}, 0.08)`,
      disabled: `rgba(${textColor}, 0.26)`,
      disabledBackground: `rgba(${textColor}, 0.12)`,
      focus: `rgba(${textColor}, 0.12)`
    }
  }
}

export default DefaultPalette
