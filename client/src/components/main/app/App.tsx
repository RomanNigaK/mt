import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import css from "./App.module.scss";
import logo from "@public/icons/app.svg";

import { useCreateIconMain } from "hooks/createIconMain.hook";
import { IIcon } from "components/main/types";

export default function App({ left, top }: IIcon) {
  const { setPositionIcon, Icon } = useCreateIconMain(logo, "downloadApp");

  useEffect(() => {
    setPositionIcon({ left, top });
  }, [left, top]);

  return (
    <NavLink to="/download">
      <div className={css.app} id="downloadApp">
        <Icon />
      </div>
    </NavLink>
  );
}
