import React, { useEffect } from "react";
import Chat from "./chat/Chat";
import { useMainIconPosition } from "hooks/mainIconPosition.hook";
import App from "./app/App";
import User from "./user/User";
import css from "./Main.module.scss";
import logo from "@public/icons/logo.svg";
import masteram from "@public/image/masteram.png";

import Product from "./product/Product";
import Article from "./article/Article";

import { IdMainLogo } from "load/Loading";

export default function Main() {
  const id = IdMainLogo;
  const { h, w, newPosition, styleDiv } = useMainIconPosition(id);

  useEffect(() => {
    addEventListener("resize", () => {
      newPosition();
    });
    return () =>
      removeEventListener("resize", () => {
        newPosition();
      });
  }, []);
  return (
    <>
      <App left={w} top={h} />
      <Chat left={w} top={h} />
      <User left={w} top={h} />
      <Product left={w} top={h} />
      <Article left={w} top={h} />
      <div className={css.load} id={id} style={styleDiv}>
        <div>
          <img src={logo} alt="" />
          <div>
            <img src={masteram} alt="" />
          </div>
        </div>

        <div className={css.line}></div>
      </div>
    </>
  );
}
