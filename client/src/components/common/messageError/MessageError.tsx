import React, { CSSProperties, useEffect, useState } from "react";
import css from "./MessageError.module.scss";
import closeIco from "./media/error.svg";
import { useAppDispatch } from "hooks/redux.hook";
import { setErrorApp } from "redux/slice/app.slice";

interface IMessageError {
  message: string;
}

export default function MessageError({ message }: IMessageError) {
  const dispatch = useAppDispatch();
  const [height, setHeight] = useState(document.documentElement!.clientHeight);

  const [width, setWidth] = useState(document.documentElement!.offsetWidth);

  const [style, setStyle] = useState<CSSProperties>({});

  const timerId = setTimeout(() => dispatch(setErrorApp("")), 5000);

  const hideError = () => dispatch(setErrorApp(""));

  useEffect(() => {
    const elem = document.querySelector("[id=messageError]") as HTMLDivElement;
    setStyle({
      width: width - 50,
      left: 25,
      top: height - 50 - elem.getBoundingClientRect().height,
    });
  }, []);

  return (
    <div className={css.messageError} id="messageError" style={style}>
      <div className={css.message}>{message}</div>
      <div className={css.icon}>
        <img src={closeIco} alt="" onClick={hideError} />
      </div>
    </div>
  );
}
