import { useState, useEffect } from 'react';

import { ArticleCard } from './../components/home/ArticleCard';
import { FeaturedArticle } from '../components/home/FeaturedArticle';
import { LayoutHome } from '../components/home/LayoutHome';
import { PortalLink } from '../components/PortalLink';
import { getListOfAllArticlesByDate } from '../firebase/api/articles';

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
  const [allArticles, setAllArticles] = useState([]);

  useEffect(() => {
    const handleFetching = async () => {
      setAllArticles(await getListOfAllArticlesByDate());
    };

    handleFetching();
  }, []);

  return (
    <LayoutHome>
      <section className="my-20 px-4 text-center md:px-12 lg:px-24">
        <h1 className="headline--1 underline-large">HISWIKI</h1>
        <p className="paragraph mt-6">
          Na stránkách je umístěno celkem {allArticles.length} článků
        </p>
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

      <h2 className="underline-medium pt-12 text-center">Nejnovější články</h2>
      {allArticles
        .slice(0, 1)
        .map(
          ({ id, title, content, link, featuredImage, dateOfPublication }) => (
            <FeaturedArticle
              key={id}
              title={title}
              content={decodeURIComponent(content)}
              link={decodeURIComponent(link)}
              featuredImage={decodeURIComponent(featuredImage)}
              dateOfPublication={dateOfPublication}
            />
          ),
        )}

      <section className="w-full justify-center md:flex">
        <div className="w-full space-x-4 md:flex lg:w-[1088px]">
          {allArticles
            .slice(1, 4)
            .map(
              ({
                id,
                link,
                title,
                dateOfPublication,
                featuredImage,
                details,
                keywords,
                portals,
                author,
              }) => (
                <ArticleCard
                  key={id}
                  featuredImage={decodeURIComponent(featuredImage)}
                  title={title}
                  dateOfPublication={dateOfPublication}
                  link={decodeURIComponent(link)}
                  details={details}
                  keywords={keywords}
                  portals={portals}
                  author={author}
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
