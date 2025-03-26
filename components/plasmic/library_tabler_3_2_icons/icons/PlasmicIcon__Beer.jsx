// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function BeerIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 24 24"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M9 21h6a1 1 0 001-1v-3.625c0-1.397.29-2.775.845-4.025l.31-.7C17.711 10.4 18 9.397 18 8V4a1 1 0 00-1-1H7a1 1 0 00-1 1v4c0 1.397.29 2.4.845 3.65l.31.7A9.93 9.93 0 018 16.375V20a1 1 0 001 1zM6 8h12"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default BeerIcon;
/* prettier-ignore-end */
