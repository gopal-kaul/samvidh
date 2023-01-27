import logo from "../../public/logo.svg"
import location from "../../public/location.svg"
import phonebook from "../../public/phonebook.svg"
import mail from "../../public/mail.svg"
import Image from "next/image";
export default function Footer() {
  return (
    <footer>
      <div className="bg-grey w-full flex flex-col px-[10%] py-16 mt-[10%] divide-y divide-solid divide-black gap-y-8">
        <div className="flex flex-col w-full items-center">
          <Image
            src={logo}
            className="w-full md:w-[30vw] object-contain"
            alt="Logo"
          />
        </div>
        <div className="flex flex-row flex-wrap gap-y-5 justify-between pt-10 items-center">
          <div className="flex flex-row">
            <Image
              src={location}
              height="20"
              width="20"
              className="mr-4"
            />
            <p className="text-left">
              15305 Dallas Parkway, 12th Floor #7700, Addison, 75001
            </p>
          </div>
          <div className="flex flex-row">
            <Image
              src={phonebook}
              height="20"
              width="20"
              className="mr-4"
            />
            <p>+1-972-358-6020</p>
          </div>
          <div className="flex flex-row">
            <Image src={mail} height="20" width="20" className="mr-4" />
            <p>sales@samvidhtech.com</p>
          </div>
        </div>
      </div>
      <div className="text-center py-1 text-sm">
        Copyright 2022 | <span className="text-blue">Samvidh </span> | All Rights
        Reserved.
      </div>
    </footer>
  );
}
