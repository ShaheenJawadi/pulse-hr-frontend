  
import AppTheme from "@/theme/themeProviders";
import "./globals.css";
import 'react-perfect-scrollbar/dist/css/styles.css'

import DrawerHolder from "@/components/drawer/drawer.holder";
import DialogHolder from "@/components/dialog/dialog.holder";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body >
        
        <AppTheme>
        {children}
        
        <DrawerHolder />
        <DialogHolder />
        </AppTheme>
        </body>
    </html>
  );
}
