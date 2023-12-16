/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { OutlineArrowSmallRight7 } from "@/public/icons/OutlineArrowSmallRight7";

interface Props {
  className: any;
}

export const Component = ({ className }: Props): JSX.Element => {
  return (
    <div className={`w-[228px] h-[100px] ${className}`}>
      <div className="relative h-[100px]">
        <OutlineArrowSmallRight7 className="!absolute !w-[100px] !h-[100px] !top-0 !left-[128px]" />
        <img
          className="absolute w-[158px] h-[3px] top-[48px] left-0"
          alt="Vector"
          src="https://c.animaapp.com/ToChNZZY/img/vector-11-4.svg"
        />
      </div>
    </div>
  );
};
