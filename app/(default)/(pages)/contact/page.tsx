import React from 'react';

import { ContactForm } from './_components/ContactForm';

const page = () => (
  <section className="flex justify-center">
    <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
      <main
        aria-label="Main"
        className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-full"
      >
        <div
          className="absolute inset-1 m-auto h-screen max-w-lg sm:h-64 sm:max-w-7xl"
          style={{
            background: `linear-gradient(
            106.89deg,
            rgba(192, 132, 252, 0.11) 15.73%,
            rgba(14, 165, 233, 0.41) 15.74%,
            rgba(232, 121, 249, 0.26) 56.49%,
            rgba(79, 70, 229, 0.4) 115.91%
          )`,
            filter: `blur(118px)`,
            pointerEvents: `none`,
          }}
        ></div>
        <div className="max-w-xl pt-10 lg:max-w-3xl">
          <h1 className="y-900 mt-6 text-2xl font-bold sm:text-3xl md:text-4xl">Send a Message 💬</h1>
          <ContactForm />
        </div>
      </main>
    </div>
  </section>
);

export default page;
