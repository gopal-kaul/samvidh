import "@/styles/globals.css";
import Navbar from "@/components/Navbar";
import localFont from "@next/font/local";
import Footer from "@/components/Footer";
const graphik = localFont({
  src: [
    {
      path: "../fonts/Graphik/GraphikBlack.otf",
      weight: "800",
      style: "normal",
    },
    {
      weight: "800",
      style: "italic",
      path: "../fonts/Graphik/GraphikBlackItalic.otf",
    },
    {
      weight: "700",
      path: "../fonts/Graphik/GraphikBold.otf",
    },
    {
      weight: "700",
      style: "italic",
      path: "../fonts/Graphik/GraphikBoldItalic.otf",
    },
    {
      path: "../fonts/Graphik/GraphikExtralight.otf",
      weight: "200",
    },
    {
      weight: "200",
      style: "italic",
      path: "../fonts/Graphik/GraphikExtralightItalic.otf",
    },
    {
      weight: "300",
      path: "../fonts/Graphik/GraphikLight.otf",
    },
    {
      path: "../fonts/Graphik/GraphikLightItalic.otf",
      weight: "300",
      style: "italic",
    },
    {
      path: "../fonts/Graphik/GraphikMedium.otf",
      style: "600",
    },
    {
      style: "italic",
      weight: "600",
      path: "../fonts/Graphik/GraphikMediumItalic.otf",
    },
    {
      path: "../fonts/Graphik/GraphikRegular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/Graphik/GraphikRegularItalic.otf",
      style: "italic",
    },
    {
      path: "../fonts/Graphik/GraphikSemiboldItalic.otf",
      style: "italic",
      weight: "600",
    },
    {
      weight: "600",
      path: "../fonts/Graphik/GraphikSemibold.otf",
      style: "normal",
    },
    {
      path: "../fonts/Graphik/GraphikThin.otf",
      weight: "100",
    },
    {
      weight: "100",
      style: "italic",
      path: "../fonts/Graphik/GraphikThinItalic.otf",
    },
  ],
  variable:"--font-graphik",
});

export default function App({ Component, pageProps }) {
  return (
    <div className={`${graphik.variable} font-sans relative`}>
      <div className="absolute w-0 h-0 border-t-[100vw] border-r-[100vw] border-t-black/10 border-r-transparent -z-1"></div>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}
