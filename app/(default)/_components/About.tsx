import { Image } from '@/components/Image';
import { Button } from '@/components/ui/button';

export const About = () => (
  <section className="relative h-screen  w-full md:h-[70vh]">
    <div className="absolute top-0 -z-10 h-screen w-full md:h-[70vh]">
      <Image
        src="/images/backgrounds/rarpule-bg.jpg"
        alt="rarpule-bg"
        width={1080}
        height={720}
        style={{ objectFit: 'cover', objectPosition: 'center' }}
        className="h-full w-full opacity-90"
      ></Image>
    </div>
    <div className="flex h-full w-full flex-col items-center justify-center gap-5 md:flex-row">
      <div>
        <Image
          src="/images/portraits/rashika-2.jpg"
          alt="Profile Image"
          height={480}
          width={480}
          className="w-64 rounded-lg shadow-2xl md:w-96"
        ></Image>
      </div>
      <div className="mx-10 space-y-2 rounded-lg bg-black/15 p-10 text-background shadow-2xl backdrop-blur-2xl md:w-1/2">
        <h2 className="font-gerbil text-3xl">👋 Hi! I&apos;m Rashika</h2>
        <p className="font-goudy text-xl text-muted">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi eius quasi aspernatur quod? Aliquam mollitia
          delectus laboriosam quod corporis ipsa repellendus, numquam eius eveniet saepe illum labore officia vitae
        </p>
        <Button variant={'default'} size={'lg'}>
          Know More
        </Button>
      </div>
    </div>
  </section>
);
