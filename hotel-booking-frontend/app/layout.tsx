import "@/styles/globals.css";

import { Metadata, Viewport } from "next";

import { ThemeProviders } from "./providers";

export const metadata: Metadata = {
  title: "Hotel Booking",
  description: "Next Level Hotel Booking Service",
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <ThemeProviders
          themeProps={{ attribute: "class", defaultTheme: "light" }}
        >
          <div className="mx-auto container">{children}</div>
        </ThemeProviders>
      </body>
    </html>
  );
}
