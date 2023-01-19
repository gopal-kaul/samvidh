import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import person from "../../public/transparentperson.png"

export default function Home() {
  const [loaded, setLoaded] = useState(false);
  return (
    <>
      <Head>
        <title>Samvidh</title>
        <meta name="description" content="Samvidh" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className="px-[10%] font-graphik pt-[5%]">
        <div className="flex flex-col md:flex-row gap-20">
          <div className="relative overflow-clip md:w-1/3 w-full">
            <Image
              src={person}
              className="w-full h-auto invisible"
            />
            <div className="bg-gradient-to-l from-yellow to-red w-full h-[80%] absolute top-[100%] left-0 -z-10 animate-slideFast" />
            <Image
              src={person}
              className="w-full h-full absolute top-[100%] left-0 animate-slideSlow"
            />
          </div>
          <div className="animate-slideContent translate-y-[20%] w-full md:w-2/3 flex flex-col justify-between">
            <h2 className="text-[8vw] md:text-[4vw] lg:text-[3.7vw] font-semibold leading-tight">
              The Experts in
              <br />
              Mulesoft Integration
            </h2>
            <p className="pt-[10%] pb-[15%] md:py-0 text-[4vw] md:text-[2vw] lg:text-[1.8vw] leading-tight">
              Samvidh is the premier choice for Mulesoft services, offering a
              comprehensive range of integration and API management solutions
              that will help you to transform your business and drive digital
              innovation.
            </p>
            <a
              href="#"
              className="uppercase bg-gradient-to-l from-yellow to-red text-white px-10 py-5 w-fit"
            >
              Take A Tour
            </a>
          </div>
        </div>
      </main>
    </>
  );
}
