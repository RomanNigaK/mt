import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import css from "./Layout.module.scss";
import up from "./media/up.svg";
export default function Layout() {
  const [height, setHeight] = useState(
    document.querySelector("body")!.clientHeight
  );
  const [width, setWidth] = useState(
    document.querySelector("body")!.offsetWidth
  );
  const [isShow, setIsShow] = useState(false);
  useEffect(() => {
    addEventListener("scroll", () => {
      setHeight(height + document.documentElement.scrollTop);
      setIsShow(document.documentElement.scrollTop ? true : false);
    });
  }, []);

  const handleUp = () => (document.documentElement.scrollTop = 0);

  return (
    <div className={css.app}>
      <Outlet />
      {isShow && (
        <div
          className={css.up}
          style={{ top: height - 70 + "px", left: width - 70 + "px" }}
          onClick={handleUp}
        >
          <img src={up} alt="" />
        </div>
      )}
    </div>
  );
}
