import { Footer } from '../Footer.js';
import { HeaderHome } from './HeaderHome';

export const LayoutHome = ({ children }) => (
  <>
    <HeaderHome />

    <main className="w-full">
      <div className="mx-auto -mt-20 max-w-screen-xl bg-white px-4 pt-[150px] md:pt-[180px] lg:pt-3">
        {children}
      </div>
    </main>

    <Footer />
  </>
);
