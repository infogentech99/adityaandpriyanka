
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export const metadata= {
  metadataBase: new URL("https://adityaandpriyanka.vercel.app/"),

  openGraph: {
    title: "Aditya & Priyanka",
    description: "Join as they begin their forever. 4 & 5 December, 2026",
    url: "https://adityaandpriyanka.vercel.app/",
    siteName: "InviteArc",
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
        alt: "Aditya & Priyanka",
      }, 
    ],
    type: "website",
  },


  twitter: {
    card: "summary_large_image",
    title: "Aditya & Priyanka",
    description: "Join as they begin their forever. 4 & 5  November, 2026",
    images: ["/og.jpg"],
  },

 other: {
    "og:image:secure_url": "https://adityaandpriyanka.vercel.app/og.jpg",
    "og:image:type": "image/jpg",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: "cover",
};


export default function RootLayout({
  children,
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}>

       
        {children}
      </body>
    </html>
  );
}