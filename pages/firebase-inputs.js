import { useState } from 'react';

// import { setNewArticle } from '../firebase/api/articles';

const FirebaseArticleInputs = () => {
  const [isTitleDifferent, setIsTitleDifferent] = useState(false);

  const newArticleHandler = (e) => {
    e.preventDefault();
    // const articleObj = { title: e.target[0].value, content: e.target[1].value };

    // eslint-disable-next-line no-console
    console.log(e.target);
    // setNewArticle(articleObj);
  };

  const isTitleDifferentChangeHandler = () => {
    setIsTitleDifferent(!isTitleDifferent);
  };

  return (
    <>
      <form className="m-5" onSubmit={newArticleHandler}>
        <label className="block" htmlFor="title">
          Název
        </label>
        <input className="mb-4 block border-2" id="title" type="text" />

        <input
          type="checkbox"
          id="isTitleDifferent"
          checked={isTitleDifferent}
          onChange={isTitleDifferentChangeHandler}
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
        <textarea className="block border-2" cols="30" rows="10" id="content" />
        <button className="border-2 bg-blue-300" type="Submit">
          Odeslat
        </button>
      </form>
    </>
  );
};

export default FirebaseArticleInputs;
