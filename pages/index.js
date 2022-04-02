import Link from 'next/link';
import Image from 'next/image';

import { ButtonLink } from '../components/ButtonLink';
import { Layout } from '../components/Layout';
import featuredImage from '../public/img/museumtrati.jpg';
import Arrow from '../public/img/arrow.svg';

export const Home = () => {
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
    <Layout>
      <section className="text-center px-4 my-20 md:px-12 lg:px-24">
        <h1 className="headline--1 underline-large">HISWIKI</h1>
        <p className="paragraph">Na stránkách je umístěno celkem 153 článků</p>
        <p className="paragraph">
          Lorem USA dolor sit amet, consectetur adipiscing elit. Praesent
          egestas, augue elementum elementum facilisis, ligula velit fermentum
          libero, dictum malesuada justo dui sed sapien. Quisque ac erat
          scelerisque enim mattis viverra.{' '}
          <Link href="/home">
            <a className="link">Pellentesque pulvinar</a>
          </Link>{' '}
          ex gravida, consectetur erat et, semper ligula.
        </p>
      </section>

      <section className="mb-20">
        <h2 className="underline-medium text-center">Portály</h2>
        <div className="flex justify-center m-2">
          <div className="flex flex-wrap w-[1088px]">
            {portals.map((item) => (
              <Link href="/">
                <a className="bg-accent-200 px-8 py-5 rounded-sm w-full m-2 sm:w-[calc(50%_-_16px)] lg:w-[calc(25%_-_16px)] transition-colors lg:hover:bg-light-50">
                  <Arrow
                    width="16px"
                    className="fill-accent-500 rotate-90 inline -mt-1 mr-5"
                  />
                  <p className="inline uppercase">{item}</p>
                </a>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <h2 className="underline-medium text-center">Článek dne</h2>

      <article className="my-9 px-4 md:flex justify-center">
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
          <div className="md:px-2 py-4 lg:p-6 md:max-w-[400px] lg:max-w-[600px]">
            <Link href="/">
              <a>
                <h3 className="headline--3 link">
                  Muzeum Ostře sledovaných vlaků
                </h3>
              </a>
            </Link>
            <div className="px-4 text-sm text-neutral-500">
              <time dateTime="2022-03-15T13:25:30+01:00">15. 3. 2022</time>
            </div>
            <p className="paragraph">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
              condimentum, arcu vel tempus finibus, nulla metus congue lacus, ac
              vehicula ex nulla non erat. Phasellus ultrices sapien sit amet
              eros ullamcorper lacinia. Sed at sem facilisis ipsum fermentum
              pulvinar. Nam volutpat fringilla mi, vitae mollis mi lobortis
              quis. Vivamus finibus ex est, interdum bibendum dolor consequat
              in. Duis ut porta nunc. Vivamus tempor accumsan finibus.
            </p>

            <ButtonLink href="/detail">Číst dál</ButtonLink>
          </div>
        </div>
      </article>

      <h2 className="underline-medium text-center pt-12">Nejnovější články</h2>

      <section className="md:flex w-full justify-center px-4">
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

      <p className="my-20 mx-8 md:mx-20 lg:mx-36">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In condimentum,
        arcu vel tempus finibus, nulla metus congue lacus, ac vehicula ex nulla
        non erat. Phasellus ultrices sapien sit amet eros ullamcorper lacinia.
        Sed at sem facilisis ipsum fermentum pulvinar. Nam volutpat fringilla
        mi, vitae mollis mi lobortis quis. Vivamus finibus ex est, interdum
        bibendum dolor consequat in. Duis ut porta nunc. Vivamus tempor accumsan
        finibus.
      </p>
    </Layout>
  );
};

export default Home;
