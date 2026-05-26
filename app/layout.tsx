import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import { Footer } from "@/components/site/footer";
import { Navbar } from "@/components/site/navbar";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sight-hub.example.com"),
  title: {
    default: "Sight Hub Eye Clinic",
    template: "%s | Sight Hub Eye Clinic",
  },
  description:
    "Affordable eye care, expert optometrists, and stylish frames in Kathmandu, Nepal.",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Sight Hub Eye Clinic",
    description:
      "Affordable eye care, expert optometrists, and stylish frames in Kathmandu, Nepal.",
    siteName: "Sight Hub Eye Clinic",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sight Hub Eye Clinic",
    description:
      "Affordable eye care, expert optometrists, and stylish frames in Kathmandu, Nepal.",
  },
  alternates: {
    canonical: "/",
  },
};

export const viewport: Viewport = {
  themeColor: "#0d6e6e",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${cormorant.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full bg-background text-foreground">
        <div className="flex min-h-screen flex-col">
          <Navbar />
          <main className="flex-1 pt-24">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
