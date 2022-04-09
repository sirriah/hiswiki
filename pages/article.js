import Image from 'next/image';
import { useState } from 'react';
import classNames from 'classnames';

import { LayoutSingle } from '../components/Layout';
import muzeum from '../public/img/museumtrati.jpg';
import { PortalLink } from '../components/PortalLink';
import { KeywordLink } from '../components/KeywordLink';
import Arrow from '../public/img/arrow.svg';

const Article = () => {
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);

  const openDetailsHandler = () => {
    setIsDetailsOpen(!isDetailsOpen);
  };

  return (
    <LayoutSingle>
      <h1 className="headline--1 underline-large">
        Muzeum trati a Ostře sledovaných vlaků
      </h1>
      <div className="flex flex-col-reverse md:flex-row">
        <div className="md:mr-[5%] md:w-[70%]">
          <p className="paragraph">
            Lipsum dolor sit amet, consectetur adipiscing elit. Praesent
            egestas, augue elementum elementum facilisis, ligula velit fermentum
            libero, dictum malesuada justo dui sed sapien. Quisque ac erat
            scelerisque enim mattis viverra. Pellentesque pulvinar ex gravida,
            consectetur erat et, semper ligula. Aenean scelerisque urna augue,
            ut accumsan enim bibendum ut. Quisque dictum felis faucibus erat
            consequat, quis ullamcorper orci faucibus. Fusce gravida urna dolor,
            sit amet ultricies leo posuere eu. Quisque augue purus, porttitor
            quis sagittis vitae, cursus vel turpis.
          </p>
          <h2 className="headline--2 border-b-2">Lodenicke nadrazi</h2>
          <p className="paragraph">
            Quisque ac erat scelerisque enim mattis viverra. Pellentesque
            pulvinar ex gravida, consectetur erat et, semper ligula. Aenean
            scelerisque urna augue, ut accumsan enim bibendum ut. Quisque dictum
            felis faucibus erat consequat.
          </p>

          <h3 className="headline--3 border-b-2">Obecni urad</h3>
          <p className="paragraph">
            Aenean scelerisque urna augue, ut accumsan enim bibendum ut. Quisque
            dictum felis faucibus erat consequat, quis ullamcorper orci
            faucibus. Fusce gravida urna dolor, sit amet ultricies leo posuere
            eu. Quisque augue purus, porttitor quis sagittis vitae, cursus vel
            turpis.
          </p>
        </div>

        <aside className="mt-8 w-full md:m-0 md:w-1/4" aria-label="sidebar">
          <figure>
            <div className="relative block h-[300px] w-full">
              <Image
                src={muzeum}
                layout="fill"
                className="relative block"
                objectFit="contain"
              />
            </div>
            <figcaption className="pb-5 text-center text-sm text-dark-300">
              Muzeum trati na nádraží v Loděnici při slavnostním otevření.
            </figcaption>
          </figure>

          <div
            onClick={openDetailsHandler}
            className="flex cursor-pointer justify-between bg-accent-200 p-3 font-bold md:hidden"
          >
            <h2> {!isDetailsOpen ? 'Zobrazit detaily' : 'Skrýt detaily'}</h2>
            <Arrow
              className={classNames({ 'rotate-180': !isDetailsOpen }, 'w-4')}
            />
          </div>

          <section
            className={classNames({ hidden: !isDetailsOpen }, 'pb-10 md:block')}
          >
            <h3 className="py-3 font-yrsa text-lg font-medium uppercase tracking-widest shadow-neutral-900">
              Detaily
            </h3>
            <div className="bg-stone-100 p-2">
              <h4 className="font-bold tracking-wide text-accent-600">Název</h4>
              <p className="text-dark-600">
                Muzeum trati a Ostře sledovaných vlaků
              </p>
            </div>

            <div className="p-2">
              <h4 className="font-bold tracking-wide text-accent-600">GPS</h4>
              <p className="text-dark-600">49.9928244N, 14.1630689E</p>
            </div>

            <div className="bg-stone-100 p-2">
              <h4 className="font-bold tracking-wide text-accent-600">
                Provozovatel
              </h4>
              <p className="text-dark-600">Loděnice v historii, z. s.</p>
            </div>

            <div className="p-2">
              <h4 className="font-bold tracking-wide text-accent-600">Web</h4>
              <p className="text-dark-600">lodenicevhistorii.cz</p>
            </div>
          </section>
        </aside>
      </div>
      <section className="mt-20 mb-10 border-t-2 border-accent-200">
        <div className="border-b-2 border-accent-200 py-8">
          <h2 className="mb-5 font-yrsa text-lg font-medium uppercase tracking-widest shadow-neutral-900">
            Klíčová slova
          </h2>
          <div className="md:divide-x-2 md:divide-accent-200">
            <KeywordLink>Ostre sledovane vlaky</KeywordLink>
            <KeywordLink>Nadrazi</KeywordLink>
            <KeywordLink>Trat</KeywordLink>
          </div>
        </div>

        <div className="py-8">
          <h2 className="mb-5 font-yrsa text-lg font-medium uppercase tracking-widest shadow-neutral-900">
            Portály
          </h2>
          <div className="flex w-full flex-wrap">
            <PortalLink key="1">Spolky</PortalLink>
            <PortalLink key="2">Instituce</PortalLink>
          </div>
        </div>
      </section>
    </LayoutSingle>
  );
};

export default Article;
