import { useState, useEffect } from 'react';
import Link from 'next/link';

import { Navigation } from './Navigation';
import { SearchBar } from './SearchBar';

export const Header = () => {
  const [isHeaderTransparent, setIsHeaderTransparent] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsHeaderTransparent(window.scrollY > 230);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="w-full lg:h-[440px] lg:bg-hero-image bg-no-repeat lg:bg-fixed lg:bg-[length:100%] lg:bg-blend-multiply">
      <div
        className={`w-full bg-light-50  fixed z-50 top-0 transition ${
          isHeaderTransparent ? 'lg:bg-dark-300' : 'lg:bg-transparent'
        }`}
      >
        <div className="max-w-screen-xl mx-auto py-2 px-4 md:p-3 flex relative lg:items-center">
          <Link href="/home">
            <a className="font-yrsa font-bold uppercase text-4xl leading-none pr-8 sm:text-black lg:text-white hover:text-opacity-80 transition duration-200">
              Hiswiki
            </a>
          </Link>

          <SearchBar />

          <Navigation />
        </div>
      </div>
    </header>
  );
};
