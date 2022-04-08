import { Footer } from '../Footer.js';
import { HeaderHome } from './HeaderHome';

export const LayoutHome = ({ children }) => (
  <>
    <HeaderHome />

    <main className="w-full">
      <div className="max-w-screen-xl mx-auto bg-white -mt-20 pt-[150px] md:pt-[180px] lg:pt-3 px-4">
        {children}
      </div>
    </main>

    <Footer />
  </>
);
