import Image from "next/image";
import React, { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    subject: "",
    email: "",
    phoneNumber: "",
    message: "",
  });

  const sendEMail = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const response = await fetch("../api/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ formData }),
    });
  };

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    console.log(formData);
    const response = await fetch("mailto:", {
      method: "POST",
      body: JSON.stringify(formData),
    });
  };

  const handleSubmitt = async (event: { preventDefault: () => void }) => {
    console.log("handleSubmitt clicked");
    event.preventDefault();
    const res = await fetch("../api/send_email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ formData }),
    });
    const data = await res.json();
    console.log(data);
  };

  return (
    <div className="bg-white">
      <main>
        {/* Header */}
        <div className="bg-gray-50 py-24 sm:py-32">
          <div className="mx-auto max-w-md pl-4 pr-8 sm:max-w-lg sm:px-6 lg:max-w-7xl lg:px-8">
            <h1 className="text-center text-4xl font-extrabold leading-10 tracking-tight text-gray-900 sm:text-5xl sm:leading-none lg:text-6xl">
              Get in touch
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-center text-2xl leading-normal text-blue-900 italic">
              {" "}
              dirodlc@unical.edu.ng; +2347069099650
            </p>
            <p className="mx-auto mt-6 max-w-3xl text-center text-xl leading-normal text-gray-500">
              We appreciate your interest in the University of Calabar Open and
              Distance Learning Centre. If you have any questions, inquiries, or
              feedback, please feel free to reach out to us using the contacts
              above. Our dedicated team is here to assist you.
            </p>
          </div>
        </div>

        {/* Contact Section */}
        <div className="relative bg-white">
          {/* <div className="lg:absolute lg:inset-0">
            <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
              <Image
                width={1000}
                height={1000}
                className="h-56 w-full object-cover lg:absolute lg:h-full"
                src="/classroom.jpg"
                alt=""
              />
            </div>
          </div> */}
          <div className="relative py-16 px-4 sm:py-24 sm:px-6 lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2 lg:px-8 lg:py-32">
            <div className="lg:pr-8">
              <div className="mx-auto max-w-md sm:max-w-lg lg:mx-0">
                {/* <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
                  Inquiries:
                </h2> */}

                {/* <p className="mt-4 text-lg text-gray-500 sm:mt-3">
                  For inquiries about our Open and Distance Learning Centre, our
                  programmes, admission process, or any other information,
                  please contact our friendly support staff. We are here to
                  provide you with the assistance you need.
                </p> */}
                {/* <form
                  // action="#"
                  onSubmit={handleSubmitt}
                  method="POST"
                  className="mt-9 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
                >
                  <div>
                    <label
                      htmlFor="firstName"
                      className="block text-sm font-medium text-gray-700"
                    >
                      First name
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="firstName"
                        id="firstName"
                        autoComplete="given-name"
                        className="focus:ring-grape-500 focus:border-grape-500 block w-full rounded-md border-gray-300 shadow-sm sm:text-sm"
                        value={formData.firstName}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            firstName: e.target.value,
                          })
                        }
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="lastName"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Last name
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="lastName"
                        id="lastName"
                        autoComplete="family-name"
                        className="focus:ring-grape-500 focus:border-grape-500 block w-full rounded-md border-gray-300 shadow-sm sm:text-sm"
                        value={formData.lastName}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            lastName: e.target.value,
                          })
                        }
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
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            email: e.target.value,
                          })
                        }
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-2">
                    <div className="flex justify-between">
                      <label
                        htmlFor="phoneNumber"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Phone
                      </label>
                    </div>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="phoneNumber"
                        id="phoneNumber"
                        autoComplete="tel"
                        aria-describedby="phone-description"
                        className="focus:ring-grape-500 focus:border-grape-500 block w-full rounded-md border-gray-300 shadow-sm sm:text-sm"
                        value={formData.phoneNumber}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            phoneNumber: e.target.value,
                          })
                        }
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <div className="flex justify-between">
                      <label
                        htmlFor="how-can-we-help"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Inquiry
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
                        name="message"
                        aria-describedby="how-can-we-help-description"
                        rows={4}
                        className="focus:ring-grape-500 focus:border-grape-500 block w-full rounded-md border border-gray-300 shadow-sm sm:text-sm"
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            message: e.target.value,
                          })
                        }
                        defaultValue={""}
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
                </form> */}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Contact;
