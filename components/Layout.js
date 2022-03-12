import Link from 'next/link';

export const Layout = ({ children }) => (
  <>
    <header className="w-full h-[440px] bg-[url('../styles/img/header_background.jpg')] bg-no-repeat bg-cover bg-stone-300">
      <div className="w-full  bg-light-50">
        <div className="max-w-screen-xl mx-auto p-2 md:p-5 flex">
          <Link href="/">
            <a
              className="flex-initial font-yrsa font-bold uppercase text-4xl pr-8"
              href="home"
            >
              Hiswiki
            </a>
          </Link>
          <div class="flex-initial">
            <form>
              <label className="sr-only" for="search">
                Vyhledávání
              </label>
              <input
                className="border-2 pl-4 py-1"
                type="text"
                placeholder="Vyhledávání"
                name="search"
              />
              <button
                className="bg-white border-2 border-gray-200 hover:border-gray-400 hover:bg-gray-200 p-1 "
                type="submit"
                aria-label="odeslat"
              >
                <span className="sr-only">Hledej</span>
                🔍
              </button>
            </form>
          </div>

          <nav className="flex-1 flex" aria-label="main">
            <ul className="flex-1 flex justify-end items-center divide-x-2 divide-accent-500">
              <li className="">
                <Link href="/new-article">
                  <a
                    className="px-8 hover:underline hover:underline-offset-8 hover:decoration-accent-500 hover:decoration-2"
                    href="new-article"
                  >
                    Nový článek
                  </a>
                </Link>
              </li>
              <li className="flex items-center">
                <Link href="/user-profile">
                  <a
                    className=" px-8 hover:underline hover:underline-offset-8 hover:decoration-accent-500 hover:decoration-2 inline"
                    href="new-article"
                  >
                    <img
                      className="w-9 h-9 mr-4 rounded-full inline"
                      src="../styles/img/header_background.jpg"
                      alt=""
                    />
                    Profil
                  </a>
                </Link>
              </li>
              <li className="">
                <Link href="/log-out">
                  <a
                    className="px-8 hover:underline hover:underline-offset-8 hover:decoration-accent-500 hover:decoration-2"
                    href="new-article"
                  >
                    Odhlásit se
                  </a>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>

    <main className="w-full">
      <div className="max-w-screen-xl mx-auto bg-white -mt-20 pt-16 ">
        {children}
      </div>
    </main>

    <footer className="mt-20 w-full bg-dark-300 text-white">
      <div className="max-w-screen-xl mx-auto p-6 grid grid-cols-[2fr_1fr] lg:grid-cols-[3fr_1fr]">
        <nav>menu</nav>
        <div>weather</div>
      </div>
      <div className="w-full bg-dark-600 text-white text-center p-5">
        copyright
      </div>
    </footer>
  </>
);
