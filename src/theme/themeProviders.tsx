'use client'
import { ChildrenType } from '@/theme/types' 
import { CssBaseline, ThemeProvider } from '@mui/material'  
import {  createTheme  } from '@mui/material/styles'
 
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter'
import themeOptions from '.' 
const AppTheme = async ({ children }: ChildrenType) => {
 
  const theme = createTheme(themeOptions())

    return (
      <AppRouterCacheProvider >
        <ThemeProvider theme={theme}  >
          <>
            <CssBaseline />
            {children}
          </>
        </ThemeProvider>
      </AppRouterCacheProvider>
    )
}

export default AppTheme
