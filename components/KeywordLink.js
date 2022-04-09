import Link from 'next/link';

import HashIcon from '../public/img/hashicon.svg';

export const KeywordLink = ({ children }) => (
  <div className="block py-1 text-accent-500 md:inline md:px-5 md:first:pl-0">
    <HashIcon className="mr-3 -mt-1 inline w-3" />
    <Link href="/">
      <a className="underline hover:text-black hover:no-underline">
        {children}
      </a>
    </Link>
  </div>
);
