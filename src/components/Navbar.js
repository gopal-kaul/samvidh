import Logo from "../../public/logo.svg";
import Image from "next/image";
import ActiveLink from "./ActiveLink";
import { useState, useEffect } from "react";
export default function Navbar() {
  const [isTop, setisTop] = useState(true);
  useEffect(() => {
    scroll();
  }, []);
  const scroll = (e) => {
    if (window.scrollY === 0) setisTop(true);
    else setisTop(false);
  };
  useEffect(() => {
    window.addEventListener("scroll", scroll);
    return () => {
      window.removeEventListener("scroll", scroll);
    };
  }, [isTop]);

  const [isOpen, setisOpen] = useState(false);
  return (
    <div className="sticky z-10 top-0 group font-graphik">
      <nav
        className={`flex flex-row items-center justify-between px-[10%] py-[2.5%] group-hover:text-white transition-colors duration-500 ease-in-out relative z-10 ${
          isOpen || !isTop ? "bg-white" : ""
        }`}
      >
        <ActiveLink href={"/"}>
          <Image
            src={Logo}
            className="max-w-[40vw] sm:max-w-[30vw] md:max-w-[25vw] py-1"
          />
        </ActiveLink>
        <div
          className="space-y-1 md:hidden"
          onClick={() => {
            setisOpen((state) => !state);
          }}
        >
          <div className="w-8 h-1 bg-black/75"></div>
          <div className="w-8 h-1 bg-black/75"></div>
          <div className="w-8 h-1 bg-black/75"></div>
        </div>
        <ul
          className={`md:hidden uppercase absolute left-0 top-[100%] ${
            isOpen ? "bg-white flex" : ""
          } w-full pl-[10%] pb-[5%] transition-colors duration-500`}
        >
          <div
            className={`${
              isOpen ? "visible" : "invisible"
            } flex flex-col gap-4 transition-[visibility] duration-100`}
          >
            <li>
              <ActiveLink href="/">Home</ActiveLink>
            </li>
            <li>
              <ActiveLink href="/services">Services</ActiveLink>
            </li>
            <li>
              <ActiveLink href="/contactus">Contact</ActiveLink>
            </li>
          </div>
        </ul>
        <ul className="hidden flex-row gap-4 md:gap-20 uppercase md:flex ">
          <li>
            <ActiveLink href="/">Home</ActiveLink>
          </li>
          <li>
            <ActiveLink href="/services">Services</ActiveLink>
          </li>
          <li>
            <ActiveLink href="/contactus">Contact</ActiveLink>
          </li>
        </ul>
        <div className="absolute top-0 left-0 -translate-x-full group-hover:translate-x-0 w-full bg-black h-full -z-10 transition-transform duration-500 ease-in-out"></div>
      </nav>
    </div>
  );
}
