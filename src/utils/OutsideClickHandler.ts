"use client";

import { OutsideClickHandlerProps } from "@/types/types";
import React, { useEffect } from "react";

export default function OutsideClickHandler({
  ref,
  setStateHandler,
}: OutsideClickHandlerProps) {
  const outsideClick = (e: MouseEvent) => {
    if (ref?.current === e.target) {
      setStateHandler(false);
    }
  };
  useEffect(() => {
    document.addEventListener("click", outsideClick);
    return () => document.removeEventListener("click", outsideClick);
  }, [ref, setStateHandler]);
}
