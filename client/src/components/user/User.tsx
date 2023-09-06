import React from "react";
import css from "./User.modules.scss";
import HeaderPage from "components/headerPage/HeaderPage";
import userIco from "@public/icons/user.svg";
import userMaxIco from "./media/logoUserMax.svg";
import appIco from "@public/icons/app.svg";
import { NavLink } from "react-router-dom";
import LayoutPage from "components/common/layuotPage/LayoutPage";
export default function User() {
  return (
    <div className={css.user}>
      <HeaderPage title="Регистрация" icon={userIco} />
      <LayoutPage top={50}>
        <div className={css.content}>
          <div>
            <img src={userMaxIco} alt="" />
            <h3>В настоящее время использование Web-версией ограничено</h3>
            <h3>Для регистрации в приложение неоходимо скачать и установить</h3>
            <NavLink to="/download">
              <img src={appIco} alt="" />
            </NavLink>
          </div>
        </div>
      </LayoutPage>
    </div>
  );
}
