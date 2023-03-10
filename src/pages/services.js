import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Head from "next/head";
import Image from "next/image";
import Service_a from "../../public/Service_a.svg";
import Service_13 from "../../public/Service-13.svg";
import Service_14 from "../../public/Service-14.svg";
import Service_15 from "../../public/Service-15.svg";
import Service_b from "../../public/Service-b.svg";
import Service_17 from "../../public/Service-17.svg";
import Service_18 from "../../public/Service-18.svg";
import Service_19 from "../../public/Service-19.svg";
import Service_20 from "../../public/Service-20.svg";
import Service_21 from "../../public/Service-21.svg";
import Service_22 from "../../public/Service-22.svg";
import Service_23 from "../../public/Service-23.svg";
import Service_24 from "../../public/Service-24.svg";
import Service_25 from "../../public/Service-25.svg";
import Service_26 from "../../public/Service-26.svg";
export default function Services() {
  return (
    <>
      <Head>
        <title>Samvidh | Services</title>
        <meta name="description" content="Samvidh" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className="px-[10%] font-graphik py-[5%]">
        <section className="text-center animate-slideContent translate-y-[20%] py-[10%] md:py-0">
          <h1 className="text-[48px] font-semibold leading-tight">
            Automate your routine work and integrate systems to free up time and
            move your company forward
          </h1>
          <p className=" pt-[4%] md:pt-[1%] pb-[10%] md:pb-[3%] md:px-[10%] text-[24px] leading-tight">
            MuleSoft will give your IT team the tools to automate everything and
            anything. Handle integrating data and systems, automating workflows
            and processes, and creating seamless digital experiences — all on a
            single, easy-to-use platform.
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
            className="uppercase bg-blue text-white px-10 py-5 w-fit transition-shadow duration-500 ease-in-out hover:shadow-2xl"
          >
            Explore
          </button>
        </section>
      </main>
      <section id="content" className="py-[5%] bg-grey px-[10%]">
        <h2 className="text-[30px] pt-[5%] font-semibold leading-tight">
          Discover the power of Mulesoft: the leading integration and API
          management platform
        </h2>
        <p className="pt-[5%] text-[20px] leading-tight">
          Firstly, IT departments are often the most in demand function within a
          business. Finding the time to focus on the important projects, the
          projects that will{" "}
          <span className="font-bold">really push your business forward</span>{" "}
          can be difficult. Automation and integration can solve most of your
          complex IT issues, and Mulesoft is a powerhouse for automating and
          simplifying workflows. <br /> <br />
          Mulesoft is a company that provides tools and services for integration
          and API management. As such, they play a critical role in automation
          by helping organizations connect and automate the flow of data and
          functionality between their various systems, applications, and
          platforms.
          <br /> <br />
          For example, let&#x27;s say an organization has a customer database,
          an e-commerce platform, and a CRM system. Using Mulesoft&#x27;s
          integration platform, Anypoint Platform (which we&#x27;ll cover in
          another section below), the organization can automate the flow of data
          between these systems so that customer information is automatically
          updated in the CRM whenever a purchase is made on the e-commerce
          platform. This can help the organization streamline its processes and
          save time by eliminating the need for manual data entry. <br /> <br />{" "}
          In this way, Mulesoft&#x27;s tools and services can be used to support
          automation in various areas of an organization, including business
          processes, data management, and application development.
          <br />
          <br />
        </p>
        <div className="flex flex-row-reverse gap-10">
          <p className="text-[20px] leading-tight">
            &quot;Mulesoft and Salesforce work together to help organizations
            connect and integrate their systems and platforms, exchange data and
            functionality, and build custom solutions that leveage the power of
            both platforms.&quot;
          </p>
          <div className="min-h-full min-w-[8px] bg-blue"></div>
        </div>
      </section>
      <main className="px-[10%] font-graphik pt-[5%]">
        <section className="pt-[5%]">
          <h2 className="text-[30px] pt-[5%] font-semibold leading-tight">
            Anypoint Platform: your key to integration and API management
            success with Mulesoft
          </h2>
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-1/2">
              <p className="pt-[5%] text-[25px] leading-tight">
                Mulesoft&#x27;s integration platform,{" "}
                <span className="font-bold">Anypoint Platform,</span> can be
                used to connect and integrate Salesforce with other systems,
                applications, and platforms. This allows organizations to
                exchange data and functionality between Salesforce and other
                systems in a seamless and automated way.
              </p>
              <p className="py-[5%] text-[20px] leading-tight">
                For example, an organization might use the Anypoint Platform to
                synchronize customer data between Salesforce and its ERP
                (Enterprise resource planning) system, so that whenever a new
                customer is added to the ERP system, a corresponding customer
                record is automatically created in Salesforce. This can help the
                organization keep its customer information up-to-date and
                consistent across all systems.
                <br /> <br />
                Whether you&#x27;re using the full suite of{" "}
                <span className="font-bold">Customer 360 </span>or individual
                Salesforce tools, MuleSoft and Salesforce together can unlock
                data across systems, develop scalable integration and automation
                frameworks, and create differentiated connected experiences —
                fast. Throughout the integration patterns, Salesforce products
                and automated workflows, and third-party systems, the
                possibilities are endless.
                <br /> <br />
                In addition to data synchronization, Anypoint Platform can be
                used to automate business processes that involve Salesforce. For
                example, an organization might use Mulesoft to create a new case
                in Salesforce whenever a customer submits a support request
                through the company&#x27;s website. This can help the
                organization streamline its support processes and ensure that
                customer inquiries are properly tracked and resolved.
                <br /> <br />
                Mulesoft and Salesforce work together through the use of APIs
                (Application Programming Interfaces). Mulesoft&#x27;s API
                management platform, API Gateway, can be used to expose
                Salesforce data and functionality to other systems and
                applications in a secure and controlled way. This allows
                organizations to build custom applications that integrate with
                Salesforce and make use of its data and functionality, such as a
                mobile app that allows field technicians to access customer
                information from Salesforce while they are on the go.
                <br />
                <br />
              </p>
            </div>
            <Image
              src={Service_a}
              alt=""
              className="w-full md:w-1/2 object-contain h-auto"
            />
          </div>
        </section>
      </main>
      <section className="py-[5%] bg-grey px-[10%]">
        <h2 className="text-[30px] font-semibold leading-tight text-center">
          Here are some examples of how Mulesoft can work with Salesforce:
        </h2>
        <div className="flex flex-col gap-y-10 pt-[5%]">
          <div className="flex flex-col md:flex-row items-center gap-5">
            <Image src={Service_13} className="w-1/2 md:w-1/4" />
            <div className="flex flex-col w-3/4 md:w-1/2">
              <h2 className="font-bold text-[25px] pb-[2%]">Syncing Data</h2>
              <p className="text-[20px] leading-tight">
                Mulesoft can be used to synchronize data between Salesforce and
                other systems, such as a customer database or an ERP system.
                This can help ensure that all systems have the most up-to-date
                information about customers, products, and other data points.
              </p>
            </div>
            <div className="w-0 md:w-1/4"></div>
          </div>
          <div className="flex flex-col md:flex-row-reverse items-center gap-5">
            <Image src={Service_14} className="w-1/2 md:w-1/4" />
            <div className="flex flex-col w-3/4 md:w-1/2 md:text-end">
              <h2 className="font-bold text-[25px] pb-[2%]">
                Building custom applications
              </h2>
              <p className="text-[20px] leading-tight">
                Mulesoft can help to build custom applications that integrate
                with Salesforce and make use of its data and functionality. For
                example, building a mobile app that allows your sales team to
                access customer information from Salesforce while they are on
                the go.
              </p>
            </div>
            <div className="w-0 md:w-1/4"></div>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-5">
            <Image src={Service_15} className="w-1/2 md:w-1/4" />
            <div className="flex flex-col w-3/4 md:w-1/2">
              <h2 className="font-bold text-[25px] pb-[2%]">
                APIs (Application Programming Interfaces)
              </h2>
              <p className="text-[20px] leading-tight">
                Mulesoft&#x27;s API management platform, API Gateway, can be
                used to expose Salesforce data and functionality to other
                systems and applications in a secure and controlled way.
              </p>
            </div>
            <div className="w-0 md:w-1/4"></div>
          </div>
        </div>
      </section>
      <main className="px-[10%]">
        <section className="pt-[10%]">
          <h2 className="text-[30px] font-semibold leading-tight text-center">
            Experience excellence with Mulesoft services from Samvidh
          </h2>
          <div className="pt-[5%] flex flex-col md:flex-row gap-1 md:gap-10">
            <div className=" w-full md:w-[50%]">
              <p className="text-[25px] leading-tight">
                Here at Samvidh, we&#x27;ve been working with Salesforce for
                many years, and our team of experts have helped numerous
                organizations like yours to unlock the full potential of this
                powerful CRM platform.
              </p>
              <p className="pt-[5%] text-[20px] leading-tight">
                We have a deep understanding of how to use Salesforce to solve
                real-world problems, and we have a track record of delivering
                successful Salesforce projects for our clients.
                <br /> <br />
                But our expertise with Salesforce goes beyond just implementing
                and customizing the platform. We are also experts in integration
                and API management, which are critical skills for optimizing the
                value of Salesforce and extending its capabilities. This is
                where Mulesoft comes in.
                <br /> <br />
                As a Mulesoft Partner, we have access to the latest integration
                and API management technologies and best practices, which we use
                to help our clients connect and integrate Salesforce with other
                systems and platforms. This allows our clients to exchange data
                and functionality between Salesforce and other systems in a
                seamless and automated way, and to build custom solutions that
                leverage the power of Salesforce.
                <br /> <br />
                Our expertise with Salesforce and Mulesoft gives us the
                knowledge and skills to help our clients get the most out of
                these powerful platforms and achieve their business goals.
                <br />
                <br />
              </p>
            </div>
            <Image
              className="w-auto min-h-full object-contain py-[5%] md:w-[40%]"
              src={Service_b}
            />
          </div>
          <div className="grid place-items-center md:place-items-start">
            <a
              href="https://samvidhtech.com/contactus."
              className="uppercase bg-blue text-white px-10 py-5 w-fit transition-shadow duration-500 ease-in-out hover:shadow-2xl"
            >
              TALK WITH US TODAY
            </a>
          </div>
        </section>
      </main>
      <section class="bg-grey mt-[5%] py-[5%]">
      <h2
        class="text-center text-[30px] pb-20 md:pb-40 font-bold"
      >
        Our Offerings
      </h2>
      <div
        class="flex flex-col md:flex-row justify-evenly gap-y-[10vw] md:gap-[5%] px-[15%]"
      >
        <div class="w-full md:w-1/2 relative">
          <img src="/officeperson1.jpg" class="object-contain" />
          <div
            class="absolute bottom-0 w-full h-[30%] bg-white/75 flex flex-row items-center justify-between"
          >
            <div class="text-center w-full">
              <p class="text-[25px] font-semibold md:font-normal">
                Managed Services
              </p>
            </div>
            <a
              href="https://samvidhtech.com/managed.html"
              class="h-full sm:h-auto flex items-center justify-center py-1.5 px-4 lg:py-3 lg:px-8 bg-blue text-white shrink-0"
              >Learn More</a
            >
          </div>
        </div>
        <div class="w-full md:w-1/2 relative">
          <img src="/officeperson2.jpg" class="object-contain" />
          <div
            class="absolute bottom-0 w-full h-[30%] bg-white/75 flex flex-row items-center justify-between"
          >
            <div class="text-center w-full">
              <p class="text-[25px] font-semibold md:font-normal">
                Advisory Services
              </p>
            </div>
            <a
              href="https://samvidhtech.com/advisory.html"
              class="h-full sm:h-auto flex items-center justify-center py-1.5 px-4 lg:py-3 lg:px-8 bg-blue text-white shrink-0"
              >Learn More</a
            >
          </div>
        </div>
      </div>
    </section>
      <section className="py-[5%] bg-blue/75 text-white">
        <h2 className="text-[48px] font-semibold leading-tight text-center md:px-[10%]">
          Customized Mulesoft solutions and exceptional results — our formula
          for happy clients
        </h2>
        <p className="pt-[3%] md:px-[10%] text-[20px] leading-tight text-center px-[5%]">
          &quot;I have been working with Samvidh for the past year and they have
          consistently exceeded my expectations. Their customized Mulesoft
          solutions have greatly improved the efficiency of my business and I am
          extremely satisfied with the results. I highly recommend Samvidh to
          anyone in need of Mulesoft services.&quot;
        </p>
        <h4 className="pt-[3%] md:px-[10%] font-bold text-[20px] leading-tight text-center">
          Client X — Company name
        </h4>
      </section>
      <section className="pt-[10%] px-[10%]">
        <h2 className="text-[30px] font-semibold leading-tight text-center">
          Personalized Expert solutions with Samvidh
        </h2>

        <ul className="text-[20px] pt-[5%] flex flex-row flex-wrap gap-20 justify-center items-center text-center">
          <li className="flex flex-col items-center">
            <Image src={Service_17} />
            <p>Extensive industry-specific experience</p>
          </li>
          <li className="flex flex-col items-center">
            <Image src={Service_18} />
            <p>Custom, scalable solutions</p>
          </li>
          <li className="flex flex-col items-center">
            <Image src={Service_19} />
            <p>Proven results and track record</p>
          </li>
          <li className="flex flex-col items-center">
            <Image src={Service_20} />
            <p>Skilled professionals</p>
          </li>
          <li className="flex flex-col items-center">
            <Image src={Service_21} />
            <p>Flexible engagement models</p>
          </li>
          <li className="flex flex-col items-center">
            <Image src={Service_22} />
            <p>Strong program management expertise</p>
          </li>
          <li className="flex flex-col items-center">
            <Image src={Service_23} />
            <p>Integration specialists</p>
          </li>
          <li className="flex flex-col items-center">
            <Image src={Service_24} />
            <p>Strong patnerships</p>
          </li>
          <li className="flex flex-col items-center">
            <Image src={Service_25} />
            <p>Competitive pricing</p>
          </li>
          <li className="flex flex-col items-center">
            <Image src={Service_26} />
            <p>Exceptional customer service</p>
          </li>
        </ul>
      </section>
      <section className="mt-[10%] px-[10%]">
        <h2 className="text-[48px] font-semibold leading-tight text-center">
          Let&#x27;s push your Mulesoft and Salesforce output to new heights
        </h2>
        
        <p className="pt-[5%] md:px-[10%] text-[20px] leading-tight text-center pb-[5%] md:pb-0">
          We are passionate about delivering top-quality MuleSoft and Salesforce
          solutions. With a collaborative, transparent approach and a proven
          track record of success, Samvidh is the perfect partner to help your
          business reach new heights.
        </p>
        <div className="grid place-items-center pt-[5%]">
          <a
            href="https://samvidhtech.com"
            className="uppercase bg-blue text-white px-10 py-5 w-fit transition-shadow duration-500 ease-in-out hover:shadow-2xl"
          >
            Discover Samvidh
          </a>
        </div>
      </section>
    </>
  );
}
Services.getLayout = function getLayout(page) {
  return (
    <>
      <Navbar />
      {page}
      <Footer />
    </>
  );
};
