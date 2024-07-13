import { Inter } from "next/font/google";
import "./globals.css";
import "@/styles/menu-humberger.css";
import NavBar from "@/components/NavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ahmat's portfolio",
  description: "Ahmat's portfolio developed by NextJs",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <NavBar />
      <main className="min-h-screen">
        {children}
      </main>
      </body>
    </html>
  );
}
