import Logo from "../../public/logo.svg";
import Image from "next/image";
import ActiveLink from "./ActiveLink";
export default function Navbar() {
  return (
    <div className="group relative">
      <nav className="flex flex-row items-center justify-between px-[10%] py-[2.5%] group-hover:text-white transition-colors duration-500 ease-in-out">
        <ActiveLink href={"/"}>
          <Image src={Logo} />
        </ActiveLink>
        <ul className="flex flex-row gap-20 uppercase">
          <li>
            <ActiveLink href="/">Home</ActiveLink>
          </li>
          <li>
            <ActiveLink href="#">Services</ActiveLink>
          </li>
          <li>
            <ActiveLink href="#">Contact</ActiveLink>
          </li>
        </ul>
      </nav>
      <div className="absolute top-0 left-0 -translate-y-full group-hover:translate-y-0 w-full bg-black h-full -z-10 transition-transform duration-500 ease-in-out"></div>
    </div>
  );
}
