import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/footer";
import Nav from "@/components/nav";

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
      <body className="flex flex-col min-h-screen w-screen overflow-x-hidden relative">
        <Nav />
        <div className="flex flex-col">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
