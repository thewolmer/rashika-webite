import React from 'react';

import { PageHeader } from '@/components/Layout';

import { EventInfo } from './_components/EventInfo';
import { JoinDiscord } from './_components/JoinDiscord';

const page = () => (
  <div className="w-full">
    <PageHeader>
      <h1 className="font-gerbil text-5xl font-bold md:text-8xl">Events</h1>
      <h2 className="font-goudy text-lg  md:text-4xl">Experience unforgettable gatherings and celebrations.</h2>
    </PageHeader>
    <EventInfo />
    <JoinDiscord />
  </div>
);

export default page;
