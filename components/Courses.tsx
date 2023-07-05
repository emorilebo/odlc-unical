import Image from 'next/image'
import React from 'react'



const courses = [
    {
      id: 1,
      name: 'Nasarawa Close',
      href: '/nasarawa',
      price: 'Banana Island Ikoyi - Lagos ',
      description: 'Five (5) bedroom fully detached duplex with a room BQ each.',
      options: '3 Units',
      imageSrc: '/bookshop.jpg',
      imageAlt: 'nasarawa.',
    },
]


function Courses() {
  return (
    <div className="bg-white">
    <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
      <h2 className="sr-only">Courses</h2>
      <div className="text-center">
        <h2 className="text-3xl font-extrabold tracking-tight text-yellow-500 sm:text-4xl">
          Available Programmes
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-xl text-gray-500 sm:mt-4">
        Explore a diverse range of courses and programmes that cater to your academic and career aspirations at the University of Calabar Open and Distance Learning Centre.
      </div>

      <div className="mt-5 grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-3 lg:gap-x-8">
        {courses.map((course) => (
          <div
            key={course.id}
            className="group relative flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white"
          >
            <div className="aspect-w-3 aspect-h-4 sm:aspect-none bg-gray-200 group-hover:opacity-75 sm:h-96">
              {/* <img
                src={product.imageSrc}
                alt={product.imageAlt}
                className="h-full w-full object-cover object-center sm:h-full sm:w-full"
              /> */}
              <Image
                // layout="fill"
                width={200}
                height={200}
                src={course.imageSrc}
                alt={course.imageAlt}
                className="h-1/2 w-1/2 object-cover object-center sm:h-full sm:w-full"
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