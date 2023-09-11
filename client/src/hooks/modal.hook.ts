import { useCallback, useState } from "react";
import { setErrorApp, setModal } from "redux/slice/app.slice";
import { useAppDispatch } from "./redux.hook";

export default function useModal() {
  const dispatch = useAppDispatch();

  const modalShow = () => {
    dispatch(setModal(true));
  };

  const modalHide = () => {
    dispatch(setModal(false));
  };

  return { modalShow, modalHide };
}
