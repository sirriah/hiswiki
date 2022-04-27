import Link from 'next/link';
import { useState, useEffect } from 'react';

import { ArticleCard } from './../components/home/ArticleCard';
import { FeaturedArticle } from '../components/home/FeaturedArticle';
import { LayoutHome } from '../components/home/LayoutHome';
import { PortalLink } from '../components/PortalLink';
import { getListOfLastArticles } from '../firebase/api/articles';
const portals = [
  'Osoby',
  'Stavby',
  'Události',
  'Firmy',
  'Instituce',
  'Spolky',
  'Archeologie',
];

const Home = () => {
  const [latestArticles, setLatestArticles] = useState([]);

  useEffect(() => {
    getListOfLastArticles().then((value) => setLatestArticles(value));
  }, []);

  return (
    <LayoutHome>
      <section className="my-20 px-4 text-center md:px-12 lg:px-24">
        <h1 className="headline--1 underline-large">HISWIKI</h1>
        <p className="paragraph">Na stránkách je umístěno celkem 153 článků</p>
        <p className="paragraph">
          Lorem USA dolor sit amet, consectetur adipiscing elit. Praesent
          egestas, augue elementum elementum facilisis, ligula velit fermentum
          libero, dictum malesuada justo dui sed sapien. Quisque ac erat
          scelerisque enim mattis viverra.{' '}
          <Link href="/article">
            <a className="link">Pellentesque pulvinar</a>
          </Link>{' '}
          ex gravida, consectetur erat et, semper ligula.
        </p>
      </section>

      <section className="mb-20">
        <h2 className="underline-medium text-center">Portály</h2>
        <div className="flex justify-center">
          <div className="flex w-[1088px] flex-wrap sm:pl-4">
            {portals.map((item, i) => (
              <PortalLink key={i}>{item}</PortalLink>
            ))}
            <PortalLink>Zobrazit vse</PortalLink>
          </div>
        </div>
      </section>

      <h2 className="underline-medium text-center">Článek dne</h2>

      <FeaturedArticle />

      <h2 className="underline-medium pt-12 text-center">Nejnovější články</h2>

      <section className="w-full justify-center md:flex">
        <div className="w-full space-x-4 md:flex lg:w-[1088px]">
          {latestArticles.map(
            ({
              id,
              link,
              title,
              dateOfPublication,
              featuredImage,
              details,
              keywords,
              portals,
            }) => (
              <ArticleCard
                key={id}
                imageLink={featuredImage}
                title={title}
                date={dateOfPublication}
                link={link}
                details={details}
                keywords={keywords}
                portals={portals}
                author="Tereza Fatková"
              />
            ),
          )}
        </div>
      </section>

      <p className="my-20 mx-0 md:mx-20 lg:mx-36">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In condimentum,
        arcu vel tempus finibus, nulla metus congue lacus, ac vehicula ex nulla
        non erat. Phasellus ultrices sapien sit amet eros ullamcorper lacinia.
        Sed at sem facilisis ipsum fermentum pulvinar. Nam volutpat fringilla
        mi, vitae mollis mi lobortis quis. Vivamus finibus ex est, interdum
        bibendum dolor consequat in. Duis ut porta nunc. Vivamus tempor accumsan
        finibus.
      </p>
    </LayoutHome>
  );
};
export default Home;
