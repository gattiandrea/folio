import localFont from "@next/font/local";
import Footer from "../components/footer";
import Header from "../components/header";
import "./globals.css";

const PPfont = localFont({
  src: [
    {
      path: "../../public/fonts/PPNeueMontreal-Book.otf",
      weight: "400",
    },
    // {
    //   path: '../../public/fonts/Poppins-Bold.ttf',
    //   weight: '700'
    // }
  ],
  variable: "--PPfont",
});

export const metadata = {
  title: "Andre Gatti - Creative problem solver",
  description: "Folio 2024",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={PPfont.className}>
      <Header />
      <body>
        {children}
        <Footer />
      </body>
    </html>
  );
}
