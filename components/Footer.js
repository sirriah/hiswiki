import Link from 'next/link';

import Weather from '../public/img/weather.svg';

const menuItem = ['Přidat článek', 'Váš profil', 'Odhlásit se'];

export const Footer = () => (
  <footer className="mt-auto w-full bg-dark-300 text-white">
    <div className="mx-auto grid max-w-screen-xl grid-cols-[2fr_1fr] p-6 lg:grid-cols-[3fr_1fr]">
      <nav>
        <ul className="flex flex-col lg:flex-row">
          {menuItem.map((item, i) => (
            <li className="lg:pr-3" key={i}>
              <Link href="/">
                <a className="mb-3 block text-accent-200 underline decoration-accent-200 hover:no-underline">
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
    <div className="w-full bg-dark-600 p-5 text-center text-white">
      Všechna práva vyhrazena - © 2022 Loděnice v historii, z. s.
    </div>
  </footer>
);
