import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import css from "./ListMessage.module.scss";
import { useAppSelector } from "hooks/redux.hook";
import { selectorMessages } from "redux/selectors";

interface IListMessage {
  updatePage: () => void;
  showPhone?: boolean;
}

export default function ListMessage({
  updatePage,
  showPhone = false,
}: IListMessage) {
  const messages = useAppSelector((state) => selectorMessages(state));

  const loadNewPage = (scrollTop: number) => {
    if (scrollTop === 0) updatePage();
  };

  const reg = /(?:\+|\d)[\d\-\(\) ]{9,}\d/g;

  useEffect(() => {
    console.log("loadlist message");
    const elem = document.querySelector("[id=listMessages]") as HTMLDivElement;
    console.log(elem.scrollHeight);
  }, []);

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

            <div className={css.text}>
              {!showPhone ? e.msg.replace(reg, "+7(xxx)xxx-xx-xx") : e.msg}
            </div>
            <div className={css.data}>{e.data}</div>
          </div>
        );
      })}
    </div>
  );
}
