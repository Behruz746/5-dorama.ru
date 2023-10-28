import Slider from "react-slick";
import { NavLink } from "react-router-dom";
import { dataSlider } from "../../data/data";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import { useState } from "react";
import "./styles.scss";
import { useEffect } from "react";

function HeaderSlider({ pNone }) {
  const settings = {
    className: "slider variable-width",
    dots: false,
    infinite: true,
    speed: 1200,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: true,
    variableWidth: false,
    // adaptiveHeight: true,
    arrows: true,
  };

  const [sliderData, setSliderData] = useState([]);
  const [ApiUrl, setApiUrl] = useState(
    "https://653d48faf52310ee6a9a12ff.mockapi.io/image01"
  );

  useEffect(() => {
    const fetchFun = async () => {
      try {
        const data = await axios.get(ApiUrl);
        setSliderData(data.data);
      } catch (error) {
        console.log("Error: 404;", error);
      }
    };

    fetchFun();
  }, [ApiUrl]);

  console.log(sliderData);

  return (
    <section className="HeaderSlider  w-full">
      <div className="container" style={{ padding: `${pNone}` }}>
        <Slider {...settings}>
          {sliderData.map((data) => (
            <div className="slider__card" key={uuidv4()}>
              <NavLink className="slider__link" to={data.link}>
                <img
                  className="slider__card-img"
                  src={data.image}
                  alt="background image"
                />
              </NavLink>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}

export default HeaderSlider;
