import React from "react";
import css from "./Products.module.scss";
import HeaderPage from "components/headerPage/HeaderPage";
import productIco from "@public/icons/product.svg";
import LayoutScreen from "components/common/layoutScreen/LayoutScreen";
export default function Products() {
  return (
    <div className={css.products}>
      <HeaderPage title="Стройматериаллы" icon={productIco} />
    </div>
  );
}
