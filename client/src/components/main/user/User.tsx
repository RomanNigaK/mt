import React, { useEffect } from "react";
import css from "./User.module.scss";
import logo from "@public/icons/user.svg";

import { useCreateIconMain } from "hooks/createIconMain.hook";
import { IIcon } from "components/main/types";
import { NavLink } from "react-router-dom";

export default function User({ left, top }: IIcon) {
  const { setPositionIcon, Icon } = useCreateIconMain(logo, "user");

  useEffect(() => {
    setPositionIcon({ left, top });
  }, [left, top]);

  return (
    <NavLink to="/profile">
      <div className={css.user} id="user">
        <Icon />
      </div>
    </NavLink>
  );
}
