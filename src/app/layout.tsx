import "../../styles/styles.css";
import { Lato } from "next/font/google";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";


const lato = Lato({
  subsets: ["latin"],
  weight: "400",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={lato.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
