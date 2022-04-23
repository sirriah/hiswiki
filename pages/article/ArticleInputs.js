import { useState } from 'react';

export const ArticleInputs = ({
  titleProp,
  alphabeticalTitleProp,
  contentProp,
  idProp,
  onEditArticle,
  onAddNewArticle,
}) => {
  const [isTitleDifferent, setIsTitleDifferent] = useState(
    !!(alphabeticalTitleProp && alphabeticalTitleProp !== titleProp),
  );

  const [formData, setFormData] = useState({
    id: idProp,
    title: titleProp,
    alphabeticalTitle: alphabeticalTitleProp,
    content: contentProp,
  });

  const onChangeHandler = (e) => {
    setFormData({ ...formData }, { [e.target.id]: e.target.value });
  };

  const articleHandler = (e) => {
    e.preventDefault();

    // eslint-disable-next-line no-console
    console.log(formData);

    if (onAddNewArticle) {
      // setNewArticle(articleObj);
    }
    if (onEditArticle) {
      /* this is not complete  */
      // onEditArticle(articleObj)
    }
  };

  const isTtileDifferentChangeHandler = (event) => {
    setIsTitleDifferent(!isTitleDifferent);
  };

  return (
    <>
      <form className="m-5" onSubmit={articleHandler}>
        <label className="block" htmlFor="title">
          Název
        </label>
        <input
          className="mb-4 block border-2"
          id="title"
          type="text"
          value={titleProp}
          onChange={onChangeHandler}
        />

        <input
          type="checkbox"
          id="isTitleDifferent"
          checked={isTitleDifferent}
          onChange={isTtileDifferentChangeHandler}
        />
        <label className="mb-4" htmlFor="differentTitle">
          Použít jiný název pro abecední řazení
        </label>

        {isTitleDifferent ? (
          <>
            <label className="block" htmlFor="alphabeticalTitle">
              Název pro abecední řazení
            </label>
            <input
              className="block border-2"
              type="text"
              id="alphabeticalTitle"
              value={alphabeticalTitleProp}
              onChange={onChangeHandler}
            />
          </>
        ) : (
          ''
        )}

        <label className="mt-4 block" htmlFor="featuredImage">
          Hlavni obrázek
        </label>
        <input className="mb-4 block" id="featuredImage" type="file" />

        <label className="block" htmlFor="content">
          Obsah
        </label>
        <textarea
          className="block border-2"
          cols="30"
          rows="10"
          id="content"
          value={contentProp}
          onChange={onChangeHandler}
        />
        <button className="border-2 bg-blue-300" type="Submit">
          Odeslat
        </button>
      </form>
    </>
  );
};
