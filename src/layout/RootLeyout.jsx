import { NavLink, Outlet } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import { useContext, useEffect } from "react";

// Components
import Header from "../components/Header/Header";
import Menu from "../components/Menu/Menu";
import Modal from "../components/Modal/Modal";
import AppContext from "../AppContext";
import MenuMobile from "../components/MenuMobile/MenuMobile";

function RootLeyout() {
  const { modalSec } = useContext(AppContext);

  useEffect(() => {
    window.yaContextCb.push(() => {
      Ya.Context.AdvManager.render({
        blockId: "R-A-3835914-6",
        renderTo: "yandex_rtb_R-A-3835914-6",
        type: "feed",
      });
    });

    window.yaContextCb.push(() => {
      Ya.Context.AdvManager.render({
        blockId: "R-A-3835914-1",
        renderTo: "yandex_rtb_R-A-3835914-1",
      });
    });
  }, []);

  const AnimationBlock = () => {
    return (
      <>
        <div className="test--block">
          <p>Наша платформа запущена в тестовом режиме</p>
          <p>Наша платформа запущена в тестовом режиме</p>
          <p>Наша платформа запущена в тестовом режиме</p>
          <p>Наша платформа запущена в тестовом режиме</p>
        </div>
      </>
    );
  };

  return (
    <>
      <Header />
      <main id="main">
        <Modal />
        <Menu />
        <div id="boxShadow00"></div>
        <Outlet />
      </main>
      <AnimationBlock />
      <Analytics />
      <MenuMobile />
      <div className="container" style={{ marginTop: "80px" }}>
        <div id="yandex_rtb_R-A-3835914-1"></div>
      </div>
    </>
  );
}

export default RootLeyout;
