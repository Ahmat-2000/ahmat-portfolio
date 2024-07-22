import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ahmat's portfolio",
  description: "Ahmat's portfolio developed by NextJs",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`antialiased ${inter.className}`}>
      <NavBar />
      <main className="font-mono">
        {children}
      </main>
      </body>
    </html>
  );
}
