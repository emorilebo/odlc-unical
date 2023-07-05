

import React from 'react'
import Image from 'next/image'
import Typewriter from 'typewriter-effect'

import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

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
              <h1 className="text-2xl font-extrabold tracking-tight text-blue-900 sm:text-4xl md:text-5xl">
                <span className="block text-yellow-500 xl:inline">
                  Sustainable living through
                </span>{' '}
                {/* <span className="block text-indigo-600 xl:inline">
                      online business
                    </span> */}
                <Typewriter
                  onInit={(typewriter) => {
                    typewriter
                      .typeString('Quality & Value for money')
                      .pauseFor(2000)
                      .deleteAll()
                      .typeString('Integrity')
                      .deleteAll()
                      .typeString('Honesty')
                      .deleteAll()
                      .typeString('Sustainability')
                      .deleteAll()
                      .start()
                  }}
                />
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-xl lg:mx-0">
                Enabling families and households to attain a healthy and
                luxurious living in a sustainable way leveraging on green &
                renewable technologies.{' '}
              </p>

              <div className="mt-5 hidden sm:mt-8 sm:justify-center lg:inline-flex lg:justify-start">
                <div className=" rounded-md shadow">
                  <a
                    href="/projects"
                    className=" flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 md:py-4 md:px-10 md:text-lg"
                  >
                    Check Properties
                  </a>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <a
                    href="/contact"
                    className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-100 px-8 py-3 text-base font-medium text-indigo-700 hover:bg-indigo-200 md:py-4 md:px-10 md:text-lg"
                  >
                    Contact Us
                  </a>
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
              {/* <Image src="/gate.jpg" layout="fill"alt="Unical gate" /> */}
              <img src="avenue5.jpg" />
              <p className="legend">Avenue</p>
            </div>
            <div>
              <Image src="/library.jpg" layout="fill" alt="Unical gate"/>

              <p className="legend">Properties in Ikoyi</p>
            </div>
            <div>
              <Image src="/library2.jpg" layout="fill" alt="Unical gate" />
              <p className="legend">Properties in Ikoyi</p>
            </div>
            <div>
              <Image src="/senate.jpg" layout="fill" alt="Unical gate" />
              <p className="legend">Properties in Ikoyi</p>
            </div>
            <div>
              <Image src="/stpaul.jpg" layout="fill" alt="Unical gate" />
              <p className="legend">Properties in Lekki</p>
            </div>
            <div>
              <Image src="/chapel.jpg" layout="fill"  alt="Unical gate"/>
              <p className="legend">Properties in Lekki</p>
            </div>
            <div>
              <Image src="/library3.jpg" layout="fill" alt="Unical gate" />
              <p className="legend">Properties in Lekki</p>
            </div>
            
          </Carousel>
        </div>
      </div>
    </div>
  )
}
