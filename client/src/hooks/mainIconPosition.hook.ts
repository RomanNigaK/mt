import { useCallback, useState } from "react";

export const useMainIconPosition = (idMainLogo: string) => {
  const logoElement = document.querySelector(
    `[id=${idMainLogo}]`
  ) as HTMLDivElement;

  let he;

  logoElement ? (he = logoElement.offsetHeight) : (he = 50);

  const [h, setH] = useState(
    document.documentElement.clientHeight / 2 - he / 2
  );
  const [w, setW] = useState(document.documentElement.clientWidth * 0.25);

  const [styleDiv, setStyleDiv] = useState({
    top: h,
    left: w,
    width: w - w * 0.25,
  });

  const newPosition = useCallback(() => {
    let he;

    logoElement ? (he = logoElement.offsetHeight) : (he = 50);
    let h = document.documentElement.clientHeight / 2 - he / 2;
    let w = document.documentElement.clientWidth * 0.25;

    setStyleDiv({ top: h, left: w, width: w * 4 });
    setH(h);
    setW(w);
  }, []);

  return { h, w, newPosition, styleDiv };
};
