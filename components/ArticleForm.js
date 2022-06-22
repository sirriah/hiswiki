import { useState, useMemo } from 'react';
import { useRouter } from 'next/router';

import { CustomImage } from './CustomImage';
import imgPlaceholder from '../public/img/img_placeholder.png';
import { FormInput } from './Form/FormInput.tsx';
import { FormTextarea } from './Form/FormTextarea';
import { FormCheckbox } from './Form/FormCheckbox';
import { Details } from './Details';
import { useAuth } from '../contexts/AuthContext';

const listOfPortalsValues = [
  'Osoby',
  'Budovy',
  'Instituce',
  'Spolky',
  'Události',
  'Firmy',
  'Archeologie',
  'Chrustenice',
  'Jánská',
];

export const ArticleForm = ({
  title,
  alphabeticalTitle,
  content,
  id,
  featuredImage,
  articleCallback,
  altForFeaturedImage,
  keywords,
  portals,
  link,
  details,
}) => {
  const router = useRouter();
  const { currentUser } = useAuth();

  const [isTitleDifferent, setIsTitleDifferent] = useState(
    !!alphabeticalTitle && alphabeticalTitle !== title,
  );
  const [featuredImageState, setFeaturedImageState] = useState(
    featuredImage || '',
  );
  const [detailsState, setDetailsState] = useState([]);

  const handleTitleCheckboxChange = () => {
    setIsTitleDifferent(!isTitleDifferent);
  };

  const handleImageChange = (e) => {
    setFeaturedImageState(e.target.value);
  };

  const formSubmit = async (e) => {
    e.preventDefault();

    const portals = listOfPortalsValues.filter(
      (_, index) => !!e.target[`portals[${index}]`]?.checked,
    );

    const formData = {
      title: e.target.title.value,
      alphabeticalTitle: e.target.alphabeticalTitle?.value,
      content: e.target.content.value,
      featuredImage: e.target.featuredImage.value,
      altForFeaturedImage: e.target.altForFeaturedImage.value,
      keywords: e.target.keywords.value,
      id: id || '',
      link: link || '',
      portals,
      details: detailsState,
      author: currentUser.uid,
    };

    await articleCallback(formData);

    router.push('/');
  };

  const keywordPropSeparated = useMemo(
    () => keywords?.join?.(', ') || '',
    [keywords],
  );

  const transformedPortals = useMemo(
    () => listOfPortalsValues.map((item) => !!portals?.includes(item)),
    [portals],
  );

  return (
    <form className="mt-5" onSubmit={formSubmit}>
      <div className="flex flex-col justify-between lg:flex-row">
        <div className="w-full lg:w-[70%]">
          <FormInput
            labelClassName="my-1 block text-sm text-stone-700"
            label="Název"
            className="headline--2 mb-6 block w-full border-b-2 border-stone-300 bg-light-50 p-2 text-stone-700"
            id="title"
            type="text"
            required
            defaultValue={title || ''}
            pattern="[a-zA-Zá-žÁ-Ž0-9 .]+"
            title="Pouze velká a malá písmena a čísla."
          />

          <FormTextarea
            labelClassName="mt-6 mb-1 block text-sm text-stone-700"
            className="mb-4 block w-full border-b-2 border-stone-300 bg-light-50 p-2"
            label="Obsah"
            cols="60"
            rows="20"
            id="content"
            required
            defaultValue={content || ''}
          />

          <FormTextarea
            labelClassName="my-1 block text-sm text-stone-700"
            id="keywords"
            className="mb-6 border-b-2 border-stone-300 bg-light-50 p-2"
            label=" Klíčová slova - více slov oddělte čárkou"
            rows="4"
            cols="30"
            defaultValue={keywordPropSeparated || ''}
            pattern="[a-zA-Zá-žÁ-Ž0-9 .]+"
            title="Pouze velká a malá písmena nebo čísla."
          />

          <div>
            <label
              className="my-1 mt-6 block text-sm text-stone-700"
              htmlFor="portals"
            >
              Portály
            </label>
            <ul>
              {listOfPortalsValues.map((item, index) => (
                <li key={index}>
                  <FormCheckbox
                    className="mr-3 mb-2 cursor-pointer"
                    type="checkbox"
                    id={`portals[${index}]`}
                    value={item}
                    defaultChecked={transformedPortals[index]}
                  />
                  <label
                    className="cursor-pointer"
                    htmlFor={`portals[${index}]`}
                  >
                    {item}
                  </label>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <aside className="mt-10 w-full md:mt-0 lg:w-[25%]">
          <FormCheckbox
            id="isTitleDifferent"
            checked={isTitleDifferent}
            onChange={handleTitleCheckboxChange}
          />
          <label
            className="my-4 mt-4 ml-3 text-sm text-stone-700"
            htmlFor="differentTitle"
          >
            Použít jiný název pro abecední řazení
          </label>

          {isTitleDifferent && (
            <FormInput
              labelClassName="mt-6 mb-1 block text-sm text-stone-700"
              className="mb-4 block w-full border-b-2 border-stone-300 bg-light-50 p-2"
              label="Název pro abecední řazení"
              type="text"
              id="alphabeticalTitle"
              defaultValue={alphabeticalTitle || ''}
              pattern="[a-zA-Zá-žÁ-Ž0-9 .]+"
              title="Pouze velka a mala pismena nebo cisla."
            />
          )}

          <FormInput
            labelClassName="my-1 mt-6 block text-sm text-stone-700"
            className="mb-6 block w-full border-b-2 border-stone-300 bg-light-50 p-2"
            id="featuredImage"
            label="Hlavní obrázek - URL"
            type="text"
            value={featuredImageState}
            onChange={handleImageChange}
          />

          <CustomImage
            width="100"
            height="100"
            alt={altForFeaturedImage || ''}
            src={featuredImageState || imgPlaceholder}
          />

          <FormTextarea
            labelClassName="my-1 mt-6 block text-sm text-stone-700"
            id="altForFeaturedImage"
            className="mb-6 w-full border-b-2 border-stone-300 bg-light-50 p-2"
            label="Popis obrázku"
            rows="4"
            defaultValue={altForFeaturedImage || ''}
          />
          <label className="headline--4">Detaily</label>
          <Details
            id="details"
            detailsDataCallback={setDetailsState}
            defaultValue={details}
          />
        </aside>
      </div>
      <button
        className="my-4 rounded-md border-b-4 border-b-accent-600 bg-accent-500 px-10 py-3 text-white transition-colors hover:border-accent-500 hover:bg-accent-600"
        type="submit"
      >
        Odeslat
      </button>
    </form>
  );
};
