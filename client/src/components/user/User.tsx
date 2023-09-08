import React from "react";
import css from "./User.modules.scss";
import HeaderPage from "components/headerPage/HeaderPage";
import userIco from "@public/icons/user.svg";
import bag from "@public/icons/bag.svg";
import appIco from "@public/icons/app.svg";
import { NavLink } from "react-router-dom";
import LayoutPage from "components/common/layuotPage/LayoutPage";
import Input from "components/common/input/Input";
import Btn from "components/common/btn/Btn";
import enter from "@public/icons/enter.svg";
import EnterAccount from "./enterAccount/EnterAccount";
import { useAppSelector } from "hooks/redux.hook";
import { selectorUser } from "redux/selectors";
import { User } from "redux/slice/user.slice";
import Profile from "./profile/Profile";
export default function User() {
  const user = useAppSelector((state) => selectorUser(state));

  const title = user?.id ? "ID: " + user.id : "Вход";

  return (
    <div className={css.user}>
      <HeaderPage title={title} icon={userIco} />
      <LayoutPage top={50}>
        <div className={css.content}>
          {user && <Profile {...user} />}

          {!user && (
            <>
              <EnterAccount />
              <div>
                <img src={bag} alt="" style={{ width: 70 }} />
                <h3>В настоящее время использование Web-версией ограничено</h3>
                <h3>Регистрация возможна только через приложение</h3>
                <h4>Для скачивания перейдите по ссылке ниже</h4>

                <NavLink to="/download">
                  <img src={appIco} alt="" />
                </NavLink>
              </div>
            </>
          )}
        </div>
      </LayoutPage>
    </div>
  );
}
