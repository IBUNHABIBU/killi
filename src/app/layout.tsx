import type { Metadata } from "next";
import "./globals.css";
import Navigation from "./components/Navigation/Navigation";
import Footer from "./components/Footer/Footer";

export const metadata: Metadata = {
  title: "Kiboma tours",
  description: "Kiboma tours located in Arusha Tanzania is a tours& travel company specialized in wildlife Safaris, mountain climbing, Beach holidays, Culture tourism and day trips .we are creating package according to the client choice .",
    icons: {
    icon: "/logo.ico",        // Standard favicon
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
