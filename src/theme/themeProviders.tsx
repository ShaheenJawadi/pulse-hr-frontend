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
import { useRef } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import ReactToastify from "./toast";
import ReduxProvider from "@/hooks/redux/provider";

const AppTheme = ({ children }: ChildrenType) => {
  const theme = extendTheme(themeOptions());

  const queryClientRef = useRef<any>();
  if (!queryClientRef.current) {
    queryClientRef.current = new QueryClient();
  }

  return (
    <QueryClientProvider client={queryClientRef.current}>
      <AppRouterCacheProvider>
        <CssVarsProvider theme={theme}>
          <> 
            <ReduxProvider>
              <CssBaseline />

              <DrawerProvider>
                <DialogProvider> {children}</DialogProvider>
              </DrawerProvider>
              <ReactToastify />
            </ReduxProvider>
          </>
        </CssVarsProvider>
      </AppRouterCacheProvider>
    </QueryClientProvider>
  );
};

export default AppTheme;
