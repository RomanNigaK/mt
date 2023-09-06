import React, { CSSProperties, useCallback, useEffect, useState } from "react";
import ReactDOM from "react-dom";

export const useCreateIconMain = (logo: string, uuid: string) => {
  function Icon() {
    return React.createElement(
      "img",
      {
        src: logo,
        id: uuid + "_img",
      },
      null
    );
  }

  const setPositionIcon = useCallback(
    (position: { left: number; top: number }) => {
      const div = document.querySelector(`[id=${uuid}]`) as HTMLDivElement;

      const { left, top } = position;

      div.style.left = left + "px";
      div.style.top = top + "px";
    },
    []
  );

  return { setPositionIcon, Icon };
};
