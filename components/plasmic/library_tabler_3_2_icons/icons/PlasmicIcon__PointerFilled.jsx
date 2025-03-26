// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function PointerFilledIcon(props) {
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
          "M3.039 4.277L6.943 17.84c.185.837.92 1.516 1.831 1.642l.17.016a2.2 2.2 0 001.982-1.006l.045-.078 1.4-2.072 4.05 4.05a2.068 2.068 0 002.924 0l1.047-1.047c.388-.388.606-.913.606-1.461l-.008-.182a2.067 2.067 0 00-.598-1.28l-4.047-4.048 2.103-1.412c.726-.385 1.18-1.278 1.053-2.189A2.2 2.2 0 0017.8 6.928L4.276 3.038a1 1 0 00-1.236 1.24l-.001-.001z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default PointerFilledIcon;
/* prettier-ignore-end */
