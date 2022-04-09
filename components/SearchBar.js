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
      <button className="p-1 bg-white md:hidden" onClick={openSearchBarHandler}>
        <span className="sr-only">Vyhledat</span>
        <IconSearch className="h-6" />
      </button>

      <form
        className={classNames(
          { hidden: !isSearchOpen },
          'absolute top-14 left-0 w-full p-2 bg-accent-200 md:relative md:top-0 md:left-0 md:p-0 md:bg-transparent md:block flex flex-row',
        )}
      >
        <label className="sr-only" htmlFor="search">
          Vyhledávání
        </label>

        <input
          className={classNames(
            'border border-gray-500 pl-4 py-1  rounded-l-lg',
            {
              'lg:bg-white lg:text-black lg:border-stone-400': isScrolledDown,
              'lg:bg-stone-900/30 lg:text-white lg:border-white':
                !isScrolledDown,
            },
          )}
          type="text"
          placeholder="Vyhledávání"
          name="search"
        />
        <button
          className={classNames(
            'bg-white border border-gray-500  hover:border-gray-400 hover:bg-gray-200 p-1 rounded-r-lg',
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
          <IconSearch className="h-5 inline" />
        </button>
      </form>
    </div>
  );
};
