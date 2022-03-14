import { Header } from './Header';

export const Layout = ({ children }) => (
  <>
    <Header />

    <main className="w-full">
      <div className="max-w-screen-xl mx-auto bg-white -mt-20 pt-[150px] md:pt-[180px] lg:pt-3">
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
