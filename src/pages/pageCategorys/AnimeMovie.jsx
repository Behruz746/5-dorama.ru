import { v4 as uuidv4 } from "uuid";

// component
import Cards from "../../components/Cards";
import useFetch from "../../hooks/useFetch";

import { useEffect, useState } from "react";
import axios from "axios";

function AnimeMovie() {
  const [isDataT, setIsDataT] = useState([]);

  useEffect(() => {
    const useFetch = async () => {
      try {
        const dataT = await axios.get(
          "https://kodikapi.com/translations/v2?token=465c15438e7799bee14ea8965dc6e845&types=foreign-movie"
        );
        setIsDataT(dataT.data.results);
      } catch (error) {
        console.log("Error: 404");
      }
    };

    useFetch();
  }, []);

  const url = `https://kodikapi.com/list?token=465c15438e7799bee14ea8965dc6e845&with_episodes=true&with_material_data=true&limit=100&lgbt=false&types=anime&year=2015,2014,2016,2017,2018, 2020,2021,2022,2023&kinopoisk_rating=7-10&countries=Япония&with_episodes_data=true&translation_id=609`;
  const { data, isLoad, error } = useFetch(url);

  return (
    <div className="AnimeMovie w-full page catigoriyPage">
      <div className="container">
        <div className="popularNow__body">
          <h1 className="popularNow__title title">Аниме</h1>
          <div
            className={`${
              !isLoad ? "container__cards" : "container__cards--load"
            } ${!error ? "container__cards" : "container__cards--load"} `}
          >
            {!error ? (
              <>
                {!isLoad ? (
                  <>
                    {data.map((data) => (
                      <Cards {...data} key={uuidv4()} />
                    ))}
                  </>
                ) : (
                  <div className="lds-ellipsis">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                  </div>
                )}
              </>
            ) : (
              <h1>Error: 404;</h1>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AnimeMovie;
