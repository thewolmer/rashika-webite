import React from 'react';
import { MdError } from 'react-icons/md';

export const ErrorView = () => (
  <section className="flex h-full w-full flex-col items-center justify-center  p-10">
    <MdError className="animate-pulse text-3xl text-destructive md:text-6xl" />
    <h3 className="font-mono">Something went wrong.</h3>
    <p>Failed to fetch data. Please try again later.</p>
  </section>
);
