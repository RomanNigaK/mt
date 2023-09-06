import React, { useEffect } from "react";
import css from "./Chat.module.scss";
import logo from "@public/icons/chat.svg";

import { useCreateIconMain } from "hooks/createIconMain.hook";
import { IIcon } from "components/main/types";
import { NavLink } from "react-router-dom";

export default function Chat({ left, top }: IIcon) {
  const { setPositionIcon, Icon } = useCreateIconMain(logo, "chatApp");

  useEffect(() => {
    setPositionIcon({ left, top });
  }, [left, top]);

  return (
    <NavLink to="/chat">
      <div className={css.chat} id="chatApp">
        <Icon />
      </div>
    </NavLink>
  );
}
