import Link from 'next/link';

import Arrow from '../public/img/arrow.svg';

export const PortalLink = ({ children }) => (
  <Link href="/">
    <a className="mb-4 w-full rounded-sm bg-accent-200 px-8 py-5 transition-colors sm:mr-4 sm:w-[calc(50%_-_16px)] lg:w-[calc(25%_-_16px)] lg:hover:bg-light-50">
      <Arrow
        width="16px"
        className="-mt-1 mr-5 inline rotate-90 fill-accent-500"
      />
      <p className="inline uppercase">{children}</p>
    </a>
  </Link>
);
