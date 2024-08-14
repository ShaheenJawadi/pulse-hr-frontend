  
import AppTheme from "@/theme/themeProviders";
import "./globals.css";
import 'react-perfect-scrollbar/dist/css/styles.css'

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
        </AppTheme>
        </body>
    </html>
  );
}
