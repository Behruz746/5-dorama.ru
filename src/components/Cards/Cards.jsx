import { NavLink } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

import "./styles.scss";

import { useContext, useEffect, useState } from "react";
import AppContext from "../../AppContext";

import React from "react";
import ContentLoader from "react-content-loader";

const MyLoader = (props) => {
  const arr = [1, 2];
  return (
    <>
      {arr.map(() => {
        return (
          <ContentLoader
            key={uuidv4()}
            speed={2}
            width={162}
            height={347}
            viewBox="0 0 162 347"
            backgroundColor="#17212BFF"
            foregroundColor="#768B9EFF"
            {...props}
          >
            <rect x="0" y="0" rx="10" ry="10" width="162" height="300" />
            <rect x="0" y="310" rx="3" ry="3" width="128" height="8" />
            <rect x="0" y="323" rx="3" ry="3" width="93" height="8" />
          </ContentLoader>
        );
      })}
    </>
  );
};

function Cards(data) {
  const { setIsVideoLink, isVideoLink, dataList, isLoad } =
    useContext(AppContext);

  const [isItemBo, setIsItemBo] = useState(false);
  const [dataId, setDataId] = useState(data.id);

  const Svg = () => (
    <svg
      className="card__icon"
      width="14"
      height="13"
      viewBox="0 0 14 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="Group">
        <path
          id="Vector"
          d="M6.99999 10.9524L10.1125 12.8349C10.6825 13.1799 11.38 12.6699 11.23 12.0249L10.405 8.48495L13.1575 6.09995C13.66 5.66495 13.39 4.83995 12.73 4.78745L9.10749 4.47995L7.68999 1.13495C7.43499 0.527446 6.56499 0.527446 6.30999 1.13495L4.89249 4.47245L1.26999 4.77995C0.609994 4.83245 0.339993 5.65745 0.842493 6.09245L3.59499 8.47745L2.76999 12.0174C2.61999 12.6624 3.31749 13.1724 3.88749 12.8274L6.99999 10.9524Z"
          fill="white"
        />
      </g>
    </svg>
  );

  useEffect(() => {
    if (data.material_data && data.material_data.poster_url) {
      setIsItemBo(true);
    } else {
      setIsItemBo(false);
    }
  }, []);

  return (
    <>
      {isLoad ? (
        <>
          {isItemBo ? (
            <div
              className="Card"
              onClick={() => {
                setDataId(data.id);
                // console.log(dataId);
              }}
            >
              <NavLink
                to={`video/${dataId}`}
                onClick={() => {
                  localStorage.setItem("dataLink", data.link);
                }} 
              >
                <div className="card__img">
                  <img
                    className="card__logo"
                    src="./images/svg/star_black2.svg"
                    alt="logo"
                  />
                  <div className="card__reting">
                    <Svg />
                    <h4>
                      {data.material_data.mydramalist_rating
                        ? data.material_data.mydramalist_rating
                        : 5.6}
                    </h4>
                  </div>
                  <img
                    className="card__image"
                    src={
                      data.material_data.poster_url
                        ? data.material_data.poster_url
                        : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPLxrenfHPaNrSMVtKYmvb19BOBDi2a5Wi3TeTWajnfcf2l_Je8SVUAsUZoU9VEWFVrsg&usqp=CAU"
                    }
                    alt="card image"
                  />
                </div>
                <div className="card__content">
                  <h1 className="card__title">{data.title}</h1>
                  <p>{data.sort}</p>
                </div>
              </NavLink>
            </div>
          ) : (
            <div className="Card" style={{ display: "none" }}>
              null
            </div>
          )}
        </>
      ) : (
        <div className="card--load">
          <MyLoader />
        </div>
      )}
    </>
  );
}

export default Cards;
