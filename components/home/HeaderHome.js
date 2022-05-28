import { useState, useEffect } from 'react';
import Link from 'next/link';
import classNames from 'classnames';

import { Navigation } from '../Navigation.js';
// import { SearchBar } from '../SearchBar.js';

export const HeaderHome = () => {
  const [isHeaderTransparent, setIsHeaderTransparent] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsHeaderTransparent(window.scrollY > 230);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="w-full bg-no-repeat lg:h-[440px] lg:bg-hero-image lg:bg-[length:100%] lg:bg-fixed lg:bg-blend-multiply">
      <div
        className={classNames(
          {
            'drop-shadow-md lg:bg-light-50': isHeaderTransparent,
            'lg:bg-transparent': !isHeaderTransparent,
          },
          'fixed top-0 z-50 w-full bg-light-50 transition',
        )}
      >
        <div className="relative mx-auto flex max-w-screen-xl py-2 px-4 md:p-3 lg:items-center">
          <Link href="/">
            <a
              className={classNames(
                {
                  'lg:text-black': isHeaderTransparent,
                  'lg:text-white': !isHeaderTransparent,
                },
                'pr-8 font-yrsa text-4xl font-bold uppercase leading-none transition duration-200 hover:text-opacity-80 sm:text-black',
              )}
            >
              Hiswiki
            </a>
          </Link>

          {/*  <SearchBar isScrolledDown={isHeaderTransparent} /> */}

          <Navigation isScrolledDown={isHeaderTransparent} />
        </div>
      </div>
    </header>
  );
};
