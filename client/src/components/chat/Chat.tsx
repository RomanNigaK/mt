import React, { useEffect, useState } from "react";
import css from "./Chat.modules.scss";
import HeaderPage from "components/headerPage/HeaderPage";
import chatIco from "@public/icons/chat.svg";
import geoMin from "./media/geoMin.svg";
import attention from "@public/icons/attention.svg";
import { useAppDispatch, useAppSelector } from "hooks/redux.hook";
import {
  selectorCity,
  selectorMessages,
  selectorPage,
  selectorUser,
} from "redux/selectors";
import { NavLink } from "react-router-dom";
import send from "@public/icons/send.svg";
import useHttp from "hooks/http.hook";
import { addMessage, setPage } from "redux/slice/app.slice";
import ListMessage from "./listMessages/ListMessage";

import LayoutPage from "components/common/layuotPage/LayoutPage";
import Preloader from "components/common/loading/Preloader";

export default function Chat() {
  const city = useAppSelector((state) => selectorCity(state));
  const page = useAppSelector((state) => selectorPage(state));
  const messages = useAppSelector((state) => selectorMessages(state));
  const user = useAppSelector((state) => selectorUser(state));
  const dispatch = useAppDispatch();

  const { request, loading } = useHttp();

  async function loadMessagesChat() {
    try {
      const body: any = JSON.stringify({ page, city });

      const data = await request("/api/message", "POST", body, {
        "Content-Type": "application/json;charset=utf-8",
      });

      dispatch(addMessage(data));
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    loadMessagesChat();
  }, [page]);

  const updatePage = () => {
    dispatch(setPage(page + 1));
  };

  return (
    <div className={css.chat}>
      <HeaderPage title="Чат" icon={chatIco} />

      <div className={css.content}>
        <div className={css.city}>
          <div className={css.marker}>
            <img src={geoMin} alt="" />
          </div>
          <NavLink to="cities">
            <div className={css.nameCity}>{city}</div>
          </NavLink>
        </div>
        {loading && <Preloader />}
        <LayoutPage top={100} marginBottom={100}>
          {(!loading || messages.length > 0) && (
            <ListMessage updatePage={updatePage} showPhone={!!user} />
          )}
        </LayoutPage>
        {!user && !loading && (
          <div className={css.advertisement}>
            <img src={attention} alt="" />
            <div> Номера телефонов видны авторизованным пользователям</div>
          </div>
        )}

        {user && <SendMessage />}
      </div>
    </div>
  );
}

function SendMessage() {
  return (
    <div className={css.sendMessage}>
      <textarea name="" id="" placeholder="Сообщение"></textarea>
      <img src={send} alt="" />
    </div>
  );
}
