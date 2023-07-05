import "@/styles/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ReduxProvider from "@/redux/provider";
import ThemeProvider from "@/components/ThemeProvider";

export const metadata = {
  title: "AraBulucu",
  description:
    "Arabuluculuk Hizmetleri - Anlaşmazlıkları çözmek için profesyonel arabuluculuk hizmetleri sunuyoruz. Deneyimli ve uzman arabulucularımız, ticari, aile, işyeri ve diğer alanlarda arabuluculuk sürecini yönetir. Anlaşmazlıklarınızı hızlı, etkili ve maliyet açısından avantajlı bir şekilde çözmek için arabuluculuğun gücünden faydalanın. Randevu talepleri için web sitemizi ziyaret edin ve alanında uzman arabulucularımızla iletişime geçin.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <head>
        <link rel="icon" href="/icons/favicon.ico" />
      </head>
      <body>
        <ReduxProvider>
          <ThemeProvider>
            <div className="container">
              <nav>
                <Navbar />
              </nav>
              <main>{children}</main>
              <Footer />
            </div>
          </ThemeProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
