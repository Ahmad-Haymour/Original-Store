import { Roboto } from "next/font/google";
import "./globals.css";
import Footer from "./_components/Footer";
import Header from "./_components/Header";

const inter = Roboto({ subsets: ["latin"], weight: "700" });

export const metadata = {
  title: "Original Store",
  description: "E-Commerce Affiliate Marketing Store",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
