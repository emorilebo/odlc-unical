

import React from 'react'
import Image from 'next/image'
import Typewriter from 'typewriter-effect'

import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import Link from 'next/link'

export default function Banner() {
  return (
    <div className="relative overflow-hidden bg-white">
      <div className="mx-auto max-w-7xl">
        <div className="relative z-10 bg-white pb-8 sm:pb-16 md:pb-20 lg:w-full lg:max-w-2xl lg:pb-28 xl:pb-32">
          <svg
            className="absolute inset-y-0 right-0 hidden h-full w-48 translate-x-1/2 transform text-white lg:block"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>

          <main className="mx-auto mt-10 max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-2xl font-extrabold tracking-tight text-blue-900 sm:text-2xl md:text-4xl">
                <span className="block text-red-500 xl:inline">
                Open and Distance Learning Centre, University of Calabar.
                </span>{' '}
                {/* <span className="block text-indigo-600 xl:inline">
                      online business
                    </span> */}
                <Typewriter
                  onInit={(typewriter) => {
                    typewriter
                      .typeString('Flexible Education for a Dynamic World')
                      .pauseFor(3000)
                      .deleteAll()
                      .typeString('Transformative Learning Experience')
                      .pauseFor(2000)
                      .deleteAll()
                      .typeString('Breaking Barriers, Empowering Minds')
                      .pauseFor(2000)
                      .deleteAll()
                      .typeString('Discover Our Online Degree Programs')
                      .pauseFor(1000)
                      .deleteAll()
                      .start()
                  }}
                />
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-xl lg:mx-0">
              Offering a flexible and accessible learning experience that breaks down barriers to education. Through our online programmes, we empower learners to pursue their academic and professional goals, providing high-quality education anytime and anywhere.{' '}
              </p>

              <div className="mt-5 sm:mt-8 sm:justify-center lg:inline-flex lg:justify-start">
                <div className=" rounded-md shadow">
                  <Link
                    href="https://odlc.unical.edu.ng"
                    className=" flex w-full items-center justify-center rounded-md border border-transparent bg-red-600 px-8 py-3 text-md font-medium text-white hover:bg-indigo-700 md:py-4 md:px-10 md:text-md"
                  >
                    Visit ODLC Portal
                  </Link>
                </div>
                <div className=" mt-3 sm:mt-0 sm:ml-3">
                  <Link
                    href="https://www.unical.edu.ng/"
                    className=" flex w-full items-center justify-center rounded-md border border-red-600 bg-white px-8 py-3 text-md font-medium text-red-600 hover:bg-red-700 md:py-4 md:px-10 md:text-md"
                  >
                    Visit Unical
                  </Link>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <Link
                    href="/odlcform"
                    className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-100 px-8 py-3 text-md font-medium text-indigo-700 hover:bg-indigo-200 md:py-4 md:px-10 md:text-md"
                  >
                    Addmission
                  </Link>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <div className="h-60 w-full object-cover sm:h-72 md:h-96 lg:h-full lg:w-full">
          <Carousel
            interval={4000}
            showThumbs={false}
            infiniteLoop={true}
            autoPlay={true}
          >
            <div>
              <Image src="/odlc.jpg"  width={1600} height={936}  alt="Open and Distance Learning" />
              <p className="legend">Open and Distance Learning Center</p>
            </div>
            <div>
              <Image src="/gate4.jpg" width={1600} height={936}  alt="Unical Entrance" />
              <p className="legend">University of Calabar Gate</p>
            </div>
            <div>
              <Image src="/bookshop.jpg" width={1600} height={936}  alt="Book shop" />
              <p className="legend">Book shop</p>
            </div>
            <div>
              <Image src="/dentistry.jpg" width={1600} height={936}  alt="Dentistry" />
              <p className="legend">Faculty of Dentistry</p>
            </div>
            <div>
              <Image src="/pav.jpg" width={1600} height={936}  alt="Lecture Classroom" />
              <p className="legend">Lecture classroom</p>
            </div>
            <div>
              <Image src="/chapelofredemption.jpg" width={1600} height={936}  alt="Unical library" />
              <p className="legend">Chapel of Redemption</p>
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  )
}
