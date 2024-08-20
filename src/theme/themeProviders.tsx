"use client";
import { ChildrenType } from "@/types/themeTypes";
import { CssBaseline, ThemeProvider } from "@mui/material";
import {
  Experimental_CssVarsProvider as CssVarsProvider,
  experimental_extendTheme as extendTheme,
} from "@mui/material/styles";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import themeOptions from ".";
import { DrawerProvider } from "@/components/drawer/drawer.context";
import { DialogProvider } from "@/components/dialog/dialog.context";
const AppTheme = async ({ children }: ChildrenType) => {
  const theme = extendTheme(themeOptions());

  return (
    <AppRouterCacheProvider>
      <CssVarsProvider theme={theme}>
        <>
          <CssBaseline />
          <DrawerProvider>
            <DialogProvider> {children}</DialogProvider>
          </DrawerProvider>
        </>
      </CssVarsProvider>
    </AppRouterCacheProvider>
  );
};

export default AppTheme;
