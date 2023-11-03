import { useMediaQuery } from "@mui/material";
import { FooterStories } from "./FooterStories";
import { Header } from "./Header";
import { NewSection } from "./NewSection";
import Banner from "./asset/images/image-web-3-desktop.jpg";
import BannerMobile from "./asset/images/image-web-3-mobile.jpg";
export default function App() {
  const isLarge = useMediaQuery("(min-width: 768px)");
  return (
    <div className="flex flex-col gap-14 px-4 py-14 md:px-40">
      <Header />
      <main className="grid grid-cols-1 gap-5 md:grid-cols-3">
        <img
          src={isLarge ? Banner : BannerMobile}
          alt="Banner"
          className="md:col-span-2"
        />
        <div className="grid gap-3 md:col-span-2 md:grid-cols-2">
          <h1 className="text-6xl font-extrabold text-very-dark-blue">
            The Bright Future of Web 3.0?
          </h1>
          <div className="flex flex-col justify-between gap-5">
            <p className="text-dark-grayish-blue">
              We dive into the next evolution of the web that claims to put the
              power of the platforms back into the hands of the people. But is
              it really fulfilling its promise?{" "}
            </p>
            <button className="hover:bg-very-dark-blue w-1/2 bg-soft-red p-4 text-base tracking-[0.2em] text-off-white">
              READ MORE
            </button>
          </div>
        </div>
        <NewSection/>

        <FooterStories />
      </main>
    </div>
  );
}


