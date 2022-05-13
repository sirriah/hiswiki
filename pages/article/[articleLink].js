import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';
import classNames from 'classnames';

import { getArticleDetail } from '../../firebase/api/articles';
import { Layout } from '../../components/Layout';
import { PortalLink } from '../../components/PortalLink';
import { KeywordLink } from '../../components/KeywordLink';
import { Loader } from '../../components/Loader';
import Arrow from '../../public/img/arrow.svg';

const Article = () => {
  const router = useRouter();
  const { articleLink } = router.query;

  const [article, setArticle] = useState();

  const [isDetailsOpen, setIsDetailsOpen] = useState(false);

  const openDetailsHandler = () => {
    setIsDetailsOpen(!isDetailsOpen);
  };

  useEffect(() => {
    const handleFetching = async () => {
      setArticle(await getArticleDetail(articleLink));
    };

    if (articleLink) {
      handleFetching();
    }
  }, [articleLink]);

  if (!article) {
    return <Loader />;
  }

  const {
    id,
    title,
    content,
    link,
    featuredImage,
    details,
    keywords,
    portals,
    altForFeaturedImage,
  } = article;

  return (
    <Layout>
      <div key={id}>
        <Link href={`/article/edit/${link}`}>
          <a className="block-inline text-right text-blue-600 underline">
            <h2>Editovat článek</h2>
          </a>
        </Link>

        <h1 className="headline--1 underline-large mb-5">{title}</h1>
        <div className="mt-5 flex flex-col-reverse md:flex-row">
          <div className="md:mr-[5%] md:w-[70%]">
            <p>{decodeURIComponent(content)}</p>
          </div>

          <aside className="mt-8 w-full md:m-0 md:w-1/4" aria-label="sidebar">
            {featuredImage && (
              <figure>
                <div className="relative block h-[300px] w-full">
                  <Image
                    src={decodeURIComponent(featuredImage)}
                    layout="fill"
                    className="relative block"
                    objectFit="contain"
                    aria-labelledby="freaturedImageAlt"
                  />
                </div>
                {altForFeaturedImage && (
                  <figcaption
                    id="freaturedImageAlt"
                    className="pb-5 text-center text-sm text-dark-300"
                  >
                    {decodeURIComponent(altForFeaturedImage)}
                  </figcaption>
                )}
              </figure>
            )}
            {details && (
              <div>
                <div
                  onClick={openDetailsHandler}
                  className="flex cursor-pointer justify-between bg-accent-200 p-3 font-bold md:hidden"
                >
                  <h2>
                    {!isDetailsOpen ? 'Zobrazit detaily' : 'Skrýt detaily'}
                  </h2>
                  <Arrow
                    className={classNames(
                      { 'rotate-180': !isDetailsOpen },
                      'w-4',
                    )}
                  />
                </div>

                <section
                  className={classNames(
                    { hidden: !isDetailsOpen },
                    'pb-10 md:block',
                  )}
                >
                  <h3 className="py-3 font-yrsa text-lg font-medium uppercase tracking-widest shadow-neutral-900">
                    Detaily
                  </h3>
                  {Object.entries(details).map(({ detailId, value }) => (
                    <div key={detailId} className="bg-stone-100 p-2">
                      <h4 className="font-bold tracking-wide text-accent-600">
                        {detailId}
                      </h4>
                      <p className="text-dark-600">{value}</p>
                    </div>
                  ))}
                </section>
              </div>
            )}
          </aside>
        </div>
        <section className="mt-20 mb-10 border-t-2 border-accent-200">
          {keywords && (
            <div className="border-b-2 border-accent-200 py-8">
              <h2 className="mb-5 font-yrsa text-lg font-medium uppercase tracking-widest shadow-neutral-900">
                Klíčová slova
              </h2>
              <div className="md:divide-x-2 md:divide-accent-200">
                {keywords.map((item, index) => (
                  <KeywordLink key={index}>{item}</KeywordLink>
                ))}
              </div>
            </div>
          )}

          {portals && (
            <div className="py-8">
              <h2 className="mb-5 font-yrsa text-lg font-medium uppercase tracking-widest shadow-neutral-900">
                Portály
              </h2>
              <div className="flex w-full flex-wrap">
                {portals.map((item, index) => (
                  <PortalLink key={index}>{item}</PortalLink>
                ))}
              </div>
            </div>
          )}
        </section>
      </div>
    </Layout>
  );
};

export default Article;
