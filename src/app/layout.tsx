import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/footer";
import Nav from "@/components/nav";
import SmoothScrollProvider from "./providers/SmoothScrollProvider";

export const metadata: Metadata = {
  title: "The Platform Music",
  description:
    "The Platform Music is a platform for musicians to showcase their music and connect with fans.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen w-full relative">
        <SmoothScrollProvider>
          {/* Navbar */}
          <div className="relative z-20">
            <Nav />
          </div>

          {/* Main content area */}
          <div className="flex-1 relative z-10">{children}</div>
          <Footer />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
