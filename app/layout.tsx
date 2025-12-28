import type { Metadata } from "next";
import { Outfit, Poppins } from "next/font/google"; // Added Poppins
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ['300', '400', '500', '600', '700'],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: "Pristine Salads | Cloud Kitchen",
  description: "Fresh, healthy, and delicious salads delivered to your doorstep.",
};

import { LoaderProvider } from "@/context/LoaderContext";
import Footer from "@/components/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${outfit.variable} ${poppins.variable} antialiased`}
      >
        <LoaderProvider>
          {children}
          <Footer />
        </LoaderProvider>
      </body>
    </html>
  );
}
