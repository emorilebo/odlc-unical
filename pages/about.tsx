import Image from "next/image";
import React from "react";

function About() {
  return (
    <div>
      <div className="relative bg-white">
        <div className="lg:absolute lg:inset-0">
          <div className="lg:absolute lg:inset-y-0 lg:left-0 lg:w-1/2">
            <Image
              width={400}
              height={300}
              className="h-56 w-full object-cover lg:absolute lg:h-full"
              src="/odlc.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="relative px-4 pt-12 pb-16 sm:px-6 sm:pt-12 lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2 lg:px-8">
          <div className="lg:col-start-2 lg:pl-8">
            <div className="mx-auto max-w-prose text-base lg:ml-auto lg:mr-0 lg:max-w-lg">
              <Image
                width={100}
                height={100}
                className="h-10 w-auto sm:h-10"
                src="/logosm.png"
                alt=""
              />
              <h3 className="mt-1 text-2xl font-extrabold leading-8 tracking-tight text-gray-900 sm:text-3xl">
                About ODLC University of Calabar.
              </h3>
              <p className="mt-8 text-md text-gray-500">
                The Open and Distance Learning Centre of the University of
                Calabar was set up in December 2022 following approvals from the
                University Senate, Council and the inspection visit of the
                National Universities Commission (NUC). Against this backdrop,
                the Vice Chancellor appointed the first Director who was
                expected to put in place arrangements and facilities in
                preparation for an approval visit by the NUC. The Centre is now
                set for NUC visit, approval and eventual take off. The idea
              </p>
              <div className="prose prose-indigo mt-5 text-gray-500">
                <p className="text-xl font-semibold mt-2 text-black">Vision</p>
                <p className="">
                  To be a Centre of excellence producing graduates that can
                  favourably compete with their peers anywhere in the world,
                  making significant contributions to development through
                  research.
                </p>
                <p className="text-xl font-semibold mt-5 text-black">Mission</p>
                <p className="">
                  To produce high-quality graduates and scholars in various
                  fields of endeavours with ICT and entrepreneurial skills
                  through quality online teaching and research.
                </p>
                <p className="text-xl font-semibold mt-5 text-black">
                  Philosophy
                </p>
                <p className="">
                  The Centre is grounded on the pursuit of knowledge, freedom
                  and service to humanity.
                </p>
                <p className="text-xl font-semibold mt-5 text-black">
                  Objectives
                </p>
                <p className="">
                  The objectives of the center are to:
                  <ul>
                    <li>
                      1. Provide unrestricted access to University education and
                      life-long learning for desiring learners who because of
                      peculiar circumstances are not able to take up the
                      conventional face-to-face education.
                    </li>
                    <li>
                      2. Collaborate with other Open and Distance Learning
                      Institutions for mutual benefits and best practices.
                    </li>
                    <li>
                      3. Continuously provide robust staff training and
                      development programmes for optimal performance.
                    </li>
                    <li>
                      4. Provide blended learning platform for knowledge
                      creation and acquisition.
                    </li>
                    <li>
                      5. Utilize the power of Open and Distance Education
                      enabled by technology to provide learning at scale and
                      accelerate progress towards the Sustainable Development
                      Goals.
                    </li>
                    <li>
                     6.  Make education open to all and promote social justice
                      through the development of knowledge and skills. Empower
                      people through the use of Open Educational Resources
                      (OERs) Massive
                    </li>
                    <li>
                     7.  Provide demand-driven programmes through Open and Distance
                      Learning to address the needs of the local and
                      international labour markets.
                    </li>
                    <li>
                     8.  Maintain high level quality assurance in service delivery.
                    </li>
                  </ul>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
