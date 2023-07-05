import React from 'react'

function About() {
  return (
    <div>
      <div className="relative bg-white">
        <div className="lg:absolute lg:inset-0">
          <div className="lg:absolute lg:inset-y-0 lg:left-0 lg:w-1/2">
            <img
              className="h-56 w-full object-cover lg:absolute lg:h-full"
              src="/medical.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="relative px-4 pt-12 pb-16 sm:px-6 sm:pt-12 lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2 lg:px-8">
          <div className="lg:col-start-2 lg:pl-8">
            <div className="mx-auto max-w-prose text-base lg:ml-auto lg:mr-0 lg:max-w-lg">
              <img
                className="h-10 w-auto sm:h-10"
                src="/logosm.png"
                alt=""
              />
              <h3 className="mt-1 text-2xl font-extrabold leading-8 tracking-tight text-gray-900 sm:text-3xl">
                About ODLC University of Calabar.
              </h3>
              <p className="mt-8 text-md text-gray-500">
              The Open and Distance Learning Centre of the University of Calabar was set up  in December 2022 following approvals from the University Senate, Council and the inspection visit of the National Universities Commission (NUC). Against this backdrop, the Vice Chancellor appointed the first Director who was expected to put in place arrangements and facilities in preparation for an approval visit by the NUC. The Centre is now set for NUC’s visit, approval and eventual take off. The idea
              </p>
              <div className="prose prose-indigo mt-5 text-gray-500">

                <p className="text-xl font-semibold mt-2 text-black">Vision</p>
                <p className=''>
                To be a Centre of excellence producing graduates that can favourably compete with their peers anywhere in the world, making significant contributions to development through research.
                </p>
                <p className="text-xl font-semibold mt-5 text-black">Mission</p>
                <p className=''>
                To produce high-quality graduates and scholars in various fields of endeavours with ICT and entrepreneurial skills through quality online teaching and research.
                </p>
                <p className="text-xl font-semibold mt-5 text-black">Philosophy</p>
                <p className=''>
                The Centre is grounded on the pursuit of knowledge, freedom and service to humanity.
                </p>
                
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About