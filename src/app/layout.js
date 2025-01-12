"use client";

import { ChakraProvider, defaultSystem } from "@chakra-ui/react"; // Removed unused Provider
import Navbar from "./navbar/Navbar";

export default function RootLayout(props) {
  const { children } = props;

  return (
      <html style={{ backgroundColor:"09090b", }} suppressHydrationWarning>
        <ChakraProvider value={defaultSystem} >
        <body style={{backgroundColor:"#09090b", height:"full"}}>
          <Navbar />
          {children}
        </body>
        </ChakraProvider>
      </html>
  );
}