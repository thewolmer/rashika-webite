import { NavBar } from './NavBar';

export const Header = () => (
  <header className="absolute left-0 top-0 z-50 h-16 w-full backdrop-blur-2xl">
    <div className="flex h-full w-full items-baseline justify-center">
      <div className="flex w-full items-center justify-center py-2">
        <NavBar />
      </div>
    </div>
  </header>
);
