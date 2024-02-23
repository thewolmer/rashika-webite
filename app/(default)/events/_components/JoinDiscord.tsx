'use client';
import React, { useEffect, useState } from 'react';
import { GiPlainCircle } from 'react-icons/gi';
import { HiMiniMoon } from 'react-icons/hi2';
import { MdDoNotDisturbOn } from 'react-icons/md';

import { Image } from '@/components/Image';
import { Link } from '@/components/Link';
import { Spinner } from '@/components/Spinner';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import { getDiscordWidget } from '@/lib/discord';

import { DiscordWidgetType } from '@/types/Discord/widget';

export const JoinDiscord = () => {
  const [data, setData] = useState<DiscordWidgetType | undefined>(undefined);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchGallery = async () => {
      setIsLoading(true);
      try {
        const WidgetData = await getDiscordWidget();
        setData(WidgetData);
      } catch (error) {
        console.error('Error fetching gallery:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchGallery();
  }, []);
  if (!data || isLoading)
    return (
      <div className="relative flex w-full items-center justify-center overflow-hidden p-5">
        <div className=" relative grid w-full grid-cols-10 gap-1 overflow-hidden rounded-2xl bg-gradient-to-br from-primary to-secondary p-10 md:h-screen">
          {Array.from({ length: 90 }, (_, index) => (
            <div key={index} className="flex w-full flex-col items-center justify-center">
              <div className="relative flex w-fit rounded-full shadow-2xl">
                <Skeleton className=" rounded-full p-4 md:p-10"></Skeleton>
              </div>
            </div>
          ))}
        </div>
        <div className="absolute rounded-2xl bg-foreground/5 px-10 py-4 shadow-2xl backdrop-blur-3xl md:px-32 md:py-28">
          <h3 className="flex flex-col items-center font-gerbil text-lg font-extrabold md:text-4xl">
            JOIN THE ONLINE MEMBERS
            <span>ON DISCORD</span>
            <div className="mt-5">
              <Spinner />
            </div>
          </h3>
        </div>
      </div>
    );

  return (
    <div className="relative flex w-full items-center justify-center p-5">
      <div className=" relative grid w-full grid-cols-10 gap-1  overflow-hidden rounded-2xl bg-gradient-to-br from-primary to-secondary p-10 md:h-screen ">
        {data.members.map((member, index) => (
          <div key={index} className="flex w-full flex-col items-center justify-center">
            <div className="relative flex w-fit rounded-full shadow-2xl">
              <Image
                src={member.avatar_url}
                alt={member.id}
                width={80}
                height={80}
                className="rounded-full brightness-75"
              ></Image>
              <div className="absolute bottom-0 right-0 text-xs md:text-xl">
                {member.status == 'dnd' && <MdDoNotDisturbOn className="text-red-800" />}
                {member.status == 'idle' && <HiMiniMoon className="text-yellow-500" />}
                {member.status == 'online' && <GiPlainCircle className="text-green-700" />}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="absolute rounded-2xl bg-foreground/5 px-10 py-4 shadow-2xl backdrop-blur-3xl md:px-32 md:py-28">
        <h3 className="flex flex-col items-center font-gerbil text-lg font-extrabold md:text-4xl">
          JOIN {data?.presence_count}+ ONLINE MEMBERS
          <span>ON DISCORD</span>
          <Link className="mt-5" href={data.instant_invite}>
            <Button className="font-inconsolata">Take me there</Button>
          </Link>
        </h3>
      </div>
    </div>
  );
};
