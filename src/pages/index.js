import Head from "next/head";
import Image from "next/image";
import person from "../../public/Hero.svg";
import Herob from "../../public/Herob.svg";
import home from "../../public/home.jpg";
import Heroc from "../../public/Heroc.svg";
import Herod from "../../public/Herod.svg";
import Heroe from "../../public/Heroe.svg";
import Service06 from "../../public/Service-06.svg";
import Service07 from "../../public/Service-07.svg";
import Service08 from "../../public/Service-08.svg";
import Service09 from "../../public/Service-09.svg";
import Service10 from "../../public/Service-10.svg";
import Service11 from "../../public/Service-11.svg";
// import "swiper/css";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Pagination } from "swiper";
// import "swiper/css/pagination";
export default function Home() {
  return (
    <>
      <Head>
        <title>Samvidh</title>
        <meta name="description" content="Samvidh" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className="px-[10%] font-graphik pt-[3%] scroll-smooth">
        <div className="flex flex-col md:flex-row gap-0 md:gap-20">
          <div className="relative overflow-clip md:w-2/4 w-full -ml-[5%] md:ml-0">
            <Image src={person} className="w-full h-auto invisible" />
            <div className="w-full h-[80%] absolute top-[100%] left-0 -z-10 animate-slideFast" />
            <Image
              src={person}
              className="w-full h-full absolute top-[100%] left-0 animate-slideSlow"
            />
          </div>
          <div className="animate-slideContent translate-y-[20%] w-full md:w-2/4 flex flex-col py-[10%] space-y-10">
            <h2 className="text-[48px] font-semibold leading-tight">
              The Experts in <span className="text-blue">Mulesoft</span>{" "}
              Integration
            </h2>
            <p className="pt-[10%] pb-[15%] md:py-0 text-[24px] leading-normal">
              Samvidh is the premier choice for Mulesoft services, offering a
              comprehensive range of integration and API management solutions
              that will help you to transform your business and drive digital
              innovation.
            </p>
            <button
              onClick={() => {
                window.scrollTo({
                  top:
                    document.querySelector("#content").getBoundingClientRect()
                      .top - document.querySelector("nav").clientHeight,
                  behavior: "smooth",
                });
              }}
              className="uppercase bg-gradient-to-l from-blue to-blue text-white px-16 py-3 w-fit transition-shadow duration-500 ease-in-out hover:shadow-2xl"
            >
              Know More
            </button>
          </div>
        </div>
      </main>
      <div
        id="content"
        className="my-[10%] mt-[5%] md:pt-[5%] md:pb-0 bg-grey md:bg-white px-[10%]"
      >
        <h2 className="text-[30px] font-semibold leading-tight">
          Welcome to the future of your Mulesoft SOA, SaaS, and APIs integration
        </h2>
        <div className="flex flex-col md:flex-row justify-between gap-10">
          <div className="w-full md:w-1/2">
            <p className="pt-[5%] text-[20px] leading-tight">
              <span className="font-bold">
                Samvidh is the go-to Mulesoft expert.
              </span>{" "}
              Our team of experienced professionals have been working with
              Mulesoft technologies for years, and we have a deep understanding
              of how to use Mulesoft to solve your real-world problems. <br />{" "}
              <br />
              We have a track record of delivering successful Mulesoft projects
              for our clients, and we have received numerous accolades for the
              quality of our work. <br /> <br /> But what really sets us apart
              is our commitment to excellence. We are constantly striving to
              improve our skills and stay up-to-date with the latest Mulesoft
              technologies. We know your API and Integration struggles, and
              we&apos;ve got the expertise to deliver exceptional results.{" "}
              <br /> <br /> Our clients know that when they work with us, they
              are getting the best Mulesoft services available. We are always
              there to support you whether you need help with a specific project
              or just have questions about how Mulesoft can help your business.
              <br />
              <br /> If you want to work with the best Mulesoft team in the
              industry, look no further than Samvidh. We are here to help your
              organization to succeed and grow!.
            </p>
          </div>
          <div className="w-full md:w-1/2">
            <Image src={Herob} className="object-contain w-full h-full" />
          </div>
        </div>
      </div>
      <div className="px-[10%]">
        <section className="pt-[10%]">
          <h2 className="text-[30px] pt-[5%] font-semibold leading-tight">
            Your organization deserves to work with the Best
          </h2>
          <div className="flex flex-col gap-y-10 pt-[5%]">
            <div className="flex flex-col md:flex-row items-center gap-5">
              <Image src={Heroc} className="md:w-1/4" />
              <p className="text-[20px] md:w-3/4 leading-normal md:pl-[7%]">
                One of the key reasons to choose Samvidh is our team of highly
                skilled and experienced professionals. Our team has a deep
                understanding of Mulesoft and how to leverage its capabilities
                to help clients solve complex business problems. Our track
                record proves our abilities in delivering successful Mulesoft
                projects for a wide range of clients across multiple industries,
                including healthcare, financial services, retail, and more.
              </p>
            </div>
            <div className="flex flex-col md:flex-row-reverse items-center gap-5">
              <Image src={Herod} className="md:w-1/4" />
              <p className="text-[20px] md:w-3/4 leading-normal  md:pr-[7%]">
                Technical expertise is important, but beyond that we also offer
                a commitment to excellent customer service. We understand that
                every client is unique, with their own set of challenges and
                goals. That&apos;s why we take a personalized approach to every
                project, working closely with you as the client to understand
                your needs and to ensure you get the most value from our
                services. We are dedicated to helping clients like you to
                succeed and are always available to answer questions or provide
                support along the way.
              </p>
            </div>
            <div className="flex flex-col md:flex-row items-center gap-5">
              <Image src={Heroe} className="md:w-1/4" />
              <p className="text-[20px] md:w-3/4 leading-normal  md:pl-[7%]">
                Another advantage of choosing Samvidh is our competitive
                pricing. We believe in offering high-quality services at a fair
                price, and we will work with you to develop customized pricing
                plans that meet your budget and business objectives.
              </p>
            </div>
          </div>
        </section>
      </div>
      <div className="py-[10%] mt-[5%] md:pt-[5%] md:pb-0 bg-grey md:bg-white px-[10%]">
        <h2 className="text-[30px] font-semibold leading-tight text-center md:px-[10%]">
          Why you should be using Mulesoft Integration services
        </h2>
        <p className="text-center md:px-[10%] text-[20px] pt-[5%]">
          Mulesoft is a powerhouse for integration and API services, but
          it&apos;s also much more than that. Below we&apos;ve compiled some
          great reasons your organization should be using Mulesoft.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-start place-content-center gap-10 pt-[5%]">
          <div className="space-y-[3%] flex flex-col items-center text-center text-[16px] leading-tight">
            <Image src={Service06} className="w-1/2" />
            <h3 className="font-bold ">Improved efficiency</h3>
            <p className="md:px-[10%]">
              Mulesoft can help a company integrate their systems and data,
              enabling them to automate processes and eliminate manual work.
              This can lead to increased efficiency and productivity across the
              organization.
            </p>
          </div>
          <div className="space-y-[3%] flex flex-col items-center text-center text-[16px] leading-tight">
            <Image src={Service07} className="w-1/2" />
            <h3 className="font-bold">Enhanced agility</h3>
            <p className="md:px-[10%]">
              Mulesoft&apos;s integration platform is designed to be flexible
              and adaptable, allowing a company to quickly and easily connect
              new systems and applications as their business needs evolve. This
              can help a company be more agile and responsive to change.
            </p>
          </div>
          <div className="space-y-[3%] flex flex-col items-center text-center text-[16px] leading-tight">
            <Image src={Service08} className="w-1/2" />
            <h3 className="font-bold">Increased revenue</h3>
            <p className="md:px-[10%]">
              By exposing data and functionality through APIs, a company can
              create new business opportunities and revenue streams. For
              example, it might create a developer portal and allow external
              developers to access their data and build new applications on top
              of it.
            </p>
          </div>
          <div className="space-y-[3%] flex flex-col items-center text-center text-[16px] leading-tight">
            <Image src={Service09} className="w-1/2" />
            <h3 className="font-bold"> Better customer experience</h3>
            <p className="md:px-[10%]">
              By integrating customer-facing systems and applications, a company
              can provide a more seamless and consistent experience for their
              customers. This can lead to increased customer satisfaction and
              loyalty.
            </p>
          </div>
          <div className="space-y-[3%] flex flex-col items-center text-center text-[16px] leading-tight">
            <Image src={Service10} className="w-1/2" />
            <h3 className="font-bold">Improved data quality</h3>
            <p className="md:px-[10%]">
              By integrating systems, a company can ensure that their data is
              consistent and accurate across the organization. This can improve
              decision-making and drive better business outcomes.
            </p>
          </div>
          <div className="space-y-[3%] flex flex-col items-center text-center text-[16px] leading-tight">
            <Image src={Service11} className="w-1/2" />
            <h3 className="font-bold">Reduced risk</h3>
            <p className="md:px-[10%]">
              By centralizing and standardizing integration, a company can
              reduce the risk of errors and downtime, improving the reliability
              and stability of their systems.{" "}
            </p>
          </div>
        </div>
      </div>
      <div className="px-[10%] pb-[10%] md:pb-[5%]">
        <p className="pt-[5%] md:px-[20%] text-center text-[20px] leading-tight">
          Overall, Mulesoft can help your organization become more efficient,
          agile, and innovative, driving success and growth in the digital age,
          and we&apos;ve got the skills to get you there.
        </p>
      </div>
      {/* <section className="mt-[5%] py-[5%] mb-[5%] bg-[#f7f7f7] px-[10%]">
        <h2 className="text-[30px] font-semibold leading-tight text-end">
          Partners and certifications
        </h2>
        <div className="grid grid-cols-1 pt-[5%] gap-20 sm:grid-cols-2 lg:grid-cols-4">
          <img src="/home.jpg" />
          <img src="/home.jpg" />
          <img src="/home.jpg" />
          <img src="/home.jpg" />
          <img src="/home.jpg" />
          <img src="/home.jpg" />
          <img src="/home.jpg" />
          <img src="/home.jpg" />
        </div>
      </section> */}
      {/* <div className="px-[10%]">
        <section className="pt-[5%]">
          <h2 className="text-[30px] font-semibold leading-tight text-center">
            Our customers know us best
          </h2>
          <div className="pt-[5%] flex flex-col md:flex-row items-center gap-20">
            <Swiper
              modules={[Pagination]}
              className="md:w-1/2 w-full h-[150%]"
              pagination={{ clickable: true }}
              autoplay
              speed={500}
              slidesPerView={1}
              spaceBetween={10}
            >
              <SwiperSlide className="text-[20px] pb-[10%] md:pb-[5%]">
                <h2 className="font-bold">Customer XYZ</h2>
                <p>
                  Example of a customer review, this section has dummy text.
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry&apos;s
                  standard dummy text ever since the 1500s
                </p>
              </SwiperSlide>
              <SwiperSlide className="text-[20px]">
                <h2 className="font-bold">Customer XYZ</h2>
                <p>Slide 2</p>
              </SwiperSlide>
              <SwiperSlide className="text-[20px]">
                <h2 className="font-bold">Customer XYZ</h2>
                <p>Slide 3</p>
              </SwiperSlide>
              <style jsx global>
                {`
                  .swiper-pagination {
                    text-align: start !important;
                  }
                `}
              </style>
            </Swiper>
            <Image src={home} className="w-1/2" />
          </div>
        </section>
      </div> */}
      <section class="bg-[url('/book-bg.svg')] bg-no-repeat bg-cover h-max py-20 flex flex-col md:flex-row w-full px-[10%] -mb-[10%] text-center md:text-start">
        <div class="w-full md:w-3/5 md:text-end text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white font-semibold">
          <p>
            Book a <span class="md:hidden pb-4">Discovery Session</span>
          </p>
          <p class="hidden md:block md:pt-2 md:text-4xl lg:text-5xl xl:text-6xl">
            Discovery Session
          </p>
        </div>
        <div class="flex items-center justify-center w-full pt-4 md:pt-0 md:w-2/5 mt-2 gap-y-10">
          <a
            href="https://samvidhtech.com/contactus.php"
            class="px-8 py-2 rounded-full bg-white text-2xl flex flex-row items-center gap-4"
          >
            Book Here ???
          </a>
        </div>
      </section>
    </>
  );
}
