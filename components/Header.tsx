import React, { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'

import {
    BookmarkAltIcon,
    CalendarIcon,
    ChartBarIcon,
    CursorClickIcon,
    MenuIcon,
    PhoneIcon,
    PlayIcon,
    QuestionMarkCircleIcon,
    RefreshIcon,
    ShieldCheckIcon,
    SupportIcon,
    ViewGridIcon,
    HomeIcon,
    NewspaperIcon,
    XIcon,
  } from '@heroicons/react/outline'
  import { ChevronDownIcon } from '@heroicons/react/solid'
import Link from 'next/link'
import Image from 'next/image'

  const solutions = [
    {
      name: 'Home',
      description:
        'Get a better understanding of where your traffic is coming from.',
      href: '/',
      icon: HomeIcon,
    },
    {
      name: 'About Us',
      description: 'Speak directly to your customers in a more meaningful way.',
      href: '/about',
      icon: QuestionMarkCircleIcon,
    },
    {
      name: 'Courses',
      description: "Your customers' data will be safe and secure...",
      href: '/courses',
      icon: ViewGridIcon,
    },
    {
      name: 'Team',
      description: "Your customers' data will be safe and secure...",
      href: '/team',
      icon: ViewGridIcon,
    },
    {
      name: 'Impact',
      description: "Connect with third-party tools that you're already using.",
      href: '/impact',
      icon: ShieldCheckIcon,
    },
    {
      name: 'News',
      description:
        'Build strategic funnels that will drive your customers to convert',
      href: '/news',
      icon: NewspaperIcon,
    },
  ]
  const callsToAction = [
    { name: 'Watch Demo', href: '#', icon: PlayIcon },
    { name: 'Contact Sales', href: '#', icon: PhoneIcon },
  ]
  const resources = []
  const recentPosts = []
  
  function classNames(...classes: any[]) {
    return classes.filter(Boolean).join(' ')
  }
  

export default function Header() {
    return (
        <div className="sticky top-0 z-20 bg-white">
          <Popover className="relative z-10 bg-transparent">
            <div className="mx-auto max-w-7xl px-4 sm:px-6">
              <div className="flex items-center justify-between border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
                <div className="flex items-center justify-start lg:w-0 lg:flex-1">
                  <Link href="/">
                    <Image
                    width={100}
                    height={100}
                      className="h-10 w-auto sm:h-10"
                      src="/logosm.png"
                      alt=""
                    />
                  </Link>
                  <h1 className="items-center justify-center pl-3 text-sm font-semibold">Open and Distance Learning Center</h1>
                
                  
                </div>
                <div className="-my-2 -mr-2 md:hidden">
                  <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="sr-only">Open menu</span>
                    <MenuIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
                <Popover.Group as="nav" className="hidden space-x-10 md:flex">
                  <Link 
                    href="/"
                    className="text-base font-medium text-red-600 hover:text-yellow-500"
                  >
                    Home
                  </Link>
    
                  <Link
                    href="/about"
                    className="text-base font-medium text-red-600 hover:text-yellow-500"
                  >
                    About Us
                  </Link>
                  <Link
                    href="/courses"
                    className="text-base font-medium text-red-600 hover:text-yellow-500"
                  >
                    Courses
                  </Link>
                  <Link
                    href="/team"
                    className="text-base font-medium text-red-600 hover:text-yellow-500"
                  >
                    Team
                  </Link>
                  <Link
                    href="/impact"
                    className="text-base font-medium text-red-600 hover:text-yellow-500"
                  >
                    Impact
                  </Link>
                  <Link
                    href="/news"
                    className="text-base font-medium text-red-600 hover:text-yellow-500 "
                  >
                    Newss
                  </Link>
                </Popover.Group>
                <div className="hidden items-center justify-end md:flex md:flex-1 lg:w-0">
                  <Link
                    href="/contact"
                    className="ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-red-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-yellow-500"
                  >
                    Contact
                  </Link>
                </div>
              </div>
            </div>
    
            <Transition
              as={Fragment}
              enter="duration-200 ease-out"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="duration-100 ease-in"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Popover.Panel
                focus
                className="absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden"
              >
                <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                  <div className="px-5 pt-5 pb-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <Image
                          className="h-10 w-auto"
                          src="/logosm.png"
                          alt="Uinical odlc"
                        />
                      </div>
                     
                      <div className="-mr-2">
                        <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                          <span className="sr-only">Close menu</span>
                          <XIcon className="h-6 w-6" aria-hidden="true" />
                        </Popover.Button>
                      </div>
                    </div>
                    <div className="mt-6">
                      <nav className="grid gap-y-8">
                        {solutions.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            className="-m-3 flex items-center rounded-md p-3  hover:bg-yellow-500"
                          >
                            <item.icon
                              className="h-6 w-6 flex-shrink-0 text-red-800"
                              aria-hidden="true"
                            />
                            <span className="ml-3 text-base font-medium text-red-800">
                              {item.name}
                            </span>
                          </a>
                        ))}
                      </nav>
                    </div>
                  </div>
                  <div className="space-y-6 py-6 px-5">
                    <div className="grid grid-cols-2 gap-y-4 gap-x-8"></div>
                    <div>
                      <Link
                        href="/contact"
                        className="flex w-full items-center justify-center rounded-md border border-transparent bg-red-800 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-red-500"
                      >
                        Contact Us
                      </Link>
                    </div>
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>
        </div>
      )
}
