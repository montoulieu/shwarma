import { Suspense } from "react";
import "./globals.css";
import { Metadata } from "next";
import GoogleAnalytics from "./GoogleAnalytics";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.shwarma.band"),
  title: "shwarma - denver kebab rock band",
  description: "shwarma is an experimental psychedelic and progressive rock band hailing from Denver, Colorado.",
  icons: {
    icon: "/favicon.png",
  },
  openGraph: {
    url: "https://www.shwarma.band",
    title: "shwarma - Denver Kebab Rock Band",
    description: "shwarma is an experimental psychedelic and progressive rock band hailing from Denver, Colorado.",
    images: [
      {
        url: "/images/shwarma-band-collage.jpg",
        alt: "shwarma live",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@shwarmaband",
    creator: "@shwarmaband",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black text-neutral-100 h-full font-serif antialiased">
        <Suspense fallback={null}>
          <GoogleAnalytics />
        </Suspense>
        {children}
      </body>
    </html>
  );
}
