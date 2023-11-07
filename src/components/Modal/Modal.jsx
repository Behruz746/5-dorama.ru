import { NavLink } from "react-router-dom";
import { useContext } from "react";
import AppContext from "../../AppContext";
import "./styles.scss";

function Modal() {
  const { setModalSec, modalSec } = useContext(AppContext);

  const linkHandel = () => {
    setModalSec(false);
  };

  const SvgX = () => (
    <svg
      className="modal__icon"
      fill="#000000"
      height="800px"
      width="800px"
      version="1.1"
      id="Capa_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 460.775 460.775"
      xmlSpace="preserve"
    >
      <path
        d="M285.08,230.397L456.218,59.27c6.076-6.077,6.076-15.911,0-21.986L423.511,4.565c-2.913-2.911-6.866-4.55-10.992-4.55
        c-4.127,0-8.08,1.639-10.993,4.55l-171.138,171.14L59.25,4.565c-2.913-2.911-6.866-4.55-10.993-4.55
        c-4.126,0-8.08,1.639-10.992,4.55L4.558,37.284c-6.077,6.075-6.077,15.909,0,21.986l171.138,171.128L4.575,401.505
        c-6.074,6.077-6.074,15.911,0,21.986l32.709,32.719c2.911,2.911,6.865,4.55,10.992,4.55c4.127,0,8.08-1.639,10.994-4.55
        l171.117-171.12l171.118,171.12c2.913,2.911,6.866,4.55,10.993,4.55c4.128,0,8.081-1.639,10.992-4.55l32.709-32.719
        c6.074-6.075,6.074-15.909,0-21.986L285.08,230.397z"
      />
    </svg>
  );

  return (
    <div className={modalSec ? "Modal" : "Modal--over"}>
      <audio id="addSound" src="./audio/notifications-sound-127856.mp3"></audio>
      <audio
        id="addSound01"
        src="./audio/notifications-sound-127856-01.mp3"
      ></audio>
      <div
        className={modalSec ? "modal__container--active" : "modal__container"}
      >
        <button
          className="modal__btn"
          type="button"
          onClick={() => linkHandel()}
        >
          <SvgX />
        </button>
        <NavLink
          to="https://www.buymeacoffee.com/5dorama"
          target="_blank"
          onClick={() => linkHandel()}
        >
          <div className="modal__image"></div>
        </NavLink>
      </div>
    </div>
  );
}

export default Modal;
