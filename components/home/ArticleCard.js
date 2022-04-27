import Link from 'next/link';

export const ArticleCard = ({ imageLink, title, date, author, link }) => (
  <Link href={`/article/${link}`}>
    <a className="flex-1 text-xl font-medium tracking-wider">
      <article
        style={{ backgroundImage: `url(${imageLink})` }}
        className={`relative flex h-52 flex-1 
      rounded-md bg-stone-600 bg-cover bg-[position:50%_30%] bg-no-repeat bg-blend-overlay transition-opacity md:h-96 lg:hover:opacity-90`}
      >
        <div className="mt-auto w-full rounded-b-lg bg-gradient-to-t from-dark-600 to-transparent px-6 pb-5 pt-20 text-right text-white">
          <h3 className="font-yrsa text-2xl text-white">{title}</h3>
          <time
            className="text-sm text-accent-200"
            dateTime="2022-03-15T13:25:30+01:00"
          >
            {date}
          </time>
          <p className="text-sm text-accent-200">Autor: {author}</p>
        </div>
      </article>
    </a>
  </Link>
);
