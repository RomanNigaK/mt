import React, {
  CSSProperties,
  PropsWithChildren,
  useEffect,
  useState,
} from "react";
import css from "./LayoutPage.module.scss";
import { useAppSelector } from "hooks/redux.hook";
import { selectorMessages } from "redux/selectors";

interface ILayoutPage extends PropsWithChildren {
  top?: number;
  marginBottom?: number;
}

export default function LayoutPage({
  children,
  top = 50,
  marginBottom = 10,
}: ILayoutPage) {
  const m = useAppSelector((state) => selectorMessages(state));

  const [clientHeight, setClientHeight] = useState(
    document.documentElement.clientHeight
  );

  const updateClientSize = () => {
    setClientHeight(document.documentElement.clientHeight);
  };

  useEffect(() => {
    addEventListener("resize", () => updateClientSize());
    return removeEventListener("resize", () => updateClientSize());
  }, []);

  useEffect(() => {
    const elemTo = document.querySelector(
      "[id=listMessages]"
    ) as HTMLDivElement;

    if (elemTo?.lastChild) {
      const children = elemTo.childNodes;
      const child = children[29] as HTMLDivElement;
      child.scrollIntoView(false);
    }
  }, [m]);

  const style: CSSProperties = {
    height: clientHeight - top - marginBottom,
  };

  return (
    <div className={css.layoutPage} style={style}>
      {children}
    </div>
  );
}
