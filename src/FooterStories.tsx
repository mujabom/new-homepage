import grothGame from "./asset/images/image-gaming-growth.jpg";
import retroPC from "./asset/images/image-retro-pcs.jpg";
import toplaptop from "./asset/images/image-top-laptops.jpg";

export function FooterStories() {
  return <>
    <SideStory number="01" title="Reviving Retro PCs" src={retroPC}>
      What happens when old PCs are given modern upgrades?
    </SideStory>
    <SideStory number="02" title="Top 10 Laptops of 2022" src={toplaptop}>
      Our best picks for various needs and budgets.
    </SideStory>
    <SideStory number="03" title="The Growth of Gaming" src={grothGame}>
      How the pandemic has sparked fresh opportunities.
    </SideStory>
  </>;
}
function SideStory({
  number, title, children, src,
}: {
  number: string;
  title: string;
  src: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mt-10 grid grid-cols-3 gap-5">
      <img src={src} />
      <div className="col-span-2 flex flex-col gap-3">
        <h1 className="text-4xl font-bold text-grayish-blue">{number}</h1>
        <h4 className="text-xl font-bold text-very-dark-blue">{title}</h4>
        <p className="text-dark-grayish-blue">{children}</p>
      </div>
    </div>
  );
}
