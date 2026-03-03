import type { Metadata } from "next";
import Roboto from "next/font/local";

import "./globals.css";

const roboto = Roboto({
  src: [
    { path: "./fonts/Roboto/Roboto-Thin.ttf", weight: "100", style: "normal" },
    {
      path: "./fonts/Roboto/Roboto-ThinItalic.ttf",
      weight: "100",
      style: "italic",
    },
    {
      path: "./fonts/Roboto/Roboto-ExtraLight.ttf",
      weight: "200",
      style: "normal",
    },
    {
      path: "./fonts/Roboto/Roboto-ExtraLightItalic.ttf",
      weight: "200",
      style: "italic",
    },
    { path: "./fonts/Roboto/Roboto-Light.ttf", weight: "300", style: "normal" },
    {
      path: "./fonts/Roboto/Roboto-LightItalic.ttf",
      weight: "300",
      style: "italic",
    },
    {
      path: "./fonts/Roboto/Roboto-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/Roboto/Roboto-Italic.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "./fonts/Roboto/Roboto-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/Roboto/Roboto-MediumItalic.ttf",
      weight: "500",
      style: "italic",
    },
    {
      path: "./fonts/Roboto/Roboto-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/Roboto/Roboto-SemiBoldItalic.ttf",
      weight: "600",
      style: "italic",
    },
    { path: "./fonts/Roboto/Roboto-Bold.ttf", weight: "700", style: "normal" },
    {
      path: "./fonts/Roboto/Roboto-BoldItalic.ttf",
      weight: "700",
      style: "italic",
    },
    {
      path: "./fonts/Roboto/Roboto-ExtraBold.ttf",
      weight: "800",
      style: "normal",
    },
    {
      path: "./fonts/Roboto/Roboto-ExtraBoldItalic.ttf",
      weight: "800",
      style: "italic",
    },
    { path: "./fonts/Roboto/Roboto-Black.ttf", weight: "900", style: "normal" },
    {
      path: "./fonts/Roboto/Roboto-BlackItalic.ttf",
      weight: "900",
      style: "italic",
    },
  ],
  variable: "--font-roboto",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Hidayat Mauluddin - Portfolio",
  description:
    "Personal portfolio website showcasing projects, skills, and experience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.className} antialiased`}>{children}</body>
    </html>
  );
}
