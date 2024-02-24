'use client';
import React, { useEffect, useState } from 'react';
import { HiOutlineArrowUpRight } from 'react-icons/hi2';

import { Reveal } from '@/components/Animation/Reveal';
import { ErrorView } from '@/components/Error';
import { Link } from '@/components/Link';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import { getEvents } from '@/lib/notion/getEvents';
import { formatDate } from '@/lib/utils';

export const UpcomingEvents = () => {
  const [data, setData] = useState(undefined);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchEvents = async () => {
      setIsLoading(true);
      try {
        const eventsData = await getEvents();
        setData(eventsData);
      } catch (error) {
        console.error('Error fetching upcoming events data');
      } finally {
        setIsLoading(false);
      }
    };

    fetchEvents();
  }, []);
  // @ts-expect-error type  error in ts but works fine
  const upcomingEvents = data?.data;

  if (!upcomingEvents && !isLoading) return <ErrorView />;
  return (
    <Reveal>
      <section id="upcoming-events" className="flex w-full items-center justify-center py-16">
        <div className="w-full max-w-6xl px-10">
          <h3 className="font-goudy text-3xl md:text-5xl">Upcoming Events</h3>
          <div className="container mx-auto px-5 py-24">
            {!upcomingEvents || isLoading ? (
              <div className="grid gap-4 md:grid-cols-3">
                {[0, 1, 2].map((index) => (
                  <Skeleton key={index} className="h-80 w-full rounded-xl border p-5 shadow-xl">
                    <div className="flex h-full items-start">
                      <div className="flex flex-col space-y-1">
                        <Skeleton className="flex h-8 w-12 flex-shrink-0 flex-col bg-muted-foreground text-center leading-none"></Skeleton>
                        <Skeleton className="flex h-8 w-12 flex-shrink-0 flex-col bg-muted-foreground text-center leading-none"></Skeleton>
                      </div>
                      <div className="flex-grow pl-6">
                        <Skeleton className="mb-1 w-fit bg-muted-foreground px-8 py-2"></Skeleton>
                        <Skeleton className="mb-3 bg-muted-foreground px-8 py-4"></Skeleton>
                        <div className="pt-3">
                          <Skeleton className="mb-3 bg-muted-foreground px-8 py-2"></Skeleton>
                        </div>
                      </div>
                    </div>
                  </Skeleton>
                ))}
              </div>
            ) : (
              <div className="grid gap-4 md:grid-cols-3">
                {upcomingEvents.map((event, index) => {
                  if (event.properties.date.date?.start) {
                    const date = formatDate(event.properties.date.date.start);
                    return (
                      <div
                        key={index}
                        className="w-full rounded-xl border p-5 shadow-xl transition-shadow duration-150 hover:shadow-2xl"
                      >
                        <div className="flex h-full items-start">
                          <div className="flex w-12 flex-shrink-0 flex-col text-center leading-none">
                            <span className="mb-2 border-b-2  pb-2 ">{date.day}</span>
                            <span className="title-font text-lg font-medium leading-none">{date.month}</span>
                          </div>
                          <div className="flex-grow pl-6">
                            {event.properties.mode.select.name && (
                              <h2 className="mb-1 text-sm font-extrabold tracking-widest text-primary">
                                {event.properties.mode.select.name} Event
                              </h2>
                            )}
                            {event.properties.name.title[0] && (
                              <h4 className="title-font mb-3 text-xl font-medium">
                                {event.properties.name.title[0].plain_text}
                              </h4>
                            )}
                            {event.properties.description.rich_text[0] && (
                              <p className="mb-5 leading-relaxed">
                                {event.properties.description.rich_text[0].plain_text.length > 200
                                  ? `${event.properties.description.rich_text[0].plain_text.slice(0, 200)}...`
                                  : event.properties.description.rich_text[0].plain_text}
                              </p>
                            )}
                            {event.properties.destination_url.rich_text[0] ? (
                              <Link href={event.properties.destination_url.rich_text[0].plain_text} className="group">
                                <Button variant={'outline'}>
                                  Server Link{' '}
                                  <HiOutlineArrowUpRight className="ml-2 transition-transform duration-200 group-hover:-translate-y-1 group-hover:translate-x-1" />
                                </Button>
                              </Link>
                            ) : (
                              <Link className="group pointer-events-none opacity-70">
                                <Button variant={'outline'}>
                                  Link <HiOutlineArrowUpRight className="ml-2 opacity-70" />
                                </Button>
                              </Link>
                            )}
                          </div>
                        </div>
                      </div>
                    );
                  }
                })}
              </div>
            )}
          </div>
        </div>
      </section>
    </Reveal>
  );
};
