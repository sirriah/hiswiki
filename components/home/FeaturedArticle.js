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
  <article className="min-h-80 my-4 justify-center md:flex">
    <div className="relative rounded-md bg-light-50 md:flex md:w-[1088px]">
      <Link href={`/article/${link}`}>
        <a
          className="relative block h-80 w-full md:h-auto md:w-96"
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
      <div className="px-4 py-4 md:max-w-[550px] lg:max-w-[700px] lg:p-6">
        <Link href={`/article/${link}`}>
          <a>
            <h3 className="headline--3 link">{title}</h3>
          </a>
        </Link>
        <div className="text-sm text-neutral-700">
          <time>{dateOfPublication}</time>
        </div>
        <p className="paragraph">{content.substring(0, 400)}...</p>

        <CustomLink href={`/article/${link}`}>Číst dál</CustomLink>
      </div>
    </div>
  </article>
);
