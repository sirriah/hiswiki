import Link from 'next/link';

import HashIcon from '../public/img/hashicon.svg';

export const KeywordLink = ({ children }) => (
  <div className="block py-1 md:inline md:px-5 md:first:pl-0 text-accent-500">
    <HashIcon className="w-3 inline mr-3 -mt-1" />
    <Link href="/">
      <a className="hover:text-black hover:no-underline underline">
        {children}
      </a>
    </Link>
  </div>
);
