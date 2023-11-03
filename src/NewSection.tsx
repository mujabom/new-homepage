export function NewSection() {
  return <div className="row-span-2 flex flex-col gap-10 bg-very-dark-blue p-5 md:col-start-3 md:row-start-1">
    <h1 className="text-5xl font-extrabold text-soft-orange ">New</h1>
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
  </div>;
}
function NewSectionStory({
  title, children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className={`flex flex-col gap-3`}>
      <h2 className="text-2xl cursor-pointer hover:text-soft-orange font-bold text-off-white">{title}</h2>
      <p className="text-grayish-blue">{children}</p>
    </section>
  );
}
