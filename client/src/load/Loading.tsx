import React, { CSSProperties, useEffect, useState } from "react";
import "../style/global.scss";
import css from "./Load.module.scss";
import logo from "@public/icons/logo.svg";

export const IdMainLogo = "IdMainLogo";

export default function Load() {
  const [h, setH] = useState<number>(0);
  const [w, setW] = useState<number>(0);

  useEffect(() => {
    const w = document.documentElement.clientWidth;
    const h = document.documentElement.clientHeight;

    const logoElement = document.querySelector(
      `[id=${IdMainLogo}]`
    ) as HTMLDivElement;

    if (logoElement) {
      setH(h / 2 - logoElement.offsetHeight / 2);
      setW(w);
    }
  }, []);

  const style: CSSProperties = {
    top: h ? h + "px" : "none",
    left: w ? w * 0.25 + "px" : "none",
    width: w ? w - w * 0.25 : "none",
  };

  return (
    <div>
      <div style={style} className={css.load} id={IdMainLogo}>
        <div>
          <img src={logo} alt="" />
        </div>

        <div className={css.line}></div>
      </div>
    </div>
  );
}
