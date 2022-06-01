import Link from 'next/link';

export const CustomLink = ({ href, className, children }) => (
  <div className="flex justify-center md:justify-start">
    <Link href={href}>
      <a
        className={`${className} my-4 rounded-md border-b-4 border-b-accent-500 bg-accent-600 px-10 py-3 text-white transition-colors hover:border-accent-600 hover:bg-accent-500`}
      >
        {children}
      </a>
    </Link>
  </div>
);
