import React from "react";
import css from "./Articles.module.scss";
import HeaderPage from "components/headerPage/HeaderPage";
import articleIco from "@public/icons/article.svg";
import Article from "./article/Article";
import LayoutPage from "components/common/layuotPage/LayoutPage";
export default function Articles() {
  const articleList = [
    { id: 1, title: "Каждый дом нуждается в отоплении" },
    { id: 2, title: "Как построить удобную и добротную баню" },
    { id: 3, title: "Отделка фасада" },
  ];

  return (
    <div className={css.articles}>
      <HeaderPage title="Статьи" icon={articleIco} />

      <LayoutPage>
        <div className={css.content}>
          {articleList.map((e) => {
            return <Article title={e.title} id={e.id} />;
          })}
        </div>
      </LayoutPage>
    </div>
  );
}
