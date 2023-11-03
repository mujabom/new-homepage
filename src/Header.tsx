import Logo from "./asset/images/logo.svg?react";
import MenuIcon from "./asset/images/icon-menu.svg?react";
import CloseIcon from "./asset/images/icon-menu-close.svg?react";
import { Drawer } from "@mui/material";
import { useState } from "react";
import { useMediaQuery } from "@mui/material";
export function Header() {
  const isLarge = useMediaQuery("(min-width: 768px)");
  const [open, setOpen] = useState(false);
  return (
    <header className="flex justify-between">
      <Logo />
      {!isLarge ? (
        <div className="flex gap-5 md:hidden">
          <MenuIcon onClick={() => setOpen(true)} />
          <Drawer
          
            anchor="right"
            SlideProps={{className:"w-2/3"}}
            open={open}
            onClose={() => {
              setOpen(false);
            }}
          >
            <div className="flex flex-col gap-10 p-10">
              <CloseIcon
                onClick={() => {
                  setOpen(false);
                }}
              />
              {}
              <NavLinks />
            </div>
          </Drawer>
        </div>
      ) : (
        <NavLinks />
      )}
    </header>
  );
}

function NavLinks({ hidden = false }: { hidden?: boolean }) {
  if (hidden) return null;
  return (
    <div className="flex flex-col md:flex-row gap-10 text-dark-grayish-blue">
      <a className='hover:text-soft-orange'href="#">Home</a>
      <a className='hover:text-soft-orange'href="#">New</a>
      <a className='hover:text-soft-orange'href="#">Popular</a>
      <a className='hover:text-soft-orange'href="#">Trending</a>
      <a className='hover:text-soft-orange'href="#">Categories</a>
    </div>
  );
}
