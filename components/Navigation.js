import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import classNames from 'classnames';

import profilePic from '../public/img/profile.jpg';

const burgerMenuStyle =
  'absolute right-2 block h-[2px] w-[26px] bg-slate-500 transition duration-300 ease-in-out';

const menuLinkStyle =
  'hover:decoration-accent-500 hover:decoration-2 hover:underline-offset-8 lg:hover:underline';

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
              burgerMenuStyle,
              { 'rotate-45': isMenuOpen },
              'top-[6px] origin-top-left ',
            )}
          />
          <span
            className={classNames(
              burgerMenuStyle,
              { 'opacity-0': isMenuOpen },
              ' top-[15px] w-[26px] ',
            )}
          />
          <span
            className={classNames(
              burgerMenuStyle,
              { '-rotate-45': isMenuOpen },
              ' top-[24px] w-[26px] origin-bottom-left ',
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
            <Link href="/article/new-article">
              <a className={`px-8 ${menuLinkStyle}`}>Nový článek</a>
            </Link>
          </li>
          <li className="py-2 lg:py-0">
            <Link href="/user-profile">
              <a className={`flex items-center px-8 ${menuLinkStyle}`}>
                <div className="mr-4">
                  <Image
                    className="rounded-full"
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
              <a className={`px-8 ${menuLinkStyle}`}>Odhlásit se</a>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};
