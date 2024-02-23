import React from 'react';

import { Image } from '@/components/Image';
import { cn } from '@/lib/utils';

const Info = [
  {
    title: 'Connect with talented artists for your events.',
    description: `Elevate your event with our extensive network of talented artists spanning various genres and disciplines. From mesmerizing live bands to captivating DJs and versatile performers, we handpick each artist to ensure they bring unparalleled energy and artistry to your occasion. Whether you're hosting a corporate gala, a wedding reception, or a community festival, our curated selection of performers is guaranteed to leave a lasting impression on your guests. Let us help you find the perfect entertainment solution tailored to your event's unique atmosphere and audience.`,
    image: '/images/reference/singer.jpeg',
  },
  {
    title: 'Curate unique experiences for every occasion.',
    description: `At Event Host Portfolio, we believe that every event should be a one-of-a-kind experience. Our dedicated team works closely with you to understand your vision, preferences, and objectives, crafting bespoke experiences that surpass expectations. From thematic decor and immersive activities to interactive installations and gastronomic delights, we infuse creativity and attention to detail into every aspect of your event. Let us transform your ideas into unforgettable memories.`,
    image: '/images/reference/reading-with-music.jpeg',
  },
  {
    title: 'Provide expert event planning and hosting services.',
    description: `Take the stress out of event planning with our comprehensive services tailored to your needs. Whether you're organizing a small gathering or a large-scale production, our seasoned event planners are here to guide you every step of the way. From venue selection and logistics management to vendor coordination and on-site supervision, we handle all the details, allowing you to relax and enjoy your event. With our expertise and dedication, your event is in capable hands.`,
    image: '/images/reference/planning.jpeg',
  },
  {
    title: 'Ensure cost efficiency without compromising quality.',
    description: `We understand the importance of staying within budget while delivering exceptional results. Our team strives to maximize value for our clients by offering competitive pricing options without compromising on the quality of service. Whether it's negotiating vendor contracts, optimizing resource allocation, or suggesting innovative cost-saving strategies, we are committed to delivering cost-effective solutions tailored to your financial constraints.`,
    image: '/images/reference/money.jpeg',
  },
];

export const EventInfo = () => (
  <section className="flex w-full items-center justify-center">
    <div className="max-w-6xl p-10">
      {Info.map((item, index) => (
        <div key={index} className="flex w-full flex-col  md:grid md:grid-cols-2">
          <div className={cn('flex items-center justify-center ', index % 2 === 0 ? 'md:order-last ' : '')}>
            <Image src={item.image} width={300} height={300} alt={item.title} className="rounded-xl shadow-lg"></Image>
          </div>
          <div className={cn('w-full space-y-4 p-10', index % 2 === 0 ? 'md:text-end' : '')}>
            <h3 className="text-2xl font-bold">{item.title}</h3>
            <p className="px-2"> {item.description}</p>
          </div>
        </div>
      ))}
    </div>
  </section>
);
