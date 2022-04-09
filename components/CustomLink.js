import Link from 'next/link';

export const CustomLink = ({ href, className, children }) => (
  <div className="flex justify-center md:justify-start">
    <Link href={href}>
      <a
        className={`${className} px-10 py-3 my-4 transition-colors bg-accent-500 hover:bg-accent-600 border-b-4 border-b-accent-600 hover:border-accent-500 rounded-md text-white`}
      >
        {children}
      </a>
    </Link>
  </div>
);
