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
        className="absolute inset-x-0 top-[-5rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
        aria-hidden="true"
      ></div>
      <h2 className="mx-auto text-3xl text-center font-bold tracking-tight mb-10 pb-2 text-red-600 sm:text-4xl">
        Admission Requirements
      </h2>
      <div className="bg-gray-50 ">
        <div className="mx-auto max-w-7xl py-20 sm:px-2 lg:px-4">
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
              Instructions to purchase the Admission Form
            </p>

            <li className="mt-1 text-md">
              If you meet the requirements above, click on the Proceed button
              below.
            </li>
            <li className="mt-1 text-md">
              This would take you to the ODLC PORTAL to Buy ODLC Form, you will
              use this form to purchase your ODLC Form PIN.
            </li>
            <li className="mt-1 text-md">
              Input your First Name, Surname, Email, Phone Number and then Click
              on the Proceed Button.
            </li>
          </div>
        </div>
      </div>

      <div className="mt-10 mx-auto max-w-xl sm:mt-12 pb-10">
        <Link
          href="https://odlcportal.unical.edu.ng/Identity/Payment/BuyAdmissionCheckerPin"
          className="flex w-full items-center justify-center rounded-md border border-transparent bg-red-600 px-8 py-3 text-md font-medium text-white hover:bg-red-400 md:py-4 md:px-10 md:text-md"
        >
          Proceed
        </Link>
      </div>
    </div>
  );
}

export default Odlcform;
