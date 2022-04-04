import { Footer } from './Footer';
import { HeaderSingle } from './HeaderSingle';

export const LayoutSingle = ({ children }) => (
  <>
    <HeaderSingle />

    <main className="w-full">
      <div className="max-w-screen-xl mx-auto bg-white md:pt-5 lg:pt-16 px-4">
        {children}
      </div>
    </main>

    <Footer />
  </>
);
