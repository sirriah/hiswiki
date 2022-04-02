import Link from 'next/link';

export const ButtonLink = (props) => (
  <div className="flex justify-center md:justify-start">
    <Link href={props.href}>
      <a
        className={`${props.className} px-10 py-3 m-4 transition-colors bg-accent-500 hover:bg-accent-600 border-b-4 border-b-accent-600 hover:border-accent-500 rounded-md text-white`}
      >
        {props.children}
      </a>
    </Link>
  </div>
);
