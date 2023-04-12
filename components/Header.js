import Link from "next/link";
import {
  BuildingStorefrontIcon,
  ShoppingCartIcon,
  Bars3Icon,
  XMarkIcon
} from "@heroicons/react/24/outline";
import { Martian_Mono } from "next/font/google";
import { useState } from "react";
import Mushlogo from "/public/mushiecirclesmiley.svg"


const martian = Martian_Mono({
  subsets: ["latin"],
  style: ["normal"],
  variable: "--font-martian",
});


const Header = () => {

  const Links = [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Genetics",
      href: "/genetics",
    },
    {
      title: "Coming Soon",
      href: "/coming-soon",
    },
    {
      title: "F. A. Q",
      href: "/faq",
    },
    {
      href: "/cart",
      icon: <ShoppingCartIcon className="h-6 w-6 mx-1" />,
      btn: <button>cart</button>
    },
  ];
  const menuIcons = {
    close: <Bars3Icon className="text-yellow-600 hover:text-stone-900 duration-500 h-6 w-6 mx-1" />,
    open: <XMarkIcon className="text-yellow-600 hover:text-stone-900 duration-500 h-6 w-6 mx-1" />,
    
  }
  const [open, setOpen] = useState(false);
  
  return (
    <header>
      <div className="shadow-md w-full top-0 left-0 relative">
        <div className="md:flex items-center justify-between 
        bg-stone-700 py-4 md:px-10 px-7">
          <div
            className="font-bold text-2xl cursor-pointer flex items-center 
          text-slate-200 font-monospace"
          >
            <span className="text-3xl text-yellow-600 py-2">
              <Mushlogo className="h-6 w-6 mx-2" />
            </span>
            <div className={`${martian.variable}font-monospace py-2`}>
              Mushopolis
            </div>
          </div>
          <div onClick={()=>setOpen(!open)}
            className="text-3xl absolute 
          right-8 top-6 cursor-pointer md:hidden">
          {open ? menuIcons.open: menuIcons.close }
          </div>
          <ul className={`md:flex md:items-center md:pb-0 
          pb-0 absolute md:static bg-stone-700 md:z-auto
          z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9
          transition-all duration-500 ease-in ${open ? 'top-20 opacity-100':'top-[-490px] md:opacity-100 opacity-0'}`}>
            {Links.map((link) => (
              <li key={link.href} className="md:ml-8 text-xl md:my-0 my-7">
                <Link
                  href={link.href}
                  className="text-yellow-600 hover:text-stone-900 duration-600 ease-linear "
                >
                  <div className="md:hover:pb-4  hover:pt-4 duration-300 ease-linear">
                    {link.title}
                  </div>
                  <div className="md:px-3 md:hover:pb-4 hover:pt-4 duration-300">
                    {link.icon}
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
};
export default Header
