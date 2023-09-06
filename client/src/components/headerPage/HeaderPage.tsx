import React, { useState } from "react";
import css from "./HeaderPage.module.scss";
import backIco from "@public/icons/back.svg";
import { NavLink, useNavigate } from "react-router-dom";
import home from "@public/icons/logo.svg";
interface IHeaderPage {
  icon: string;
  title: string;
}

export default function HeaderPage({ icon, title }: IHeaderPage) {
  const nav = useNavigate();

  const back = () => nav(-1);

  return (
    <div className={css.headerPage}>
      <div className={css.back}>
        <img src={backIco} alt="" onClick={back} />
      </div>
      <div className={css.title}>
        <img src={icon} alt="" />
        <div>{title}</div>
      </div>
      <div className={css.option}>
        <NavLink to="/">
          <img src={home} alt="" />
        </NavLink>
      </div>
    </div>
  );
}
