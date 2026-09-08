import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import WhatsAppButton from "@/components/WhatsAppButton";
import "@/app/globals.css";


const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://nerdtech.in"),
  title: "NerdTech — We Turn Ideas Into Software",
  description:
    "Full-service digital agency specializing in web development, mobile apps, branding, and digital marketing.",
  openGraph: {
    title: "NerdTech — We Turn Ideas Into Software",
    description:
      "Full-service digital agency specializing in web development, mobile apps, branding, and digital marketing.",
    url: "https://nerdtech.in",
    siteName: "NerdTech",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  viewportFit: "cover",
  themeColor: "#0D0D0D",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`dark ${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        {/* Material Symbols used for icons throughout the design */}
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body">
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}