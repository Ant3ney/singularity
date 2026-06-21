import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import "../public/assets/scss/custom/style.scss";
import ClientProviders from "./ClientProviders";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Singularity",
  description: "Singularity web design and software development",
  icons: {
    icon: [
      { url: "/assets/images/favicons/favicon.ico" },
      { url: "/assets/images/favicons/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/assets/images/favicons/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/assets/images/favicons/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <link
          href="https://fonts.googleapis.com/css?family=Rubik:300,400,500,700,900&display=swap"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="/assets/css/animate.min.css" />
        <link rel="stylesheet" href="/assets/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/assets/css/font-awesome.min.css" />
        <link rel="stylesheet" href="/assets/plugins/dimon-icons/style.css" />
        <link rel="stylesheet" href="/assets/css/style.css" />
        <link rel="stylesheet" href="/assets/css/responsive.css" />
        <Script src="https://www.googletagmanager.com/gtag/js?id=AW-1005517184" strategy="afterInteractive" />
        <ClientProviders>{children}</ClientProviders>
      </body>
    </html>
  );
}
