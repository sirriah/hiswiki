import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import classNames from 'classnames';

import profilePic from '../../public/img/profile.jpg';

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const hamburgerMenuHandler = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className="hamburger flex-1 lg:hidden relative">
        <button
          className="absolute right-0 block w-11 h-10"
          onClick={hamburgerMenuHandler}
        >
          <span className="sr-only">Menu</span>
          <span
            className={classNames(
              { 'rotate-45': isMenuOpen },
              'transition ease-in-out duration-300 origin-top-left w-[26px] h-[2px] top-[6px] right-2 bg-slate-500 block absolute',
            )}
          />
          <span
            className={classNames(
              { 'opacity-0': isMenuOpen },
              'transition ease-in-out duration-300 w-[26px] h-[2px] top-[15px] right-2 bg-slate-500 block absolute',
            )}
          />
          <span
            className={classNames(
              { '-rotate-45': isMenuOpen },
              'transition ease-in-out duration-300 origin-bottom-left w-[26px] h-[2px] top-[24px] right-2 bg-slate-500 block absolute',
            )}
          />
        </button>
      </div>
      <nav
        className={classNames(
          { hidden: !isMenuOpen },
          'bg-accent-200 absolute top-[52px] md:top-[60px] right-0 z-50 lg:bg-transparent lg:relative lg:flex-1 lg:flex lg:top-0',
        )}
        aria-label="Hlavní menu"
      >
        <ul className="flex flex-col divide-y-2 justify-end items-center divide-accent-500 lg:flex-row lg:divide-y-0 lg:divide-x-2 lg:flex-1">
          <li className="py-4">
            <Link href="/new-article">
              <a className="px-8 lg:hover:underline hover:underline-offset-8 hover:decoration-accent-500 hover:decoration-2">
                Nový článek
              </a>
            </Link>
          </li>
          <li className="py-2 flex items-center lg:py-0">
            <Link href="/user-profile">
              <a className="flex items-center px-8 lg:hover:underline hover:underline-offset-8 hover:decoration-accent-500 hover:decoration-2">
                <div className="mr-4">
                  <Image
                    className="w-9 rounded-full pr-8 block"
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
          <li className="py-4 w-full flex items-center lg:w-auto lg:max-h-[42px]">
            <Link href="/log-out">
              <a className="px-8 lg:hover:underline hover:underline-offset-8 hover:decoration-accent-500 hover:decoration-2">
                Odhlásit se
              </a>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};
