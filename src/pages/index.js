import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Samvidh</title>
        <meta name="description" content="Samvidh" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className="px-[10%] font-graphik pt-[5%]">
        <div className="flex flex-col md:flex-row gap-20">
          <div className="w-full md:w-1/2 relative overflow-clip group">
            <img
              src="transparentperson.png"
              className="w-full h-auto invisible"
            />
            <div className="bg-gradient-to-l from-yellow to-red w-full h-[80%] absolute top-[100%] left-0 -z-10 animate-slideFast" />
            <img
              src="transparentperson.png"
              className="w-full h-full absolute top-[100%] left-0 animate-slideSlow"
            />
          </div>
          <div className="w-full md:w-1/2 animate-slideContent translate-y-[20%]">
            <h2 className="lg:text-[3vw] font-semibold">
              The Experts in
              <br />
              Mulesoft Integration
            </h2>
            <p className="lg:text-[1.5vw] leading-tight pt-[5%] pb-[10%]">
              Samvidh is the premier choice for Mulesoft services, offering a
              comprehensive range of integration and API management solutions
              that will help you to transform your business and drive digital
              innovation.
            </p>
            <a href="#" className="uppercase bg-gradient-to-l from-yellow to-red text-white px-10 py-5">Take A Tour</a>
          </div>
        </div>
      </main>
    </>
  );
}
