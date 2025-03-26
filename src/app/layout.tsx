"use client";

 import { Roboto } from "next/font/google";
import "./globals.css";
import { ThemeProvider, CssBaseline } from "@mui/material";
import theme from "../../theme";  

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
});


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={roboto.variable}>
      <body>
        <ThemeProvider theme={theme}>
          <CssBaseline />  
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
