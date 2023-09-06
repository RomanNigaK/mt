import React from "react";
import css from "./Download.module.scss";
import android from "./media/android.png";
import masteram from "./media/masteramFull.png";
import download from "@public/icons/app.svg";
import HeaderPage from "components/headerPage/HeaderPage";
import slide1 from "./media/slide1.jpg";
import slide2 from "./media/slide2.jpg";
import LayoutPage from "components/common/layuotPage/LayoutPage";

export default function Download() {
  return (
    <div className={css.download}>
      <HeaderPage icon={download} title="Скачать" />
      <LayoutPage>
        <div className={css.content}>
          <div className={css.android}>
            <div className={css.logo}>
              <img src={android} alt="" />
            </div>
            <div className={css.name}>
              <img src={masteram} alt="" />
            </div>
            <a href="">скачать приложение(*apk)</a>
          </div>
          <div className={css.slides}>
            <h3>Чат</h3>
            <img src={slide1} alt="" />
            <h3>Товары</h3>
            <img src={slide2} alt="" />
          </div>
        </div>
      </LayoutPage>
    </div>
  );
}
