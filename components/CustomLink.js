import Link from 'next/link';

export const CustomLink = ({ href, className, children }) => (
  <div className="flex justify-center md:justify-start">
    <Link href={href}>
      <a
        className={`${className} my-4 rounded-md border-b-4 border-b-accent-600 bg-accent-500 px-10 py-3 text-white transition-colors hover:border-accent-500 hover:bg-accent-600`}
      >
        {children}
      </a>
    </Link>
  </div>
);
