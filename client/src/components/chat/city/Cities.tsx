import React from "react";
import css from "./Cities.module.scss";
import HeaderPage from "components/headerPage/HeaderPage";
import geo from "@public/icons/geo.svg";
import { useAppDispatch } from "hooks/redux.hook";
import { setCity } from "redux/slice/app.slice";
import { useNavigate } from "react-router-dom";
export default function Cities() {
  const cities = ["Москва", "Сочи", "Краснодар"];
  const dispatch = useAppDispatch();
  const nav = useNavigate();

  const handleCity = (city: string) => {
    dispatch(setCity(city));
    nav("/chat");
  };

  return (
    <div className={css.cities}>
      <HeaderPage title="Город" icon={geo} />
      <div className={css.content}>
        {cities.map((e, i) => {
          return (
            <div
              className={css.item}
              key={i + "city"}
              onClick={() => handleCity(e)}
            >
              {e}
            </div>
          );
        })}
      </div>
    </div>
  );
}
