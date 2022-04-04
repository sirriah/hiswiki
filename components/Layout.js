import { Footer } from './Footer';
import { Header } from './Header';

export const Layout = ({ children }) => (
  <>
    <Header />

    <main className="w-full">
      <div className="max-w-screen-xl mx-auto bg-white -mt-20 pt-[150px] md:pt-[180px] lg:pt-3">
        {children}
      </div>
    </main>

    <Footer />
  </>
);
