import React from 'react';

import { Image } from '@/components/Image';
import { Link } from '@/components/Link';
import { Button } from '@/components/ui/button';

export const HireManagement = () => (
  <section className="relative h-[50vh] w-full">
    <div className="absolute top-0 -z-10 h-[50vh] w-full">
      <Image
        src="/images/backgrounds/background-2.jpeg"
        alt="rarpule-bg"
        width={1080}
        priority
        height={720}
        style={{ objectFit: 'cover', objectPosition: 'center' }}
        className="h-full w-full opacity-90"
      ></Image>
    </div>

    <div className="flex h-full w-full flex-col  items-center justify-center gap-5">
      <h3 className="font-gerbil text-4xl font-bold text-white">Book your awesome musical event experience</h3>
      <Link href="/contact">
        <Button
          variant={'outline'}
          size={'lg'}
          className="rounded-full text-xl font-extrabold transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary"
        >
          Hire us
        </Button>
      </Link>
    </div>
  </section>
);
