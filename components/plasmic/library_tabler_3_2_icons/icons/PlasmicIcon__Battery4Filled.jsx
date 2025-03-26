// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Battery4FilledIcon(props) {
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
          "M17 6a3 3 0 012.995 2.824L20 9v.086l.052.019a1.5 1.5 0 01.941 1.25L21 10.5v3a1.5 1.5 0 01-.948 1.395l-.052.018V15a3 3 0 01-2.824 2.995L17 18H6a3 3 0 01-2.995-2.824L3 15V9a3 3 0 012.824-2.995L6 6h11zM7 9a1 1 0 00-1 1v4l.007.117A1 1 0 008 14v-4l-.007-.117A1 1 0 007 9zm3 0a1 1 0 00-1 1v4l.007.117A1 1 0 0011 14v-4l-.007-.117A1 1 0 0010 9zm3 0a1 1 0 00-1 1v4l.007.117A1 1 0 0014 14v-4l-.007-.117A1 1 0 0013 9zm3 0a1 1 0 00-1 1v4l.007.117A1 1 0 0017 14v-4l-.007-.117A1 1 0 0016 9z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Battery4FilledIcon;
/* prettier-ignore-end */
