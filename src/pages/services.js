import Head from "next/head";

export default function services() {
  return (
    <>
      <Head>
        <title>Samvidh | Services</title>
        <meta name="description" content="Samvidh" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className="px-[10%] font-graphik pt-[5%]">
        <section className="text-center animate-slideContent translate-y-[20%]">
          <h1 className="text-[48px] font-semibold leading-tight">
            Automate your routine work and integrate systems to free up time and
            move your company forward
          </h1>
          <p className="pt-[1%] pb-[10%] md:pb-[3%] md:px-[10%] text-[24px] leading-tight">
            MuleSoft will give your IT team the tools to automate everything and
            anything. Handle integrating data and systems, automating workflows
            and processes, and creating seamless digital experiences — all on a
            single, easy-to-use platform.
          </p>
          <a
            href="#"
            className="uppercase bg-blue text-white px-10 py-5 w-fit"
          >
            Explore
          </a>
        </section>
        <section className="pt-[5%]">
          <h2 className="text-[30px] pt-[5%] font-semibold leading-tight">
            Discover the power of Mulesoft: the leading integration and API
            management platform
          </h2>
          <p className="pt-[5%] text-[20px] leading-tight">
            Firstly, IT departments are often the most in demand function within
            a business. Finding the time to focus on the important projects, the
            projects that will{" "}
            <span className="font-bold">really push your business forward</span>{" "}
            can be difficult. Automation and integration can solve most of your
            complex IT issues, and Mulesoft is a powerhouse for automating and
            simplifying workflows. <br /> <br />
            Mulesoft is a company that provides tools and services for
            integration and API management. As such, they play a critical role
            in automation by helping organizations connect and automate the flow
            of data and functionality between their various systems,
            applications, and platforms.
            <br /> <br />
            For example, let&apos;s say an organization has a customer database,
            an e-commerce platform, and a CRM system. Using Mulesoft&apos;s
            integration platform, Anypoint Platform (which we&apos;ll cover in
            another section below), the organization can automate the flow of
            data between these systems so that customer information is
            automatically updated in the CRM whenever a purchase is made on the
            e-commerce platform. This can help the organization streamline its
            processes and save time by eliminating the need for manual data
            entry. <br /> <br /> In this way, Mulesoft&apos;s tools and services
            can be used to support automation in various areas of an
            organization, including business processes, data management, and
            application development.
            <br />
            <br />
          </p>
          <div className="flex flex-row-reverse gap-10">
            <p className="text-[20px] leading-tight">
              &quot;Mulesoft and Salesforce work together to help organizations
              connect and integrate their systems and platforms, exchange data
              and functionality, and build custom solutions that leveage the
              power of both platforms.&quot;
            </p>
            <div className="min-h-full min-w-[8px] bg-blue"></div>
          </div>
        </section>
        <section className="pt-[5%]">
          <h2 className="text-[30px] pt-[5%] font-semibold leading-tight">
            Anypoint Platform: your key to integration and API management
            success with Mulesoft
          </h2>
          <p className="pt-[5%] text-[25px] leading-tight">
            Mulesoft&apos;s integration platform,{" "}
            <span className="font-bold">Anypoint Platform,</span> can be used to
            connect and integrate Salesforce with other systems, applications,
            and platforms. This allows organizations to exchange data and
            functionality between Salesforce and other systems in a seamless and
            automated way.
          </p>
          <p className="pt-[5%] text-[20px] leading-tight">
            For example, an organization might use the Anypoint Platform to
            synchronize customer data between Salesforce and its ERP (Enterprise
            resource planning) system, so that whenever a new customer is added
            to the ERP system, a corresponding customer record is automatically
            created in Salesforce. This can help the organization keep its
            customer information up-to-date and consistent across all systems.
            <br /> <br />
            Whether you&apos;re using the full suite of{" "}
            <span className="font-bold">Customer 360 </span>or individual
            Salesforce tools, MuleSoft and Salesforce together can unlock data
            across systems, develop scalable integration and automation
            frameworks, and create differentiated connected experiences — fast.
            Throughout the integration patterns, Salesforce products and
            automated workflows, and third-party systems, the possibilities are
            endless.
            <br /> <br />
            In addition to data synchronization, Anypoint Platform can be used
            to automate business processes that involve Salesforce. For example,
            an organization might use Mulesoft to create a new case in
            Salesforce whenever a customer submits a support request through the
            company&apos;s website. This can help the organization streamline
            its support processes and ensure that customer inquiries are
            properly tracked and resolved.
            <br /> <br />
            Mulesoft and Salesforce work together through the use of APIs
            (Application Programming Interfaces). Mulesoft&apos;s API management
            platform, API Gateway, can be used to expose Salesforce data and
            functionality to other systems and applications in a secure and
            controlled way. This allows organizations to build custom
            applications that integrate with Salesforce and make use of its data
            and functionality, such as a mobile app that allows field
            technicians to access customer information from Salesforce while
            they are on the go.
            <br />
            <br />
          </p>
        </section>
        <section className="pt-[10%]">
          <h2 className="text-[30px] font-semibold leading-tight text-center">
            Here are some examples of how Mulesoft can work with Salesforce:
          </h2>
          <div className="flex flex-col gap-y-10 pt-[5%]">
            <div className="flex flex-row items-center gap-5">
              <img src="/home.jpg" className="w-1/4" />
              <div className="flex flex-col w-3/4 md:w-1/2">
                <h2 className="font-bold text-[25px] pb-[2%]">Syncing Data</h2>
                <p className="text-[20px] leading-tight">
                  Mulesoft can be used to synchronize data between Salesforce
                  and other systems, such as a customer database or an ERP
                  system. This can help ensure that all systems have the most
                  up-to-date information about customers, products, and other
                  data points.
                </p>
              </div>
              <div className="w-0 md:w-1/4"></div>
            </div>
            <div className="flex flex-row-reverse items-center gap-5">
              <img src="/home.jpg" className="w-1/4" />
              <div className="flex flex-col w-3/4 md:w-1/2 text-end">
                <h2 className="font-bold text-[25px] pb-[2%]">
                  Building custom applications
                </h2>
                <p className="text-[20px] leading-tight">
                  Mulesoft can help to build custom applications that integrate
                  with Salesforce and make use of its data and functionality.
                  For example, building a mobile app that allows your sales team
                  to access customer information from Salesforce while they are
                  on the go.
                </p>
              </div>
              <div className="w-0 md:w-1/4"></div>
            </div>
            <div className="flex flex-row items-center gap-5">
              <img src="/home.jpg" className="w-1/4" />
              <div className="flex flex-col w-3/4 md:w-1/2">
                <h2 className="font-bold text-[25px] pb-[2%]">
                  APIs (Application Programming Interfaces)
                </h2>
                <p className="text-[20px] leading-tight">
                  Mulesoft&apos;s API management platform, API Gateway, can be
                  used to expose Salesforce data and functionality to other
                  systems and applications in a secure and controlled way.
                </p>
              </div>
              <div className="w-0 md:w-1/4"></div>
            </div>
          </div>
        </section>
        <section className="pt-[10%]">
          <h2 className="text-[30px] font-semibold leading-tight text-center">
            Experience excellence with Mulesoft services from Samvidh
          </h2>
          <div className="pt-[5%] flex flex-col md:flex-row gap-10 pb-[5%]">
            <div className=" w-full md:w-[60%]">
              <p className="text-[25px] leading-tight">
                Here at Samvidh, we&apos;ve been working with Salesforce for
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
            <img
              className="w-auto min-h-full object-cover py-[5%] md:w-[40%]"
              src="/home.jpg"
            />
          </div>
          <a
            href="#"
            className="uppercase bg-blue text-white px-10 py-5 w-fit"
          >
            TALK WITH US TODAY
          </a>
        </section>
      </main>
      <section className="mt-[10%] py-[5%] bg-blue/75 text-white">
        <h2 className="text-[48px] font-semibold leading-tight text-center">
          Customized Mulesoft solutions and exceptional results — our formula
          for happy clients
        </h2>
        <p className="pt-[5%] md:px-[10%] text-[20px] leading-tight text-center">
          &quot;I have been working with Samvidh for the past year and they have
          consistently exceeded my expectations. Their customized Mulesoft
          solutions have greatly improved the efficiency of my business and I am
          extremely satisfied with the results. I highly recommend Samvidh to
          anyone in need of Mulesoft services.&quot;
        </p>
        <h4 className="pt-[5%] md:px-[10%] font-bold text-[20px] leading-tight text-center">
          Client X — Company name
        </h4>
      </section>
      <section className="pt-[10%] px-[10%]">
        <h2 className="text-[30px] font-semibold leading-tight text-center">
          Personalized Expert solutions with Samvidh
        </h2>
        <ul className="text-[20px] pt-[5%] flex flex-row flex-wrap gap-20 justify-center items-center">
          <li className="flex flex-col items-center">
            <img src="/icon.png" />
            <p>Extensive industry-specific experience</p>
          </li>
          <li className="flex flex-col items-center">
            {" "}
            <img src="/icon.png" />
            <p>Custom, scalable solutions</p>
          </li>
          <li className="flex flex-col items-center">
            {" "}
            <img src="/icon.png" />
            <p>Proven results and track record</p>
          </li>
          <li className="flex flex-col items-center">
            {" "}
            <img src="/icon.png" />
            <p>Skilled professionals</p>
          </li>
          <li className="flex flex-col items-center">
            {" "}
            <img src="/icon.png" />
            <p>Flexible engagement models</p>
          </li>
          <li className="flex flex-col items-center">
            {" "}
            <img src="/icon.png" />
            <p>Strong program management expertise</p>
          </li>
          <li className="flex flex-col items-center">
            {" "}
            <img src="/icon.png" />
            <p>Integration specialists</p>
          </li>
          <li className="flex flex-col items-center">
            {" "}
            <img src="/icon.png" />
            <p>Strong patnerships</p>
          </li>
          <li className="flex flex-col items-center">
            {" "}
            <img src="/icon.png" />
            <p>Competitive pricing</p>
          </li>
          <li className="flex flex-col items-center">
            {" "}
            <img src="/icon.png" />
            <p>Exceptional customer service</p>
          </li>
        </ul>
      </section>
      <section className="mt-[10%] px-[10%]">
        <h2 className="text-[48px] font-semibold leading-tight text-center">
          Let&apos;s push your Mulesoft and Salesforce output to new heights
        </h2>
        <p className="pt-[5%] md:px-[10%] text-[20px] leading-tight text-center">
          We are passionate about delivering top-quality MuleSoft and Salesforce
          solutions. With a collaborative, transparent approach and a proven
          track record of success, Samvidh is the perfect partner to help your
          business reach new heights.
        </p>
        <div className="grid place-items-center pt-[5%]">
          <a
            href="#"
            className="uppercase bg-blue text-white px-10 py-5 w-fit"
          >
            Connect now
          </a>
        </div>
      </section>
    </>
  );
}
