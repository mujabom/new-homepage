import Logo from "./asset/images/logo.svg?react";

export function Header() {
  return (
    <header className="hidden justify-between md:flex">
      <Logo />
      <div className="flex gap-10 text-dark-grayish-blue">
        <a href="#">Home</a>
        <a href="#">New</a>
        <a href="#">Popular</a>
        <a href="#">Trending</a>
        <a href="#">Categories</a>
      </div>
    </header>
  );
}
