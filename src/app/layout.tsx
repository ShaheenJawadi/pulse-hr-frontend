  
import AppTheme from "@/theme/themeProviders";
import "./globals.css";
 

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
