import React from "react";
import css from "./Btn.module.scss";
import load from "./media/preloader.gif";
interface IBtn {
  icon: string;
  idSubmit: string;
  loading: boolean;
}
export default function Btn({ icon, idSubmit, loading }: IBtn) {
  return (
    <label htmlFor={idSubmit}>
      <div className={css.btn}>
        Войти
        <img src={!loading ? icon : load} alt="" />
      </div>
    </label>
  );
}
