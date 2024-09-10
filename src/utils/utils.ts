"use client";

import React, { useEffect, useState } from "react";
import { OutsideClickHandlerProps } from "@/types/types";
export const setFilterHandler = ({name,value}:{name:string,value:string}) => {
    
    const handler=()=>{
       
    }
    return handler
};
export const ScreenSize = () => {
  const [width, setWidth] = useState<number>(window.innerWidth);
  const resizeHandler = () => {
    setWidth(window.innerWidth);
    console.log("window.innerWidth=>", window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", resizeHandler);
    return () => window.removeEventListener("resize", resizeHandler);
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
  }, [])
  return true
};


