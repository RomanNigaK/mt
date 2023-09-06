import React, { useEffect } from "react";
import css from "./Article.module.scss";
import logo from "@public/icons/article.svg";

import { useCreateIconMain } from "hooks/createIconMain.hook";
import { IIcon } from "components/main/types";
import { NavLink } from "react-router-dom";

export default function Article({ left, top }: IIcon) {
  const { setPositionIcon, Icon } = useCreateIconMain(logo, "article");

  useEffect(() => {
    setPositionIcon({ left, top });
  }, [left, top]);

  return (
    <NavLink to="/articles">
      <div className={css.article} id="article">
        <Icon />
      </div>
    </NavLink>
  );
}
