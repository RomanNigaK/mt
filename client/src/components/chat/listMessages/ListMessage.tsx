import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import css from "./ListMessage.module.scss";
import { useAppSelector } from "hooks/redux.hook";
import { selectorMessages } from "redux/selectors";

interface IListMessage {
  updatePage: () => void;
}

export default function ListMessage({ updatePage }: IListMessage) {
  const messages = useAppSelector((state) => selectorMessages(state));

  const loadNewPage = (scrollTop: number) => {
    if (scrollTop === 0) updatePage();
  };

  return (
    <div
      className={css.listMessage}
      id="listMessages"
      onScroll={(event: React.UIEvent<HTMLDivElement>) =>
        loadNewPage(event.currentTarget.scrollTop)
      }
    >
      {messages.map((e) => {
        return (
          <div id={"message" + e.id} className={css.massage}>
            <div>{e.title}</div>
            <div className={css.author}>{e.user}</div>
            <div className={css.imageChat}>
              {e.image && (
                <img src={`http://78.24.223.159:1337${e.image}`} alt={""} />
              )}
            </div>

            <div className={css.text}>{e.msg}</div>
            <div className={css.data}>{e.data}</div>
          </div>
        );
      })}
    </div>
  );
}
