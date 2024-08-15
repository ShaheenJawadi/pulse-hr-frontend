
import colorPalette from './pattern/colors' 
import breakpoints from './pattern/breakpoints'
import spacing from './pattern/spacing'
import { ThemeOptions } from '@mui/material'
import Overrides from './overrides'
 
 
const themeOptions = (): ThemeOptions => {

 return {
  direction: 'ltr',
  components: Overrides(),
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