import classNames from 'classnames';
import { useState } from 'react';

import IconSearch from '../public/img/search.svg';

export const SearchBar = ({ isScrolledDown }) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const openSearchBarHandler = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  return (
    <div className="flex-initial justify-start">
      <button className="bg-white p-1 md:hidden" onClick={openSearchBarHandler}>
        <span className="sr-only">Vyhledat</span>
        <IconSearch className="h-6" />
      </button>

      <form
        className={classNames(
          { hidden: !isSearchOpen },
          'absolute top-14 left-0 flex w-full flex-row bg-accent-200 p-2 md:relative md:top-0 md:left-0 md:block md:bg-transparent md:p-0',
        )}
      >
        <label className="sr-only" htmlFor="search">
          Vyhledávání
        </label>

        <input
          className={classNames(
            'rounded-l-lg border border-gray-500 py-1 pl-4',
            {
              'lg:border-stone-400 lg:bg-white lg:text-black': isScrolledDown,
              'lg:border-white lg:bg-stone-900/30 lg:text-white':
                !isScrolledDown,
            },
          )}
          type="text"
          placeholder="Vyhledávání"
          name="search"
        />

        <button
          className={classNames(
            'rounded-r-lg border border-gray-500 bg-white p-1 hover:border-gray-400 hover:bg-gray-200',
            {
              'lg:border-stone-400': isScrolledDown,
              'lg:border-white': !isScrolledDown,
            },
          )}
          type="submit"
          aria-labelledby="searchButton"
        >
          <span className="sr-only" id="searchButton">
            Vyhledat
          </span>
          <IconSearch className="inline h-5" />
        </button>
      </form>
    </div>
  );
};
