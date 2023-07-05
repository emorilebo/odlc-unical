import Image from 'next/image'
import React from 'react'



const courses = [
    {
      id: 1,
      name: 'B.Sc. Business Management (Accounting option)',
      href: '/accounting',
      price: ' ',
      description: 'The B.Sc. in Business Management (Accounting option) offered by the University of Calabar Open and Distance Learning Centre is designed to provide students with a solid foundation in both business management and accounting principles. This program integrates essential business knowledge with specialized accounting skills to prepare students for a successful career in the field of accounting.',
      options: '',
      imageSrc: '/accounting.jpg',
      imageAlt: 'nasarawa.',
    },
    {
      id: 2,
      name: 'B.Sc. Business Management (Marketing option)',
      href: '/accounting',
      price: ' ',
      description: 'The B.Sc. in Business Management (Marketing option) offered by the University of Calabar Open and Distance Learning Centre is designed to equip students with a strong foundation in business management principles and specialized knowledge in marketing strategies and practices. This program integrates core business concepts with in-depth marketing courses to prepare students for a successful career in the field of marketing.',
      options: '',
      imageSrc: '/management.jpeg',
      imageAlt: 'nasarawa.',
    },
    {
      id: 3,
      name: 'B.Sc. Business Management (Banking and Finance option)',
      href: '/accounting',
      price: ' ',
      description: 'The B.Sc. in Business Management (Banking and Finance option) offered by the University of Calabar Open and Distance Learning Centre is designed to provide students with a comprehensive understanding of business management principles with a specialized focus on banking and finance. This program combines core business courses with in-depth knowledge of banking operations, financial management, and investment strategies.',
      options: '',
      imageSrc: '/banking.jpeg',
      imageAlt: 'nasarawa.',
    },
]

const anticipatedCources = [
    {
        id: 1,
        name: 'B.Sc. Accounting ',
        href: '/accounting',
        price: ' ',
        description: 'The B.Sc. in Business Management (Accounting option) offered by the University of Calabar Open and Distance Learning Centre is designed to provide students with a solid foundation in both business management and accounting principles. This program integrates essential business knowledge with specialized accounting skills to prepare students for a successful career in the field of accounting.',
        options: '',
        imageSrc: '/accounting.jpg',
        imageAlt: 'nasarawa.',
      },
    {
        id: 2,
        name: 'B.Sc. Marketing ',
        href: '/accounting',
        price: ' ',
        description: 'The B.Sc. in Business Management (Accounting option) offered by the University of Calabar Open and Distance Learning Centre is designed to provide students with a solid foundation in both business management and accounting principles. This program integrates essential business knowledge with specialized accounting skills to prepare students for a successful career in the field of accounting.',
        options: '',
        imageSrc: '/accounting.jpg',
        imageAlt: 'nasarawa.',
      },
    {
        id: 3,
        name: 'B.Sc. Banking and Finance ',
        href: '/accounting',
        price: ' ',
        description: 'The B.Sc. in Business Management (Accounting option) offered by the University of Calabar Open and Distance Learning Centre is designed to provide students with a solid foundation in both business management and accounting principles. This program integrates essential business knowledge with specialized accounting skills to prepare students for a successful career in the field of accounting.',
        options: '',
        imageSrc: '/accounting.jpg',
        imageAlt: 'nasarawa.',
      },
    {
        id: 4,
        name: ' B.Sc. Economics ',
        href: '/accounting',
        price: ' ',
        description: 'The B.Sc. in Business Management (Accounting option) offered by the University of Calabar Open and Distance Learning Centre is designed to provide students with a solid foundation in both business management and accounting principles. This program integrates essential business knowledge with specialized accounting skills to prepare students for a successful career in the field of accounting.',
        options: '',
        imageSrc: '/accounting.jpg',
        imageAlt: 'nasarawa.',
      },
    {
        id: 5,
        name: 'B.Sc. Sociology  ',
        href: '/accounting',
        price: ' ',
        description: 'The B.Sc. in Business Management (Accounting option) offered by the University of Calabar Open and Distance Learning Centre is designed to provide students with a solid foundation in both business management and accounting principles. This program integrates essential business knowledge with specialized accounting skills to prepare students for a successful career in the field of accounting.',
        options: '',
        imageSrc: '/accounting.jpg',
        imageAlt: 'nasarawa.',
      },
    {
        id: 6,
        name: 'B.Sc. Mass Communication ',
        href: '/accounting',
        price: ' ',
        description: 'The B.Sc. in Business Management (Accounting option) offered by the University of Calabar Open and Distance Learning Centre is designed to provide students with a solid foundation in both business management and accounting principles. This program integrates essential business knowledge with specialized accounting skills to prepare students for a successful career in the field of accounting.',
        options: '',
        imageSrc: '/accounting.jpg',
        imageAlt: 'nasarawa.',
      },
    {
        id: 7,
        name: 'B.Sc. Computer Science ',
        href: '/accounting',
        price: ' ',
        description: 'The B.Sc. in Business Management (Accounting option) offered by the University of Calabar Open and Distance Learning Centre is designed to provide students with a solid foundation in both business management and accounting principles. This program integrates essential business knowledge with specialized accounting skills to prepare students for a successful career in the field of accounting.',
        options: '',
        imageSrc: '/accounting.jpg',
        imageAlt: 'nasarawa.',
      },
    {
        id: 8,
        name: 'B.Sc. Public Health  ',
        href: '/accounting',
        price: ' ',
        description: 'The B.Sc. in Business Management (Accounting option) offered by the University of Calabar Open and Distance Learning Centre is designed to provide students with a solid foundation in both business management and accounting principles. This program integrates essential business knowledge with specialized accounting skills to prepare students for a successful career in the field of accounting.',
        options: '',
        imageSrc: '/accounting.jpg',
        imageAlt: 'nasarawa.',
      },
    {
        id: 9,
        name: 'B. Sc. Nursing Science',
        href: '/accounting',
        price: ' ',
        description: 'The B.Sc. in Business Management (Accounting option) offered by the University of Calabar Open and Distance Learning Centre is designed to provide students with a solid foundation in both business management and accounting principles. This program integrates essential business knowledge with specialized accounting skills to prepare students for a successful career in the field of accounting.',
        options: '',
        imageSrc: '/accounting.jpg',
        imageAlt: 'nasarawa.',
      },
]


function Courses() {
  return (
    <div className="bg-white">
    <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
      <h2 className="sr-only">Courses</h2>
      <div className="text-center">
        <h2 className="text-3xl font-extrabold tracking-tight text-red-500 sm:text-4xl">
          Available Programmes
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-xl text-gray-500 sm:mt-4">
        Explore a diverse range of courses and programmes that cater to your academic and career aspirations at the University of Calabar Open and Distance Learning Centre.</p>
      </div>

      <div className="mt-5 grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-3 lg:gap-x-8">
        {courses.map((course) => (
          <div
            key={course.id}
            className="group relative flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white"
          >
            <div className="aspect-w-3 aspect-h-4 sm:aspect-none bg-gray-200 group-hover:opacity-75 sm:h-96">
            
              <Image
                // layout="fill"
                width={200}
                height={200}
                src={course.imageSrc}
                alt={course.imageAlt}
                className="object-cover object-center sm:h-full sm:w-full"
              />
            </div>
            <div className="flex flex-1 flex-col space-y-2 p-4">
              <h3 className="text-sm font-medium text-gray-900">
                <a href={course.href}>
                  <span aria-hidden="true" className="absolute inset-0" />
                  {course.name}
                </a>
              </h3>
              <p className="text-sm text-gray-500">{course.description}</p>
              <div className="flex flex-1 flex-col justify-end">
                <p className="text-sm italic text-gray-500">
                  {course.options}
                </p>
                <p className="text-base font-medium text-gray-900">
                  {course.price}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>

    <div className="mx-auto max-w-2xl py-10 px-4 sm:py-10 sm:px-6 lg:max-w-7xl lg:px-8">
      <h2 className="sr-only">Courses</h2>
      <div className="text-center">
        <h2 className="text-3xl font-extrabold tracking-tight text-gray-500 sm:text-4xl">
        Anticipated Programmes
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-xl text-gray-500 sm:mt-4">
        Explore a diverse range of courses and programmes (in-view) that cater to your academic and career aspirations at the University of Calabar Open and Distance Learning Centre.</p>
      </div>

      <div className="mt-5 grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-3 lg:gap-x-8">
        {anticipatedCources.map((course) => (
          <div
            key={course.id}
            className="group relative flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white"
          >
            <div className="aspect-w-3 aspect-h-4 sm:aspect-none bg-gray-200 group-hover:opacity-75 sm:h-96">
            
              <Image
                // layout="fill"
                width={200}
                height={200}
                src={course.imageSrc}
                alt={course.imageAlt}
                className="object-cover object-center sm:h-full sm:w-full"
              />
            </div>
            <div className="flex flex-1 flex-col space-y-2 p-4">
              <h3 className="text-sm font-medium text-gray-900">
                <a href={course.href}>
                  <span aria-hidden="true" className="absolute inset-0" />
                  {course.name}
                </a>
              </h3>
              <p className="text-sm text-gray-500">{course.description}</p>
              <div className="flex flex-1 flex-col justify-end">
                <p className="text-sm italic text-gray-500">
                  {course.options}
                </p>
                <p className="text-base font-medium text-gray-900">
                  {course.price}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
  )
}

export default Courses