import Link from 'next/link';
import Image from 'next/image';

import { CustomLink } from '../CustomLink';

export const FeaturedArticle = ({
  link,
  title,
  content,
  featuredImage,
  dateOfPublication,
}) => (
  <article className="min-h-80 my-4 justify-center md:flex md:px-4">
    <div className="relative w-full rounded-md bg-light-50 md:flex lg:w-[1088px]">
      <Link href={`/article/${link}`}>
        <a
          className="relative block w-full md:h-auto md:w-1/2"
          aria-label={title}
        >
          <Image
            src={
              featuredImage ||
              'https://i.ibb.co/6PbyGdW/lodenice-pohled-kopie.webp'
            }
            alt=""
            layout="fill"
            objectFit="cover"
            className="rounded-l-md"
          />
        </a>
      </Link>
      <div className="px-4 py-4 md:max-w-[400px] lg:max-w-[600px] lg:p-6">
        <Link href={`/article/${link}`}>
          <a>
            <h3 className="headline--3 link">{title}</h3>
          </a>
        </Link>
        <div className="text-sm text-neutral-500">
          <time>{dateOfPublication}</time>
        </div>
        <p className="paragraph">{content.substring(0, 350)}...</p>

        <CustomLink href={`/article/${link}`}>Číst dál</CustomLink>
      </div>
    </div>
  </article>
);
