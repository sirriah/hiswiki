import { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';

import { addNewArticle, editArticle } from '../firebase/api/articles';

export const ArticleForm = ({
  titleProp,
  alphabeticalTitleProp,
  contentProp,
  idProp,
  featuredImageProp,
  onEditArticle,
  onAddNewArticle,
  altForFeaturedImageProp,
  keywordsProp,
  portalsProp,
  linkProp,
}) => {
  const router = useRouter();

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

  const [isTitleDifferent, setIsTitleDifferent] = useState(
    alphabeticalTitleProp && alphabeticalTitleProp !== titleProp,
  );

  const portalsReduceToState = (arrayOfPortalsNames) => {
    const tempArray = new Array(listOfPortalsValues.length).fill(false);

    arrayOfPortalsNames.forEach((item) => {
      const index = listOfPortalsValues.indexOf(item);
      tempArray[index] = true;
    });

    return tempArray;
  };

  const [portalsCheckboxes, setPortalsCheckboxes] = useState(
    portalsProp
      ? portalsReduceToState(portalsProp)
      : new Array(listOfPortalsValues.length).fill(false),
  );

  const onChangeHandler = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const checkboxesOnChangeHandler = (position) => {
    const updatedCheckedState = portalsCheckboxes.map((item, index) =>
      index === position ? !item : item,
    );

    setPortalsCheckboxes(updatedCheckedState);

    const portalsArray = updatedCheckedState.reduce(
      (array, item, index) =>
        item ? array.concat(listOfPortalsValues[index]) : array,
      [],
    );

    setFormData({ ...formData, portals: portalsArray });
  };

  const [formData, setFormData] = useState({
    id: idProp || '',
    title: titleProp,
    alphabeticalTitle: alphabeticalTitleProp || '',
    content: contentProp || '',
    featuredImage: featuredImageProp || '',
    altForFeaturedImage: altForFeaturedImageProp || '',
    keywords: keywordsProp && keywordsProp.join(', '),
    portals: portalsProp || '',
    link: linkProp || '',
  });

  const isTitleDifferentChangeHandler = () => {
    setIsTitleDifferent(!isTitleDifferent);
  };

  const articleHandler = (e) => {
    e.preventDefault();

    if (onAddNewArticle) {
      addNewArticle(formData);
    }
    if (onEditArticle) {
      editArticle(formData);
    }

    router.push('/');
  };

  return (
    <form className="mt-5" onSubmit={articleHandler}>
      <div className="flex flex-col justify-between lg:flex-row">
        <div className="w-full lg:w-[70%]">
          <label className="my-1 block text-sm text-stone-700" htmlFor="title">
            Název *
          </label>
          <input
            className="headline--2 mb-6 block w-full border-b-2 border-stone-300 bg-light-50 p-2 text-stone-700"
            id="title"
            type="text"
            value={formData.title}
            onChange={onChangeHandler}
            required
          />

          <label
            className="mt-6 mb-1 block text-sm text-stone-700"
            htmlFor="content"
          >
            Obsah *
          </label>
          <textarea
            className="mb-4 block w-full border-b-2 border-stone-300 bg-light-50 p-2"
            cols="60"
            rows="20"
            id="content"
            value={formData.content}
            onChange={onChangeHandler}
            required
          />

          <label
            className="my-1 mt-6 block text-sm text-stone-700"
            htmlFor="keywords"
          >
            Klíčová slova - více slov oddělte čárkou
          </label>
          <textarea
            id="keywords"
            className="mb-6 border-b-2 border-stone-300 bg-light-50 p-2"
            rows="4"
            cols="30"
            onChange={onChangeHandler}
            value={formData.keywords}
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
                  <input
                    className="mr-3 mb-2"
                    type="checkbox"
                    id={`portals-${index}`}
                    name={item}
                    value={item}
                    checked={portalsCheckboxes[index]}
                    onChange={() => checkboxesOnChangeHandler(index)}
                  />
                  <label htmlFor={`portals-${index}`}>{item}</label>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <aside className="w-full lg:w-[25%]">
          <input
            type="checkbox"
            id="isTitleDifferent"
            checked={isTitleDifferent}
            onChange={isTitleDifferentChangeHandler}
          />
          <label
            className="my-4 mt-4 ml-3 text-sm text-stone-700"
            htmlFor="differentTitle"
          >
            Použít jiný název pro abecední řazení
          </label>
          {isTitleDifferent && (
            <>
              <label
                className="mt-6 mb-1 block text-sm text-stone-700"
                htmlFor="alphabeticalTitle"
              >
                Název pro abecední řazení
              </label>
              <input
                className="mb-4 block w-full border-b-2 border-stone-300 bg-light-50 p-2"
                type="text"
                id="alphabeticalTitle"
                value={formData.alphabeticalTitle}
                onChange={onChangeHandler}
              />
            </>
          )}
          <label
            className="my-1 mt-6 block text-sm text-stone-700"
            htmlFor="featuredImage"
          >
            Hlavní obrázek - URL
          </label>
          <input
            className="mb-6 block w-full border-b-2 border-stone-300 bg-light-50 p-2"
            id="featuredImage"
            type="text"
            value={formData.featuredImage}
            onChange={onChangeHandler}
          />
          {formData.featuredImage && (
            <Image
              src={formData.featuredImage}
              width="100"
              height="100"
              alt=""
            />
          )}

          <label
            className="my-1 mt-6 block text-sm text-stone-700"
            htmlFor="altForFeaturedImage"
          >
            Popis obrázku
          </label>
          <textarea
            id="altForFeaturedImage"
            className="mb-6 w-full border-b-2 border-stone-300 bg-light-50 p-2"
            rows="4"
            onChange={onChangeHandler}
            value={formData.altForFeaturedImage}
          />
        </aside>
      </div>
      <button
        className="my-4 rounded-md border-b-4 border-b-accent-600 bg-accent-500 px-10 py-3 text-white transition-colors hover:border-accent-500 hover:bg-accent-600"
        type="Submit"
      >
        Odeslat
      </button>
    </form>
  );
};
