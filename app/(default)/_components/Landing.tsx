export const Landing = () => (
  <div className="relative flex h-screen w-full overflow-hidden bg-background">
    <div className="flex w-1/2 items-center justify-center ">
      <div className="w-full px-28 ">
        <h1 className="font-gerbil text-5xl md:text-9xl">Rashika</h1>
        <h2 className="font-gerbil px-1 text-2xl lowercase md:text-6xl">Art Works</h2>
      </div>
    </div>
    <div className="absolute  -bottom-64 -right-64 z-10 h-1/2 w-1/2 rounded-full bg-violet-400 p-52 opacity-70 blur-3xl  md:h-full"></div>
    <div
      className="full-1/2 absolute -bottom-16 
    -right-16 w-1/2 rounded-full bg-pink-300 p-52 opacity-70 blur-3xl md:h-full"
    ></div>
  </div>
);
