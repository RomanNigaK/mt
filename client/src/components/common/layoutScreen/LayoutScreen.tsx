import React, {
  CSSProperties,
  PropsWithChildren,
  useEffect,
  useState,
} from "react";
import css from "./LayoutScreen.module.scss";

export default function LayoutScreen({ children }: PropsWithChildren) {
  const [clientWidth, setClientWidth] = useState(
    document.documentElement.clientWidth
  );
  const [clientHeight, setClientHeight] = useState(
    document.documentElement.clientHeight
  );

  const updateClientSize = () => {
    setClientHeight(document.querySelector("body")!.offsetHeight);
    setClientWidth(document.querySelector("body")!.offsetWidth);
  };

  useEffect(() => {
    addEventListener("resize", () => updateClientSize());
    return removeEventListener("resize", () => updateClientSize());
  }, []);

  const style: CSSProperties = {
    position: "absolute",
    top: 0,
    left: 0,
    width: clientWidth,
    height: clientHeight,
  };

  console.log(clientWidth);

  return <div style={style}>{children}</div>;
}
