'use client';
import { useEffect, useState } from 'react';

import { Image } from '@/components/Image';
import { Spinner } from '@/components/Spinner';
import { Card } from '@/components/ui/card';
import { getGallery } from '@/lib/notion';

import { QueryDataBaseResponse } from '@/types/Notion/database';

export const Gallery = () => {
  const [data, setData] = useState<QueryDataBaseResponse | undefined>(undefined);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchGallery = async () => {
      setIsLoading(true);
      try {
        const galleryData = await getGallery();
        setData(galleryData);
      } catch (error) {
        console.error('Error fetching gallery:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchGallery();
  }, []);
  const galleryMedia = data?.data;

  if (isLoading) {
    return (
      <section className="flex w-full flex-col items-center overflow-hidden py-20">
        <div className="w-full max-w-6xl space-y-3 px-5 ">
          <h2 className="font-gerbil text-6xl md:text-8xl">Gallery</h2>
          <h3 className=" text-2xl italic md:text-4xl">The earth without art is just &#39;eh&#39;</h3>
        </div>
        <div className="h-[50vh]">
          <Spinner />
        </div>
      </section>
    );
  }

  return (
    <section className="relative flex h-[175vh] w-full flex-col items-center overflow-hidden py-20">
      <div className="w-full max-w-6xl space-y-3 px-5 ">
        <h2 className="font-gerbil text-6xl md:text-8xl">Gallery</h2>
        <h3 className=" text-2xl italic md:text-4xl">The earth without art is just &#39;eh&#39;</h3>
      </div>
      <div className="p-10">
        <div className="columns-2 gap-4 space-y-4 p-4 md:columns-3 lg:columns-4">
          {galleryMedia?.map((item, index) => (
            <div key={index} className="rounded-xl shadow-2xl">
              <Image
                className="h-auto max-w-full rounded-xl"
                src={
                  // @ts-expect-error type
                  item?.properties?.image?.files?.[0]?.file?.url ?? item?.properties?.image?.files?.[0]?.external?.url
                }
                width={300}
                height={300}
                // @ts-expect-error type
                alt={item.properties.image.files[0].name}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="absolute bottom-0 left-0 z-10 h-[50vh] w-full bg-gradient-to-b from-transparent to-white p-60"></div>
      <div className="absolute bottom-20 z-30">
        <Card className="flex h-10 w-72 items-center justify-center">& Many More...</Card>
      </div>
    </section>
  );
};
