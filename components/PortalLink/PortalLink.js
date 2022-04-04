import Link from 'next/link';

import Arrow from '../../public/img/arrow.svg';

export const PortalLink = (prop) => (
  <Link href="/">
    <a className="bg-accent-200 px-8 py-5 rounded-sm w-full md:mr-4 mb-4 sm:w-[calc(50%_-_16px)] lg:w-[calc(25%_-_16px)] transition-colors lg:hover:bg-light-50">
      <Arrow
        width="16px"
        className="fill-accent-500 rotate-90 inline -mt-1 mr-5"
      />
      <p className="inline uppercase">{prop.children}</p>
    </a>
  </Link>
);
