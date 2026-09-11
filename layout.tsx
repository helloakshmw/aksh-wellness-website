import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AKSH Mental Wellness | A Safe Space for Every Mind",
  description:
    "AKSH Mental Wellness is a calm, human-centered space for counselling, consultations, mental wellness education, workshops, and meaningful support.",
  applicationName: "AKSH Mental Wellness",
  authors: [{ name: "Meghana Kaverappa" }],
  creator: "Meghana Kaverappa",
  keywords: [
    "AKSH Mental Wellness",
    "mental wellness",
    "counselling",
    "psychology",
    "Meghana Kaverappa"
  ],
  metadataBase: new URL("https://akshmentalwellness.com"),
  openGraph: {
    title: "AKSH Mental Wellness | A Safe Space for Every Mind",
    description:
      "A safe, calm and human-centered space for mental wellness and support.",
    type: "website",
    siteName: "AKSH Mental Wellness"
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
