import Image from 'next/image';
import { useState } from 'react';
import classNames from 'classnames';

import { LayoutSingle } from '../components/LayoutSingle';
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
        <div className="md:w-[70%] md:mr-[5%]">
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

        <aside className="w-full md:w-[25%] mt-8 md:m-0" aria-label="sidebar">
          <figure>
            <div className="relative block w-full h-[300px]">
              <Image
                src={muzeum}
                layout="fill"
                className="relative block"
                objectFit="contain"
              />
            </div>
            <figcaption className="text-center text-sm text-dark-300 pb-5">
              Muzeum trati na nádraží v Loděnici při slavnostním otevření.
            </figcaption>
          </figure>

          <div
            onClick={openDetailsHandler}
            className="md:hidden font-bold p-3 bg-accent-200 cursor-pointer flex justify-between"
          >
            {!isDetailsOpen ? (
              <h2>Zobrazit detaily</h2>
            ) : (
              <h2>Skrýt detaily</h2>
            )}
            <Arrow
              className={classNames({ 'rotate-180': !isDetailsOpen }, 'w-4')}
            />
          </div>

          <section
            className={classNames({ hidden: !isDetailsOpen }, 'pb-10 md:block')}
          >
            <h3 className="font-yrsa font-medium uppercase tracking-widest shadow-neutral-900 text-lg py-3">
              Detaily
            </h3>
            <div className="p-2 bg-stone-100">
              <h4 className="font-bold text-accent-600 tracking-wide">Název</h4>
              <p className="text-dark-600">
                Muzeum trati a Ostře sledovaných vlaků
              </p>
            </div>

            <div className="p-2">
              <h4 className="font-bold text-accent-600 tracking-wide">GPS</h4>
              <p className="text-dark-600">49.9928244N, 14.1630689E</p>
            </div>

            <div className="p-2 bg-stone-100">
              <h4 className="font-bold text-accent-600 tracking-wide">
                Provozovatel
              </h4>
              <p className="text-dark-600">Loděnice v historii, z. s.</p>
            </div>

            <div className="p-2">
              <h4 className="font-bold text-accent-600 tracking-wide">Web</h4>
              <p className="text-dark-600">lodenicevhistorii.cz</p>
            </div>
          </section>
        </aside>
      </div>
      <section className="mt-20 mb-10 border-t-2 border-accent-200">
        <div className="py-8 border-b-2 border-accent-200">
          <h2 className="font-yrsa font-medium uppercase tracking-widest shadow-neutral-900 text-lg mb-5">
            Klíčová slova
          </h2>
          <div className="md:divide-x-2 md:divide-accent-200">
            <KeywordLink>Ostre sledovane vlaky</KeywordLink>
            <KeywordLink>Nadrazi</KeywordLink>
            <KeywordLink>Trat</KeywordLink>
          </div>
        </div>

        <div className="py-8">
          <h2 className="font-yrsa font-medium uppercase tracking-widest shadow-neutral-900 text-lg mb-5">
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
