import type { Metadata } from "next";
import { Pacifico } from "next/font/google";
import style from "../styles/static.module.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Providers from "@/components/Providers";


const pacifico = Pacifico({ weight: "400", subsets: ["latin"] });
export const metadata: Metadata = {
  title: "Next App",
  description: "it's a test dude dont laugh",
  
  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={pacifico.className}>
        <Providers>
        <Header />
        <main className={style.container}>
        {children}
        </main>
        <Footer />
        </Providers>
        </body>
    </html>
  );
}
