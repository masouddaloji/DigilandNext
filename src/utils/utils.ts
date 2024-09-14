"use client";

import { useEffect, useState } from "react";
import { OutsideClickHandlerProps } from "@/types/types";
export const ScreenSize = () => {
  const [width, setWidth] = useState<number | null>(window.innerWidth??null);
  const resizeHandler = () => {
    const innerWidth = window.innerWidth;
    setWidth(innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", resizeHandler);
    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, []);

  return width;
};

export const OutsideClickHandler = ({
  ref,
  setStateHandler,
}: OutsideClickHandlerProps) => {
  const outsideClick = (e: MouseEvent) => {
    if (ref?.current === e.target) {
      setStateHandler(false);
    }
  };
  useEffect(() => {
    document.addEventListener("click", outsideClick);
    return () => document.removeEventListener("click", outsideClick);
  }, []);
  return true;
};
