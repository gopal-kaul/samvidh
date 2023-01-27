import "@/styles/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
export default function App({ Component, pageProps }) {
  const getLayout =
    Component.getLayout ||
    ((page) => (
      <>
        <div className="absolute w-0 h-0 border-t-[100vw] border-r-[100vw] border-t-[#f7f7f7] border-r-transparent -z-10"></div>
        <Navbar />
        {page}
        <Footer />
      </>
    ));
  return getLayout(
    <div className="relative" >
      <Component {...pageProps} />
    </div>
  );
}
