import { CgArrowBottomLeft } from 'react-icons/cg';

import { Button } from '@/components/ui/button';

export const Landing = () => (
  <div className="relative flex h-screen w-full overflow-hidden bg-background">
    <div className="z-20 flex w-1/2 flex-col items-center justify-center p-28">
      <div className="w-full space-y-4 ">
        <h1 className="font-gerbil text-5xl md:text-9xl">Rashika</h1>
        <div className="flex items-center gap-2">
          <div className="h-1 w-80 rounded bg-gradient-to-r from-purple-900 to-rose-900"></div>
          <h2 className="px-1 font-goudy text-2xl  italic md:text-4xl">Artist, Host, Pagal</h2>
        </div>
      </div>
    </div>
    <div className="z-20 flex w-1/2 flex-col items-end justify-end gap-2 p-28">
      <Button variant="ghost" className="flex items-center justify-center">
        <CgArrowBottomLeft className="text-3xl" />
      </Button>
      <h2 className="font-goudy text-2xl italic"> Assam, India</h2>
    </div>
    <div className="absolute  -bottom-80 -right-80 z-10 h-1/2 w-1/2 rounded-full bg-purple-300 p-52 opacity-35 blur-3xl  md:h-full"></div>
    <div className="full-1/2 absolute -bottom-16 -right-16 w-1/2 rounded-full bg-pink-300 p-52 opacity-35 blur-3xl md:h-full"></div>
    {/* <div className="absolute -top-40 left-28 z-10  rotate-45 rounded-full bg-green-300 px-96 py-56 opacity-35 blur-3xl "></div> */}
    <div className="absolute -top-40 left-28 z-10  rotate-45 rounded-full bg-rose-300 p-64 opacity-35 blur-3xl "></div>
    {/* <div className="absolute -bottom-52 left-0 z-10 -rotate-45  rounded-full bg-amber-300 p-64 opacity-35 blur-3xl "></div> */}
  </div>
);
