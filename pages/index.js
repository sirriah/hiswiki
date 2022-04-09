import Link from 'next/link';

import { ArticleCard } from '../components/articleCard';
import { LayoutHome } from '../components/home/LayoutHome';
import { PortalLink } from '../components/PortalLink';

const Home = () => {
  const portals = [
    'Osoby',
    'Stavby',
    'Události',
    'Firmy',
    'Instituce',
    'Spolky',
    'Archeologie',
    'Zobrazit vše',
  ];

  return (
    <LayoutHome>
      <section className="text-center px-4 my-20 md:px-12 lg:px-24">
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
          <div className="flex flex-wrap w-[1088px] md:pl-4">
            {portals.map((item, i) => (
              <PortalLink key={i}>{item}</PortalLink>
            ))}
          </div>
        </div>
      </section>

      <h2 className="underline-medium text-center">Článek dne</h2>

      <ArticleCard />

      <h2 className="underline-medium text-center pt-12">Nejnovější články</h2>

      <section className="md:flex w-full justify-center">
        <div className="md:flex w-full lg:w-[1088px] space-x-4">
          <Link href="/article">
            <a className="font-medium tracking-wider text-xl flex-1">
              <article
                className='bg-[url("../styles/img/frantisek_iserle.jpg")] transition-opacity lg:hover:opacity-90 bg-stone-600 
      bg-blend-overlay bg-cover bg-[position:50%_30%] bg-no-repeat rounded-md h-52 md:h-96 flex-1 flex relative'
              >
                <div className="mt-auto w-full px-6 pb-5 pt-20 text-right text-white bg-gradient-to-t from-dark-600 to-transparent rounded-b-lg">
                  <h3 className="text-white font-yrsa text-2xl">
                    MUDr. František Iserle
                  </h3>
                  <time
                    className="text-sm text-accent-200"
                    dateTime="2022-03-15T13:25:30+01:00"
                  >
                    15. 3. 2022
                  </time>
                  <p className="text-sm text-accent-200">
                    Autor: Tereza Fatková
                  </p>
                </div>
              </article>
            </a>
          </Link>

          <Link href="/article">
            <a className="font-medium tracking-wider text-xl flex-1">
              <article
                className='bg-[url("../styles/img/rodina_cifkovych.jpg")] transition-opacity lg:hover:opacity-90 bg-stone-600 
          bg-blend-overlay bg-cover bg-[position:50%_30%] bg-no-repeat rounded-md h-52 md:h-96 flex-1 relative'
              >
                <div className="absolute bottom-0 w-full px-6 pb-5 pt-20 text-right text-white bg-gradient-to-t from-dark-600 to-transparent rounded-b-lg">
                  <h3 className="text-white font-yrsa text-2xl">
                    Rodina Cífkových
                  </h3>
                  <time
                    className="text-sm text-accent-200"
                    dateTime="2022-03-15T13:25:30+01:00"
                  >
                    15. 3. 2022
                  </time>
                  <p className="text-sm text-accent-200">
                    Autor: Tereza Fatková
                  </p>
                </div>
              </article>
            </a>
          </Link>

          <Link href="/article">
            <a className="font-medium tracking-wider text-xl flex-1">
              <article
                className='bg-[url("../styles/img/zamecek_vinice.jpg")] transition-opacity lg:hover:opacity-90 bg-stone-600 
          bg-blend-overlay bg-cover bg-[position:50%_30%] bg-no-repeat rounded-md h-52 md:h-96 flex-1 relative'
              >
                <div className="absolute bottom-0 w-full px-6 pb-5 pt-20 text-right text-white bg-gradient-to-t from-dark-600 to-transparent rounded-b-lg">
                  <h3 className="text-white font-yrsa text-2xl">
                    Zámeček Vinice
                  </h3>

                  <time
                    className="text-sm text-accent-200"
                    dateTime="2022-03-15T13:25:30+01:00"
                  >
                    15. 3. 2022
                  </time>
                  <p className="text-sm text-accent-200">
                    Autor: Tereza Fatková
                  </p>
                </div>
              </article>
            </a>
          </Link>
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
