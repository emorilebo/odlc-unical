import Image from 'next/image'
import React from 'react'

function contact() {
  return (
    <div className="bg-white">
    <main>
      {/* Header */}
      <div className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-md pl-4 pr-8 sm:max-w-lg sm:px-6 lg:max-w-7xl lg:px-8">
          <h1 className="text-center text-4xl font-extrabold leading-10 tracking-tight text-gray-900 sm:text-5xl sm:leading-none lg:text-6xl">
            Get in touch
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-center text-2xl leading-normal text-blue-900 italic"> dirodlc@unical.edu.ng; 07069099650</p>
          <p className="mx-auto mt-6 max-w-3xl text-center text-xl leading-normal text-gray-500">
          We appreciate your interest in the University of Calabar Open and Distance Learning Centre. If you have any questions, inquiries, or feedback, please feel free to reach out to us using the contact information provided below. Our dedicated team is here to assist you.
          </p>
          
        </div>
      </div>

      {/* Contact Section */}
      <div className="relative bg-white">
        <div className="lg:absolute lg:inset-0">
          <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
            <Image
            width={1000}
            height={1000}
              className="h-56 w-full object-cover lg:absolute lg:h-full"
              src="/classroom.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="relative py-16 px-4 sm:py-24 sm:px-6 lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2 lg:px-8 lg:py-32">
          <div className="lg:pr-8">
            <div className="mx-auto max-w-md sm:max-w-lg lg:mx-0">
              <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
              General Inquiries:
              </h2>
             
              <p className="mt-4 text-lg text-gray-500 sm:mt-3">
              For general inquiries about our Open and Distance Learning Centre, our programmes, admission process, or any other information, please contact our friendly support staff. We are here to provide you with the assistance you need.
              </p>
              <form
                action="#"
                method="POST"
                className="mt-9 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
              >
                <div>
                  <label
                    htmlFor="first-name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    First name
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="first-name"
                      id="first-name"
                      autoComplete="given-name"
                      className="focus:ring-grape-500 focus:border-grape-500 block w-full rounded-md border-gray-300 shadow-sm sm:text-sm"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="last-name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Last name
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="last-name"
                      id="last-name"
                      autoComplete="family-name"
                      className="focus:ring-grape-500 focus:border-grape-500 block w-full rounded-md border-gray-300 shadow-sm sm:text-sm"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email
                  </label>
                  <div className="mt-1">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      className="focus:ring-grape-500 focus:border-grape-500 block w-full rounded-md border-gray-300 shadow-sm sm:text-sm"
                    />
                  </div>
                </div>
               
                <div className="sm:col-span-2">
                  <div className="flex justify-between">
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Phone
                    </label>
                   
                  </div>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="phone"
                      id="phone"
                      autoComplete="tel"
                      aria-describedby="phone-description"
                      className="focus:ring-grape-500 focus:border-grape-500 block w-full rounded-md border-gray-300 shadow-sm sm:text-sm"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <div className="flex justify-between">
                    <label
                      htmlFor="how-can-we-help"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Inquery
                    </label>
                    <span
                      id="how-can-we-help-description"
                      className="text-sm text-gray-500"
                    >
                      Max. 500 characters
                    </span>
                  </div>
                  <div className="mt-1">
                    <textarea
                      id="how-can-we-help"
                      name="how-can-we-help"
                      aria-describedby="how-can-we-help-description"
                      rows={4}
                      className="focus:ring-grape-500 focus:border-grape-500 block w-full rounded-md border border-gray-300 shadow-sm sm:text-sm"
                      defaultValue={''}
                    />
                  </div>
                </div>
               
               
                <div className="text-right sm:col-span-2">
                  <button
                    type="submit"
                    className="bg-blue-400 hover:bg-red-500 focus:ring-grape-500 inline-flex justify-center rounded-md border border-blue-200 py-2 px-4 text-sm font-medium text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
  )
}

export default contact