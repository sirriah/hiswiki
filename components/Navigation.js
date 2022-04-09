import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import classNames from 'classnames';

import profilePic from '../public/img/profile.jpg';

export const Navigation = ({ isScrolledDown }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const hamburgerMenuHandler = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className="hamburger relative flex-1 lg:hidden">
        <button
          className="absolute right-0 block h-10 w-11"
          onClick={hamburgerMenuHandler}
        >
          <span className="sr-only">Menu</span>
          <span
            className={classNames(
              { 'rotate-45': isMenuOpen },
              'absolute top-[6px] right-2 block h-[2px] w-[26px] origin-top-left bg-slate-500 transition duration-300 ease-in-out',
            )}
          />
          <span
            className={classNames(
              { 'opacity-0': isMenuOpen },
              'absolute top-[15px] right-2 block h-[2px] w-[26px] bg-slate-500 transition duration-300 ease-in-out',
            )}
          />
          <span
            className={classNames(
              { '-rotate-45': isMenuOpen },
              'absolute top-[24px] right-2 block h-[2px] w-[26px] origin-bottom-left bg-slate-500 transition duration-300 ease-in-out',
            )}
          />
        </button>
      </div>
      <nav
        className={classNames(
          {
            hidden: !isMenuOpen,
            'lg:text-black': isScrolledDown,
            'lg:text-white': !isScrolledDown,
          },
          'absolute top-[52px] right-0 z-50 bg-accent-200 text-black md:top-[60px] lg:relative lg:top-0 lg:flex lg:flex-1 lg:bg-transparent',
        )}
        aria-label="Hlavní menu"
      >
        <ul className="flex flex-col items-center justify-end divide-y-2 divide-accent-500 lg:flex-1 lg:flex-row lg:divide-y-0 lg:divide-x-2">
          <li className="py-4">
            <Link href="/new-article">
              <a className="px-8 hover:decoration-accent-500 hover:decoration-2 hover:underline-offset-8 lg:hover:underline">
                Nový článek
              </a>
            </Link>
          </li>
          <li className="flex items-center py-2 lg:py-0">
            <Link href="/user-profile">
              <a className="flex items-center px-8 hover:decoration-accent-500 hover:decoration-2 hover:underline-offset-8 lg:hover:underline">
                <div className="mr-4">
                  <Image
                    className="block w-9 rounded-full pr-8"
                    src={profilePic}
                    alt=""
                    width="36"
                    height="36"
                  />
                </div>
                Profil
              </a>
            </Link>
          </li>
          <li className="flex w-full items-center py-4 lg:max-h-[42px] lg:w-auto">
            <Link href="/log-out">
              <a className="px-8 hover:decoration-accent-500 hover:decoration-2 hover:underline-offset-8 lg:hover:underline">
                Odhlásit se
              </a>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};
