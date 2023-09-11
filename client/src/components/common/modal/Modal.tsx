import React, {
  CSSProperties,
  PropsWithChildren,
  useEffect,
  useState,
} from "react";
import css from "./Modal.module.scss";
import close from "@public/icons/close.svg";
import useModal from "hooks/modal.hook";
export default function Modal({ children }: PropsWithChildren) {
  const [clientWidth, setClientWidth] = useState(
    document.documentElement.clientWidth
  );
  const [clientHeight, setClientHeight] = useState(
    document.documentElement.clientHeight
  );

  const updateClientSize = () => {
    setClientHeight(document.documentElement.offsetHeight);
    setClientWidth(document.documentElement.offsetWidth);
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

  const { modalHide } = useModal();

  return (
    <div style={style} className={css.modal}>
      <div className={css.header}>
        <img src={close} alt="" onClick={modalHide} />
      </div>
      <div className={css.content}>{children}</div>
    </div>
  );
}
