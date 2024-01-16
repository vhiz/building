import React, { useContext } from "react";
// import Footer from "./components/Footer";
// import Navbar from "./components/Navbar";
// import SEO from "./components/Seo";
// import About from "./section/About";
// import Contact from "./section/Contact";
// import Intro from "./section/Intro";
// import Products from "./section/Products";
import { DarkContext } from "./context/DarkMode";
import { FallingLines } from "react-loader-spinner";

export default function App() {
  const { dark } = useContext(DarkContext);
  const Navbar = React.lazy(() => import("./components/Navbar"));
  const Footer = React.lazy(() => import("./components/Footer"));
  const SEO = React.lazy(() => import("./components/SEO"));
  const Intro = React.lazy(() => import("./section/Intro"));
  const About = React.lazy(() => import("./section/About"));
  const Contact = React.lazy(() => import("./section/Contact"));
  const Products = React.lazy(() => import("./section/Products"));

  return (
    <div
      className={`flex overflow-x-hidden flex-col w-full gap-y-2 scrollbar-none xl:gap-y-6 xl:overscroll-x-none transition-all ease-in-out duration-300  ${
        dark && "dark bg-[#F5F4F9]"
      }`}
    >
      <React.Suspense
        fallback={
          <div className="h-[100vh] bg-primary/40 flex items-center justify-center">
            <FallingLines
              width="18rem"
              color="#7F1D1D"
              ariaLabel="falling-circles-loading"
              visible={true}
            />
          </div>
        }
      >
        <SEO
          title={"Sir Chief D.O Ejims & Brothers Trading Store"}
          description={
            "Get All Your Building Materials And Other Services At A Sufficient And Reliable Rate"
          }
          Url={"/"}
          img={"/logo.png"}
        />
        <Navbar />
        <Intro />
        <About />
        <Products />
        <Contact />
        <Footer />
      </React.Suspense>
    </div>
  );
}
