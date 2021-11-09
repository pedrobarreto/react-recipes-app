import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';
import HeaderSearch from './HeaderSearch';

export default function Header({ searchRender = true }) {
  const [clickSearch, setclickSearch] = useState(false);

  const namePage = () => {
    let { pathname } = window.location;
    pathname = pathname.substring(1);
    return pathname.charAt(0).toUpperCase() + pathname.slice(1);
  };

  const searchButton = () => (
    <button
      type="button"
      onClick={ () => setclickSearch(!clickSearch) }
      className="bg-transparent border-0"
    >
      <img
        src={ searchIcon }
        data-testid="search-top-btn"
        alt="icone de busca"
      />
    </button>
  );

  return (
    <div>
      <div className="d-flex">
        <div>
          <Link to="/perfil">
            <img
              src={ profileIcon }
              data-testid="profile-top-btn"
              alt="icone de perfil"
            />
          </Link>
        </div>
        <div>
          <h1 data-testid="page-title">{ namePage() }</h1>
        </div>
        { searchRender
        && searchButton() }
      </div>
      { clickSearch && <HeaderSearch />}
    </div>
  );
}

Header.propTypes = {
  searchRender: PropTypes.bool,
};

Header.defaultProps = {
  searchRender: true,
};
