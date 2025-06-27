import Navbar from "@/components/layout/Navbar/Navbar";
import "./globals.css";
import { Providers } from "./providers";
import { SmoothCursor } from "@/components/ui/smooth-cursor";


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <SmoothCursor />
        <Providers>
          <header>
            <Navbar />
          </header>
          <main>
            {children}
          </main>
          <footer></footer>
        </Providers>
      </body>
    </html>
  );
}
