import "@/styles/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ReduxProvider from "@/redux/Provider.jsx";
import ThemeProvider from "@/components/ThemeProvider";
import ToastProvider from "@/components/FcToast/context";

export const metadata = {
  title: "Arabulucu",
  description:
    "Çatışmalarınızı çözmek için güvenilir arabuluculuk hizmetleri sunuyoruz. Uzman ekibimizle sorunlarınıza adil ve etkili çözümler bulun.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <head>
        <link rel="icon" href="/icons/favicon-grey.ico" />
      </head>
      <body>
        <ReduxProvider>
          <ThemeProvider>
            <ToastProvider>
              <div className="container">
                <nav>
                  <Navbar />
                </nav>
                <main>{children}</main>
                <Footer />
              </div>
            </ToastProvider>
          </ThemeProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
