import { useLayoutEffect, useRef, useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/solid";
import { Switch } from "@headlessui/react";
import Link from "next/link";

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

const incentives = [
  {
    name: "Free shipping",
    imageSrc:
      "https://tailwindui.com/img/ecommerce/icons/icon-shipping-simple.svg",
    description:
      "It's not actually free we just price it into the products. Someone's paying for it, and it's not us.",
  },
  {
    name: "10-year warranty",
    imageSrc:
      "https://tailwindui.com/img/ecommerce/icons/icon-warranty-simple.svg",
    description:
      "If it breaks in the first 10 years we'll replace it. After that you're on your own though.",
  },
  {
    name: "Exchanges",
    imageSrc:
      "https://tailwindui.com/img/ecommerce/icons/icon-exchange-simple.svg",
    description:
      "If you don't like it, trade it to one of your friends for something of theirs. Don't send it here though.",
  },
];

function Odlcform() {
  return (
    <div className="isolate bg-white px-6  sm:py-3 lg:px-8">
      <div
        className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
        aria-hidden="true"
      >
        <div
          className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
      <h2 className="mx-auto text-3xl text-center font-bold tracking-tight mb-10 pb-2 text-red-600 sm:text-4xl">
        Admission Requirements
      </h2>
      <div className="bg-gray-50 ">
        <div className="mx-auto max-w-7xl py-24 sm:px-2 sm:py-32 lg:px-4">
          <div className="mx-auto max-w-2xl px-4 lg:max-w-none">
            <div className="grid grid-cols-1 items-center gap-x-16 gap-y-10 lg:grid-cols-2">
              <div>
                <h2 className="text-4xl font-bold tracking-tight text-gray-900">
                  Year 1 Candidates
                </h2>
                <p className="mt-4 text-gray-500">
                  For admission into the first degree programme in Business
                  Management, a candidate must possess five (5) credit level
                  passes in WASSCE/SSCE/NECO/NABTEB/TCII or equivalent. The five
                  credits must include English Language, Mathematics and
                  Economics or Commerce in not more than two sittings.
                </p>
                <h2 className="text-4xl font-bold mt-8 tracking-tight text-gray-900">
                  Direct Entry Candidates
                </h2>
                <p className="mt-4 text-gray-500">
                  Candidates with Advanced Level passes in two (2) relevant
                  subjects in addition to satisfying the O&#39;level
                  requirements may be considered for admission into 200 level.
                </p>
                <p className="mt-4 text-gray-500">
                  Candidates with National Diploma (ND) or OND in relevant
                  programmes with a minimum of Lower Credit or it&#39;s
                  equivalent from recognized Institutions may be considered for
                  admission into 200 level.
                </p>
                <p className="mt-4 text-gray-500">
                  Holders of the Nigerian Certificate in Education (NCE) in
                  relevant programmes may be considered for admission into 200
                  level.
                </p>
                <p className="mt-4 text-gray-500">
                  All candidates seeking admission into Direct Entry must in
                  addition to satisfying the Direct Entry requirements also
                  satisfy the entry qualification required for
                  admission into 100 level.
                </p>
              </div>
              {/* <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg bg-gray-100">
                <img
                  src="/admission2.jpg"
                  alt=""
                  className="object-cover object-center"
                />
              </div> */}
            </div>
            <p className="mt-10 text-lg font-semibold">
              If you meet the requirements above, click on the Proceed button
              below to acquire the admission form for N20, 000.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-10 mx-auto max-w-xl sm:mt-12 pb-10">
        <Link
          href="https://odlcportal.unical.edu.ng/Identity/Account/Login?returnUrl=%2F"
          className="flex w-full items-center justify-center rounded-md border border-transparent bg-red-600 px-8 py-3 text-md font-medium text-white hover:bg-red-400 md:py-4 md:px-10 md:text-md"
        >
          Proceed
        </Link>
      </div>
    </div>
  );
}

export default Odlcform;
