import Link from 'next/link';
import Image from 'next/image';

import featuredImage from '../public/img/museumtrati.jpg';
import { CustomLink } from './CustomLink';

export const ArticleCard = () => (
  <article className="my-9 md:px-4 md:flex justify-center">
    <div className="md:flex relative w-full lg:w-[1088px] bg-light-50 rounded-md">
      <Link href="/">
        <a className="w-full h-60 md:h-auto relative block">
          <Image
            src={featuredImage}
            alt=""
            layout="fill"
            objectFit="cover"
            className="rounded-l-md"
          />
        </a>
      </Link>
      <div className="px-4 py-4 lg:p-6 md:max-w-[400px] lg:max-w-[600px]">
        <Link href="/">
          <a>
            <h3 className="headline--3 link">Muzeum Ostře sledovaných vlaků</h3>
          </a>
        </Link>
        <div className="text-sm text-neutral-500">
          <time dateTime="2022-03-15T13:25:30+01:00">15. 3. 2022</time>
        </div>
        <p className="paragraph">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
          condimentum, arcu vel tempus finibus, nulla metus congue lacus, ac
          vehicula ex nulla non erat. Phasellus ultrices sapien sit amet eros
          ullamcorper lacinia. Sed at sem facilisis ipsum fermentum pulvinar.
          Nam volutpat fringilla mi, vitae mollis mi lobortis quis. Vivamus
          finibus ex est, interdum bibendum dolor consequat in. Duis ut porta
          nunc. Vivamus tempor accumsan finibus.
        </p>

        <CustomLink href="/detail">Číst dál</CustomLink>
      </div>
    </div>
  </article>
);
