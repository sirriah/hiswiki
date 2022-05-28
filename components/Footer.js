import Link from 'next/link';

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
    </div>
    <div className="w-full bg-dark-600 p-5 text-center text-white">
      Všechna práva vyhrazena - © 2022 Loděnice v historii, z. s.
    </div>
  </footer>
);
