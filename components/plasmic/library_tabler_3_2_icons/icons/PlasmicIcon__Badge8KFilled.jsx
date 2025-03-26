// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Badge8KFilledIcon(props) {
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
          "M19 4a3 3 0 013 3v10a3 3 0 01-3 3H5a3 3 0 01-3-3V7a3 3 0 013-3h14zm-1.445 4.168a1 1 0 00-1.387.277L15 10.196V9a1 1 0 00-.883-.993L14 8a1 1 0 00-1 1v6a1 1 0 002 0v-1.196l1.168 1.75a1 1 0 001.286.337l.1-.059.094-.07a1 1 0 00.184-1.317L16.202 12l1.63-2.445a1 1 0 00-.277-1.387zM9 8H8a2 2 0 00-2 2v1l.005.15c.022.295.108.573.245.819l.019.031-.02.031A2 2 0 006 13v1a2 2 0 002 2h1a2 2 0 002-2v-1l-.005-.15a2 2 0 00-.245-.819L10.731 12l.02-.031c.158-.287.249-.618.249-.969v-1a2 2 0 00-2-2zm0 5v1H8v-1h1zm0-3v1H8v-1h1z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Badge8KFilledIcon;
/* prettier-ignore-end */
