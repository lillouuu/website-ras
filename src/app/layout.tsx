import type { Metadata, Viewport } from "next";
import { Open_Sans, Space_Grotesk, Space_Mono } from "next/font/google";
import "material-symbols/outlined.css";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import MotionEnhancer from "@/components/motion/MotionEnhancer";

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-open-sans",
  display: "swap",
});
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});
const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-space-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  ),
  title: {
    default: "IEEE RAS INSAT — Robotics & Automation Student Branch Chapter",
    template: "%s",
  },
  description:
    "IEEE Robotics and Automation Society Student Branch Chapter at INSAT, Tunis. Autonomous robotics, embedded systems, computer vision and competition engineering.",
  openGraph: {
    siteName: "IEEE RAS INSAT",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${openSans.variable} ${spaceGrotesk.variable} ${spaceMono.variable}`}
    >
      <body className="bg-light-surface text-light-on-surface font-body antialiased selection:bg-ieee-blue selection:text-light-on-primary">
      <div
        id="motion-progress"
        className="fixed left-0 top-0 z-[60] h-[2px] w-full origin-left scale-x-0 bg-ras-gold"
        aria-hidden="true"
      />
      <MotionEnhancer>
        <div className="min-h-screen flex flex-col">
          <Header />
          {children}
          <Footer />
        </div>
      </MotionEnhancer>
      </body>
    </html>
  );
}
