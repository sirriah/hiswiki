import Link from 'next/link';

import Weather from '../public/img/weather.svg';
const menuItem = [
  'Hlavní stránka',
  'Vyhledávání',
  'Přidat článek',
  'Váš profil',
  'Odhlásit se',
];
export const Footer = () => (
  <footer className="mt-20 w-full bg-dark-300 text-white">
    <div className="max-w-screen-xl mx-auto p-6 grid grid-cols-[2fr_1fr] lg:grid-cols-[3fr_1fr]">
      <nav>
        <ul className="flex flex-col lg:flex-row">
          {menuItem.map((item, i) => (
            <li className="lg:pr-3" key={i}>
              <Link href="/">
                <a className="underline hover:no-underline text-accent-200 decoration-accent-200 block mb-3">
                  {item}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div>
        <h2 className="headline--3 p-0">Počasí v Praze</h2>
        <div className="flex">
          <Weather className="w-20" />
          <p>15° C</p>
        </div>
      </div>
    </div>
    <div className="w-full bg-dark-600 text-white text-center p-5">
      Všechna práva vyhrazena - © 2022 Loděnice v historii, z. s.
    </div>
  </footer>
);
