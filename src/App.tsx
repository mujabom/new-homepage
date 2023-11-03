import Banner from "./asset/images/image-web-3-desktop.jpg";

import { FooterStories } from "./FooterStories";
import { Header } from "./Header";
export default function App() {
  
  return (
    <div className="flex flex-col gap-14 md:px-40 px-4 py-14">
      <Header />
      <main className="grid gap-5 grid-cols-1 md:grid-cols-3">
        <img src={Banner} alt="Banner" className="md:col-span-2" />
        <div className="md:col-span-2 grid md:grid-cols-2 gap-3">
          <h1 className="text-6xl font-extrabold text-very-dark-blue">
            The Bright Future of Web 3.0?
          </h1>
          <div className="flex flex-col justify-between gap-5">
            <p className="text-dark-grayish-blue">
              We dive into the next evolution of the web that claims to put the
              power of the platforms back into the hands of the people. But is
              it really fulfilling its promise?{" "}
            </p>
            <button className=" bg-soft-red p-4 text-base tracking-[0.2em] text-off-white w-1/2">
              READ MORE
            </button>
          </div>
        </div>
        <div className="md:col-start-3 row-span-2 md:row-start-1 flex flex-col gap-10 bg-very-dark-blue p-7">
          <h1 className="text-4xl font-extrabold text-soft-orange ">New</h1>
          <NewSectionStory title="Hydrogen vs Electric Cars">
            Will hydrogen-fueled cars ever catch up to EVs?
          </NewSectionStory>
          <div className="border-b border-b-dark-grayish-blue"></div>
          <NewSectionStory title="The Downsides of AI Artistry">
            What are the possible adverse effects of on-demand AI image
            generation?
          </NewSectionStory>
          <div className="border-b border-b-dark-grayish-blue"></div>

          <NewSectionStory title="Is VC Funding Drying Up?">
            Private funding by VC firms is down 50% YOY. We take a look at what
            that means.
          </NewSectionStory>
        </div>

        <FooterStories/>
      </main>
    </div>
  );
}

function NewSectionStory({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className={`flex flex-col gap-3`}>
      <h2 className="text-xl font-bold text-off-white">{title}</h2>
      <p className="text-dark-grayish-blue">{children}</p>
    </section>
  );
}
