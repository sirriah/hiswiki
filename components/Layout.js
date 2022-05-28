import Link from 'next/link';

import { Footer } from './Footer';
import { Navigation } from './Navigation';

export const Layout = ({ children }) => (
  <div className="absolute flex h-full w-full flex-col">
    <header className="relative w-full">
      <div className="h-20">
        <div className="fixed top-0 z-50 w-full bg-light-50 drop-shadow-md transition">
          <div className="relative mx-auto flex max-w-screen-xl py-2 px-4 md:p-3 lg:items-center">
            <Link href="/">
              <a className="pr-8 font-yrsa text-4xl font-bold uppercase leading-none text-black transition duration-200 hover:text-opacity-80">
                Hiswiki
              </a>
            </Link>
            <Navigation isScrolledDown />
          </div>
        </div>
      </div>
    </header>

    <main className="w-full">
      <div className="mx-auto max-w-screen-xl bg-white px-4 md:pt-5 lg:pt-12">
        {children}
      </div>
    </main>

    <Footer />
  </div>
);
