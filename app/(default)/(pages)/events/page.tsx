import React from 'react';

import { TextGenerateEffect } from '@/components/Animation/text-generate-effect';
import { PageHeader } from '@/components/Layout';

import { EventInfo } from './_components/EventInfo';
import { HireManagement } from './_components/HireManagement';
import { JoinDiscord } from './_components/JoinDiscord';
import { UpcomingEvents } from './_components/UpcomingEvents';

const page = () => (
  <div className="w-full">
    <PageHeader>
      <h1 className="font-gerbil text-5xl font-bold md:text-8xl">Events</h1>
      <TextGenerateEffect
        className="font-goudy text-lg  md:text-4xl"
        words="Experience unforgettable gatherings and celebrations."
      />
    </PageHeader>
    <EventInfo />
    <HireManagement />
    <UpcomingEvents />
    <JoinDiscord />
  </div>
);

export default page;
