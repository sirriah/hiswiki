import Link from 'next/link';

import { SearchBar } from '../SearchBar';
import { Navigation } from '../Navigation';

export const HeaderSingle = () => (
  <header className="w-full h-20">
    <div className="w-full bg-light-50 fixed z-50 top-0 transition drop-shadow-md">
      <div className="max-w-screen-xl mx-auto py-2 px-4 md:p-3 flex relative lg:items-center">
        <Link href="/">
          <a className="font-yrsa font-bold uppercase text-4xl leading-none pr-8 text-black  hover:text-opacity-80 transition duration-200">
            Hiswiki
          </a>
        </Link>

        <SearchBar isScrolledDown="true" />

        <Navigation isScrolledDown="true" />
      </div>
    </div>
  </header>
);
