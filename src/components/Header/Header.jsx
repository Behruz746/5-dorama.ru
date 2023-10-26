import { NavLink } from "react-router-dom";
import { useContext, useEffect, useRef } from "react";

import "./styles.scss";
import AppContext from "../../AppContext";
import Search from "../Search/Search";

function Header() {
  const { isToggle, setIsToggle, searchvalue, setIsUrl, setToggleSeach } =
    useContext(AppContext);

  const Svg = () => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_87_32)">
        <path
          d="M4 18H20C20.55 18 21 17.55 21 17C21 16.45 20.55 16 20 16H4C3.45 16 3 16.45 3 17C3 17.55 3.45 18 4 18ZM4 13H20C20.55 13 21 12.55 21 12C21 11.45 20.55 11 20 11H4C3.45 11 3 11.45 3 12C3 12.55 3.45 13 4 13ZM3 7C3 7.55 3.45 8 4 8H20C20.55 8 21 7.55 21 7C21 6.45 20.55 6 20 6H4C3.45 6 3 6.45 3 7Z"
          fill="#768C9E"
        />
      </g>
      <defs>
        <clipPath id="clip0_87_32">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );

  const Svg01 = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="21"
      height="21"
      viewBox="0 0 21 21"
      fill="none"
    >
      <circle
        cx="8.99998"
        cy="9"
        r="8"
        stroke="#768C9E"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.5 14.958L19.5 19.958"
        stroke="#768C9E"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  return (
    <header className="App__header">
      <div className="header__box">
        <div className="header__container">
          <div className="header__menu-toggle">
            <button
              type="button"
              className="header__btn"
              onClick={() => setIsToggle(!isToggle)}
            >
              <Svg />
            </button>

            <div className="header__logo">
              <NavLink to="/">
                <img src="./images/svg/web__logo.svg" alt="logo" />
              </NavLink>
            </div>
          </div>

          <div className="header__search sf-pro-display">
            <div className="search__input">
              <input
                id="inputEl"
                type="text"
                placeholder="Введите название дорамы или фильмы"
              />
              <button type="submit" className="btn__submit">
                {/* <img src="./images/svg/search__icon.svg" alt="search icon" /> */}
                <Svg01 />
              </button>
            </div>
            <Search />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
