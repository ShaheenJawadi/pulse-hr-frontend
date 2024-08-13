'use client'
import { ChildrenType } from '@/theme/types' 
import { CssBaseline, ThemeProvider } from '@mui/material'  
import {  createTheme  } from '@mui/material/styles'
import { Experimental_CssVarsProvider as CssVarsProvider ,  experimental_extendTheme as extendTheme } from '@mui/material/styles';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter'
import themeOptions from '.' 
const AppTheme = async ({ children }: ChildrenType) => {
 
  const theme = extendTheme(themeOptions())

    return (
      <AppRouterCacheProvider >
        <CssVarsProvider theme={theme}  
       >
          <>
            <CssBaseline />
            {children}
          </>
        </CssVarsProvider>
      </AppRouterCacheProvider>
    )
}

export default AppTheme
