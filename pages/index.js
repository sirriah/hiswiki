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
      <section className="my-20 p-4 text-center md:px-12 lg:px-24">
        <h1 className="headline--1 underline-large">HISWIKI</h1>
        <p className="paragraph">Na stránkách je umístěno celkem 153 článků</p>
        <p className="paragraph">
          Stránky Hiswiki slouží jako wikipedie spolku Loděnice v historii, z.s.
          Jsou zde shromážděny veškeré údaje, které se členům spolku podařilo
          vypátrat v různých archivech. Jedná se o výsledky dlouhleté činnosti.
          Součástí jsou fotografie z rodinných arichivů mnoha místních obyvatel.
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
        Loděnice u Berouna je obec s cca 2500 obyvateli. Leží na desátém
        kilometru dálnice D5. Obcí dále prochází železnice. Místní železniční
        stanice se stala velmi populární, díky oskarovému snímku Ostře sledované
        vlaky, který se prakticky celý odehrává na nádraží nebo v jiných částech
        obce.
      </p>
    </LayoutHome>
  );
};
export default Home;
