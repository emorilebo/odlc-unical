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
              className="pl-8 h-56 w-full object-cover lg:absolute lg:h-80"
              src="/odlc.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="relative px-4 pt-12 pb-16 sm:px-6 sm:pt-12 lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2 lg:px-8">
          <div className="lg:col-start-2 lg:pl-8">
            <div className="mx-auto max-w-prose text-base lg:ml-auto lg:mr-0 lg:max-w-lg ">
              <div className="flex justify-center">
                <Image
                  width={120}
                  height={120}
                  className="h-15 w-auto sm:h-10"
                  src="/logosm.png"
                  alt=""
                />
              </div>
              {/* <h3 className="mt-1 text-2xl font-extrabold leading-8 tracking-tight text-gray-900 sm:text-3xl">
                About ODLC University of Calabar.
              </h3> */}
              <h4 className="mt-1 text-sm font-extrabold leading-8 tracking-tight text-gray-900 sm:text-2xl">
                ABOUT THE OPEN AND DISTANCE LEARNING CENTRE OF THE UNIVERSITY OF
                CALABAR
              </h4>
              <p className="mt-8 text-md text-gray-500">
                The University of Calabar is a dual-mode University. This means
                that it operates as a regular University and as a Distance
                e-Learning University. In the Open and Distance Learning Centre
                (ODLC), the University runs online degrees where the lectures
                are mostly online with limited physical interaction. The
                examinations are done face-to-face. The advantages of the Open
                and Distance Learning programmes are many and profound. Students
                who are unable to pursue University degrees due to employment,
                business, marriage and other constraints can take advantage of
                the Open and Distance Learning Centre to run their degrees. The
                ODLC students have access to the well organized course
                materials, links and rich online lectures. Those who miss the
                real time lectures can access the same through recorded videos,
                audios, etc.
              </p>
              <div className="prose prose-indigo mt-5 text-gray-500">
                {/* <p className="text-xl font-semibold mt-2 text-black">Vision</p> */}
                <p className="">
                  There is no difference between degrees obtained at the regular
                  programmes and those obtained from the Open and Distance
                  Learning Centre. Both groups of students participate in the
                  same ceremony during convocations. This is because both groups
                  are taught by the same Lecturers and their results are
                  approved by the same University Senate. The same entry
                  qualifications are required from both groups.
                </p>
                {/* <p className="text-xl font-semibold mt-5 text-black">Mission</p> */}
                <p className="mt-5">
                  The convenience of doing a University degree at the comfort of
                  one&apos;s location and time is what stands out the Open and
                  Distance Learning programmes. The University of Calabar has
                  been in operation for about fifty years now. It has many
                  laurels to show for her academic prowess and experience. We
                  are processing admissions for both year 1 and Direct Entry
                  students. In the meantime we are admitting students into the
                  B. Sc. Business Management programme. In 2024, more programmes
                  will be included. Interested candidates can purchase the
                  Admission Form as indicated and proceed with the admission
                  processing.
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
