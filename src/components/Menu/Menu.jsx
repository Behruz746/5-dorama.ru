import { useContext, useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { Icon28ClipOutline } from "@vkontakte/icons";

// Data
import { dataNav, famousData, dropData } from "../../data/data";

// AppContext
import AppContext from "../../AppContext";
import "./styles.scss";

function Menu() {
  const { isToggle, setIsToggle } = useContext(AppContext);

  const [isArrorToggle00, setIsArrowToggle00] = useState(false);
  const [isArrorToggle01, setIsArrowToggle01] = useState(false);

  const Svg = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="28"
      fill="none"
      viewBox="0 0 28 28"
    >
      <path
        fill="rgba(118, 140, 158, 1)"
        fillRule="evenodd"
        d="M12 26c-4.6944 0-8.5-3.8001-8.5-8.4879h2c0 3.5848 2.9102 6.4908 6.5 6.4907h.5c.5523 0 1 .4471 1 .9986 0 .5515-.4477.9986-1 .9986H12Zm4-14.9786c0-.5515.4477-.9985 1-.9985 2.1846 0 4.1021 1.1511 5.1513 2.8769.2866.4714.1362 1.0856-.3359 1.3718-.4721.2862-1.0871.136-1.3737-.3354C19.7457 12.7915 18.468 12.02 17 12.02c-.5523 0-1-.4471-1-.9986Zm1.5 12.9758 5.9985-3.4838.0013-.0007.0002-.0048-.0002-.0049-.0013-.0007L17.5 17.0185v6.9787Zm7.0041-1.7574c1.3279-.7712 1.3279-2.6926-.0001-3.4639l-6.0046-3.4873c-1.3318-.7735-2.9994.1894-2.9994 1.7319v6.9747c0 1.5425 1.6676 2.5054 2.9994 1.7319l6.0047-3.4873Z"
        clipRule="evenodd"
      />
      <path
        fill="rgba(118, 140, 158, 1)"
        fillRule="evenodd"
        d="M15.6385 4.031c-.7559-.1677-1.504.3117-1.6663 1.0678l-.9944 4.634c-.1157.5393-.6473.8827-1.1873.7672-.5401-.1156-.884-.6464-.7683-1.1857l.9944-4.634c.395-1.8404 2.2158-3.0071 4.0558-2.5988 1.7197.3816 2.8613 2.0134 2.6285 3.7571l-.7097 5.3148c-.073.5467-.5759.9307-1.1234.8578-.5474-.0728-.932-.5751-.859-1.1217l.7096-5.3148c.0957-.7164-.3733-1.3869-1.0799-1.5437Z"
        clipRule="evenodd"
      />
      <path
        fill="rgba(118, 140, 158, 1)"
        d="M7.2234 6.0547c-.0713-.8194.5755-1.524 1.3992-1.524.6445 0 1.2063.438 1.3626 1.0623l1.0447 4.1728c.1339.535.6768.8603 1.2126.7265.5358-.1337.8616-.6759.7276-1.211l-1.0446-4.1726c-.3789-1.5134-1.7407-2.5751-3.3029-2.5751-1.9966 0-3.5646 1.7078-3.3917 3.694l.7397 8.4944 1.9041-1.1884-.6513-7.479Z"
      />
      <path
        fill="rgba(118, 140, 158, 1)"
        fillRule="evenodd"
        d="M11.4724 14.7518c-.1509-.6783-.7751-1.145-1.4694-1.0988l-1.2358.0823C6.9286 13.8577 5.5 15.3826 5.5 17.2225v.2896c0 .5515-.4477.9986-1 .9986s-1-.4471-1-.9986v-.2896c0-2.8914 2.245-5.2876 5.1341-5.4799l1.236-.0823c1.6796-.1118 3.1895 1.0173 3.5547 2.6583.424 1.9052-.8396 3.7756-2.7675 4.0965l-.4929.082c-.5448.0907-1.06-.2768-1.1508-.8208-.0908-.544.2772-1.0585.822-1.1491l.4929-.0821c.7969-.1326 1.3192-.9057 1.1439-1.6933Z"
        clipRule="evenodd"
      />
    </svg>
  );

  const Svg01 = () => (
    <svg
      width="16"
      height="22"
      viewBox="0 0 16 22"
      fill="#FFBA33FF"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="Lightning">
        <path
          id="Union"
          d="M9.81538 9.42112C9.70492 9.42112 9.61538 9.33157 9.61538 9.22112V1.60383C9.61538 1.41125 9.36988 1.32994 9.25492 1.48445L1.59411 11.7804C1.34868 12.1103 1.58411 12.5789 1.99525 12.5789H6.18463C6.29508 12.5789 6.38463 12.6684 6.38463 12.7789V20.3962C6.38463 20.5888 6.63012 20.6701 6.74508 20.5156L14.4059 10.2196C14.6513 9.88973 14.4159 9.42112 14.0047 9.42112H9.81538Z"
          stroke="#FFBA33FF"
          strokeWidth="1.5"
        />
      </g>
    </svg>
  );

  const ListDrop = () => (
    <div
      className={
        !isArrorToggle00 ? "drop__list" : "drop__list drop__list--active"
      }
    >
      {dropData.map((data) => (
        <div key={uuidv4()}>
          <NavLink to="*" className="d-flex drop__item">
            <img src="./images/svg/play__icon.svg" alt="Icon" />
            <h1>{data.name}</h1>
          </NavLink>
        </div>
      ))}
    </div>
  );

  const ListMovies = () => (
    <div
      className={
        !isArrorToggle01 ? "drop__list" : "drop__list drop__list--active"
      }
    >
      {/* {dropData.map((data) => ( */}
      <div>
        <NavLink to="*" className="d-flex drop__item">
          <img src="./images/svg/play__icon.svg" alt="Icon" />
          <h1>Movie is name in API</h1>
        </NavLink>
      </div>
      {/* ))} */}
    </div>
  );

  return (
    <div className={isToggle ? "App__nav" : "App__nav App__nav--active"}>
      <nav className="nav__list">
        <div className="list__items">
          <div className="menu__container">
            <div
              className={
                isToggle ? "list__item" : "list__item list__item--active"
              }
            >
              <NavLink
                to="/"
                className="list__link"
                onClick={() => setIsToggle(true)}
              >
                <div
                  className={
                    isToggle ? "list__box" : "list__box list__box--active"
                  }
                >
                  <img src="./images/svg/home__icon02.svg" alt="item icon" />
                  <h3>Главная</h3>
                </div>
              </NavLink>
            </div>
            <div
              className={
                isToggle ? "list__item" : "list__item list__item--active"
              }
            >
              <NavLink
                to="shorts"
                className="list__link"
                onClick={() => setIsToggle(true)}
              >
                <div
                  className={
                    isToggle ? "list__box" : "list__box list__box--active"
                  }
                >
                  <Svg width={24} height={24} />
                  <h3>Трейлер</h3>
                </div>
              </NavLink>
            </div>
            <div
              className={
                isToggle ? "list__item" : "list__item list__item--active"
              }
            >
              <NavLink
                to="dramas"
                className="list__link"
                id="borderActive"
                onClick={() => setIsToggle(true)}
              >
                <div
                  className={
                    isToggle ? "list__box" : "list__box list__box--active"
                  }
                >
                  <img src="/images/svg/treler__icon02.svg" alt="item icon" />
                  <h3>Дорамы</h3>
                </div>
              </NavLink>

              <div
                className="image__box"
                onClick={() => {
                  setIsArrowToggle00(!isArrorToggle00);
                  console.log(isArrorToggle00);
                }}
              >
                <img
                  className={
                    !isArrorToggle00 ? "toggle__arrow" : "toggle__arrow--actve"
                  }
                  src="./images/svg/arrow-down__icon.svg"
                  alt="toggle icon"
                />
              </div>
            </div>
            <ListDrop />
            <div
              className={
                isToggle ? "list__item" : "list__item list__item--active"
              }
            >
              <NavLink
                to="filems"
                className="list__link"
                id="borderActive"
                onClick={() => setIsToggle(true)}
              >
                <div
                  className={
                    isToggle ? "list__box" : "list__box list__box--active"
                  }
                >
                  <img src="./images/svg/filems__icon02.svg" alt="item icon" />
                  <h3>Фильмы</h3>
                </div>
              </NavLink>
              <div
                className="image__box"
                onClick={() => {
                  setIsArrowToggle01(!isArrorToggle01);
                  console.log(isArrorToggle01);
                }}
              >
                <img
                  className={
                    !isArrorToggle01 ? "toggle__arrow" : "toggle__arrow--actve"
                  }
                  src="./images/svg/arrow-down__icon.svg"
                  alt="toggle icon"
                />
              </div>
            </div>
            <ListMovies />
          </div>
        </div>

        <div
          className={isToggle ? "nav__line" : "nav__line nav__line--active"}
        ></div>
        <div
          className={
            isToggle
              ? "famous__filems"
              : "famous__filems famous__filems--active"
          }
        >
          {famousData.map(({ text, link, icon, target, color }) => (
            <NavLink
              target={target ? "_blank" : ""}
              to={link}
              className={
                isToggle ? "list__item" : "list__link list__link--active"
              }
              key={uuidv4()}
              onClick={() => setIsToggle(true)}
            >
              {icon ? <img src={icon} alt="item icon" /> : <Svg01 />}

              <h3 style={{color: `${color}`}}>{text}</h3>
            </NavLink>
          ))}
        </div>
      </nav>
    </div>
  );
}

export default Menu;
