// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function PasswordMobilePhoneIcon(props) {
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
          "M12 17v4m-2-1l4-2m-4 0l4 2m-9-3v4m-2-1l4-2m-4 0l4 2m12-3v4m-2-1l4-2m-4 0l4 2M7 14V6a2 2 0 012-2h6a2 2 0 012 2v8m-6-9h2m-1 12v.01"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default PasswordMobilePhoneIcon;
/* prettier-ignore-end */
