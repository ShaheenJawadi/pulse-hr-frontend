
import colorPalette from './pattern/colors' 
import breakpoints from './pattern/breakpoints'
import spacing from './pattern/spacing'
import { ThemeOptions } from '@mui/material'
 
 
const themeOptions = (): ThemeOptions => {

 return {
  direction: 'ltr',
  palette: colorPalette(), 
  ...spacing,
  breakpoints: breakpoints(),
  shape: {
    borderRadius: 10
  },
  mixins: {
    toolbar: {
      minHeight: 64
    }
  }
}

 
}

export default themeOptions