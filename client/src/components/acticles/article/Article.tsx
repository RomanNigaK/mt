import React, { useEffect, useState } from "react";
import Parser from "html-react-parser";
import css from "./Article.module.scss";
import arrow from "./media/arrow.svg";

interface IArticle {
  title: string;
  id: number;
}

const f = "<div>111<div>";

export default function Article({ title, id }: IArticle) {
  const [isShow, setIsShow] = useState(false);

  useEffect(() => {
    const elem = document.querySelector(`[id=article${id}]`);
  }, []);

  return (
    <div className={css.article}>
      <div className={css.arrow}>
        <img src={arrow} alt="" />
      </div>
      <div className={css.title}>{title}</div>
      <div id={"article" + id}>{Parser(f)}</div>
    </div>
  );
}
