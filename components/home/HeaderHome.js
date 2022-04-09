import { useState, useEffect } from 'react';
import Link from 'next/link';
import classNames from 'classnames';

import { Navigation } from '../Navigation.js';
import { SearchBar } from '../SearchBar.js';

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
    <header className="w-full lg:h-[440px] lg:bg-hero-image bg-no-repeat lg:bg-fixed lg:bg-[length:100%] lg:bg-blend-multiply">
      <div
        className={classNames(
          {
            'lg:bg-light-50 drop-shadow-md': isHeaderTransparent,
            'lg:bg-transparent': !isHeaderTransparent,
          },
          'w-full bg-light-50  fixed z-50 top-0 transition',
        )}
      >
        <div className="max-w-screen-xl mx-auto py-2 px-4 md:p-3 flex relative lg:items-center">
          <Link href="/">
            <a
              className={classNames(
                {
                  'lg:text-black': isHeaderTransparent,
                  'lg:text-white': !isHeaderTransparent,
                },
                'font-yrsa font-bold uppercase text-4xl leading-none pr-8 sm:text-black hover:text-opacity-80 transition duration-200',
              )}
            >
              Hiswiki
            </a>
          </Link>

          <SearchBar isScrolledDown={isHeaderTransparent} />

          <Navigation isScrolledDown={isHeaderTransparent} />
        </div>
      </div>
    </header>
  );
};
