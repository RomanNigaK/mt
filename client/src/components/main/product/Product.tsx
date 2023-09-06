import React, { useEffect } from "react";
import css from "./Product.module.scss";
import logo from "@public/icons/product.svg";

import { useCreateIconMain } from "hooks/createIconMain.hook";
import { IIcon } from "components/main/types";
import { NavLink } from "react-router-dom";

export default function Product({ left, top }: IIcon) {
  const { setPositionIcon, Icon } = useCreateIconMain(logo, "product");

  useEffect(() => {
    setPositionIcon({ left, top });
  }, [left, top]);

  console.log("dd");

  return (
    <NavLink to="/products">
      <div className={css.product} id="product">
        <Icon />
      </div>
    </NavLink>
  );
}
