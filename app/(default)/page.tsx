import { About } from './_components/About';
import { Gallery } from './_components/Gallery';
import { Landing } from './_components/Landing';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Landing />
      <About />
      <Gallery />
    </main>
  );
}
