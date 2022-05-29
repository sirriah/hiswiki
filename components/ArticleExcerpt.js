import Link from 'next/link';
import Image from 'next/image';

export const ArticleExcerpt = ({
  featuredImage,
  title,
  dateOfPublication,
  author,
  content,
  link,
}) => (
  <article className="my-8 flex flex-col gap-4 sm:flex-row">
    <div className="relative h-56 w-56">
      <Link href={`/article/${link}`}>
        <a className="">
          <Image
            src={
              featuredImage ||
              'https://i.ibb.co/6PbyGdW/lodenice-pohled-kopie.webp'
            }
            alt=""
            layout="fill"
            objectFit="cover"
            className="relative block rounded-l-md"
          />
        </a>
      </Link>
    </div>

    <div className="w-96">
      <Link href={`/article/${link}`}>
        <a className="link">
          <h2 className="headline--3"> {title} </h2>
        </a>
      </Link>
      <time className="text-sm text-neutral-500"> {dateOfPublication}</time>
      <p className="paragraph">{content.substring(0, 200)}...</p>
    </div>
  </article>
);
