import React from "react";
import css from "./Profile.module.scss";
import { User } from "redux/slice/user.slice";
import pen from "./media/pen.svg";
import nail from "./media/nail.svg";
export default function Profile(user: User) {
  const cities = [
    "Сочи",
    "Краснодар",
    "Москва",
    "Ростов-на-Дону",
    "Санкт-Петербург",
  ];

  return (
    <>
      <div className={css.optionProfile}>
        <div>ПРОФИЛЬ</div>
        <div>СООБЩЕНИЯ</div>
      </div>
      <div className={css.profile}>
        <div className={css.avatar}>
          <div>
            <img src={`http://masteramtut.ru/${user.avatar}`} alt="" />
          </div>
        </div>
        <div className={css.data}>
          <div className={css.field}>
            <div>{user.email}</div>
            <div>
              <img src={pen} alt="" />
            </div>
          </div>
          <div className={css.field}>
            <div>{user.phoneNumber}</div>
            <div>
              <img src={pen} alt="" />
            </div>
          </div>
        </div>
        <div className={css.containerNails}>
          <div className={css.nails}>
            <div>
              <img src={nail} alt="" />
            </div>
            <div>{user.nails}</div>
          </div>
        </div>

        <div className={css.name}>
          <div className={css.input}>
            <div className={css.userName}>{user.name}</div>
            <div>
              <img src={pen} alt="" />
            </div>
          </div>
          <div className={css.input}>
            <div className={css.userName}>{user.surname}</div>
            <div>
              <img src={pen} alt="" />
            </div>
          </div>
        </div>

        <div className={css.header}>
          <span>Город:</span>
          <div className={css.cities}>
            {cities.map((e) => {
              return (
                <div className={e === user.topic && css.currentCity}>{e}</div>
              );
            })}
          </div>
        </div>

        <div className={css.header}>
          <span>Описание:</span>
          <div className={css.description}>{user.description}</div>
        </div>

        <div className={css.header}>
          <span>Портфолио:</span>
          <div className={css.photos}>
            {user.photos.map((e) => {
              return (
                <img src={`http://masteramtut.ru${e.imageThumbUrl}`} alt="" />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
