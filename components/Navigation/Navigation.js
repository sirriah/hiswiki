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

  const renderMobileMenu = () => (
    <nav className="bg-accent-200 absolute top-[52px] md:top-[76px] lg:invisible right-0 p-3 z-50">
      <ul className="flex flex-col">
        <li className="divide-y-2 divide-black">
          <Link href="/new-article">
            <a className="divide-y-2 divide-black p-3">Nový článek</a>
          </Link>
        </li>
        <li className="divide-y-2 divide-black">
          <Link href="/profile">
            <a className="divide-y-2 divide-black p-3">Profil</a>
          </Link>
        </li>
        <li className="divide-y-2 divide-black">
          <Link href="/logout">
            <a className="divide-y-2 divide-black p-3">Odhlasit se</a>
          </Link>
        </li>
      </ul>
    </nav>
  );

  const hamburgerTopClass = classNames({ 'rotate-45': isMenuOpen });
  const hamburgerMiddleClass = classNames({ 'opacity-0': isMenuOpen });
  const hamburgerBottomClass = classNames({ '-rotate-45': isMenuOpen });

  return (
    <>
      {isMenuOpen && renderMobileMenu()}
      <div className=" hamburger flex-1 lg:hidden relative">
        <button
          className="absolute right-0 block w-11 h-10"
          onClick={hamburgerMenuHandler}
        >
          <span className="sr-only">Menu</span>
          <span
            className={` ${hamburgerTopClass} transition ease-in-out duration-300 origin-top-left w-[26px] h-[2px] top-[6px] right-2 bg-slate-500 block absolute`}
          />
          <span
            className={`${hamburgerMiddleClass} transition ease-in-out duration-300 w-[26px] h-[2px] top-[15px] right-2 bg-slate-500 block absolute`}
          />
          <span
            className={`${hamburgerBottomClass} transition ease-in-out duration-300 origin-bottom-left w-[26px] h-[2px] top-[24px] right-2 bg-slate-500 block absolute`}
          />
        </button>
      </div>
      <nav className="flex-1 hidden lg:flex" aria-label="Hlavní menu">
        <ul className="flex-1 flex justify-end items-center divide-x-2 divide-accent-500">
          <li>
            <Link href="/new-article">
              <a className="px-8 hover:underline hover:underline-offset-8 hover:decoration-accent-500 hover:decoration-2">
                Nový článek
              </a>
            </Link>
          </li>
          <li className="flex items-center">
            <Link href="/user-profile">
              <a className="flex items-center px-8 hover:underline hover:underline-offset-8 hover:decoration-accent-500 hover:decoration-2">
                <div className="mr-4">
                  <Image
                    className="w-9 h-9 rounded-full pr-8 block"
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
          <li className="flex items-center h-[42px]">
            <Link href="/log-out">
              <a className="px-8  hover:underline hover:underline-offset-8 hover:decoration-accent-500 hover:decoration-2">
                Odhlásit se
              </a>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};
