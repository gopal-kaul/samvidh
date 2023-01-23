import Head from "next/head";
import { useState } from "react";

export default function ContactUs() {
  const [formdata, setFormdata] = useState("");
  const [text, setText] = useState("LALAL");
  //     fname: "",
  //     lname: "",
  //     email: "",
  //     phone: "",
  //     message: "",
  return (
    <>
      <Head>
        <title>Samvidh | Contact Us</title>
        <meta name="description" content="Samvidh" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className="px-[10%] font-graphik pt-[5%]">
        <h2 className="animate-slideContent translate-y-[20%] text-[30px] font-semibold leading-tight">
          Let us show you the power of Mulesoft for your business: Contact us
          today!
        </h2>
        <p className="pt-[5%] text-[20px] leading-tight">
          Reliable, powerful MuleSoft and Salesforce integration services that
          will propel your company towards success is what we do. <br />
          <br />
          Fill in the contact information below and a representative will reach
          out to you. Alternatively, chat with us now at{" "}
          <a className="underline" href="tel:+1-972-358-6020">
            +1-972-358-6020
          </a>{" "}
          or email us at{" "}
          <a className="underline" href="mailto:sales@samvidhtech.com">
            sales@samvidhtech.com
          </a>
        </p>
        <div className="pt-[10%] flex flex-col gap-10 md:flex-row z-10 justify-between">
          <form
            action="#"
            method="POST"
            className="md:w-1/3 w-full flex flex-col gap-6 justify-between text-lg"
          >
            <input
              type="text"
              className="border-b bg-transparent pb-2 focus:outline-none"
              name="fname"
              placeholder="First Name"
              required
            />
            <input
              type="text"
              className="border-b bg-transparent pb-2 focus:outline-none"
              name="lname"
              placeholder="Last Name"
              required
            />
            <input
              type="email"
              className="border-b bg-transparent pb-2 focus:outline-none"
              name="email"
              placeholder="Email"
              required
            />
            <input
              type="text"
              className="border-b bg-transparent pb-2 focus:outline-none"
              name="phone"
              placeholder="Phone"
              required
            />
            <textarea
              type="text"
              className="border-b bg-transparent pb-2 focus:outline-none"
              name="message"
              placeholder="Message"
              required
            />
	    <button type="submit" className="text-center uppercase bg-gradient-to-l from-yellow to-red text-white py-1">Submit</button>
          </form>
          <img
            src="/home.jpg"
            className="object-cover md:w-1/4 w-full min-h-full"
          />
        </div>
      </main>
    </>
  );
}
