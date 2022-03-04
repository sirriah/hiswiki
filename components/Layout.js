import Link from 'next/link';

export const Layout = ({ children }) => (
  <>
    <header className="w-full h-110 bg-stone-300">
      <div className="w-full bg-light-50 p-2 md:p-5 grid grid-cols-4">
        <Link href="/">
          <a href="home">Hiswiki</a>
        </Link>

        <div>search</div>
        <Link href="/new-article">
          <a href="new-article">new</a>
        </Link>
        <nav aria-labelledby="primary-navigation">menu</nav>
      </div>
    </header>

    <main className="w-full">
      <div className="max-w-screen-lg mx-auto bg-white -mt-20 pt-16">
        {children}
      </div>
    </main>

    <footer className="mt-20 w-full bg-dark-300 text-white">
      <div className="max-w-screen-lg mx-auto p-6 grid grid-cols-[2fr_1fr] lg:grid-cols-[3fr_1fr]">
        <nav>menu</nav>
        <div>weather</div>
      </div>
      <div className="w-full bg-dark-600 text-white text-center p-5">
        copyright
      </div>
    </footer>
  </>
);
