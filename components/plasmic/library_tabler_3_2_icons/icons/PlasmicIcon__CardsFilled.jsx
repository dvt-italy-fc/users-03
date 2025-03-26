// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function CardsFilledIcon(props) {
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
          "M10.348 3.169l-7.15 3.113a2 2 0 00-1.03 2.608l4.92 11.895a1.96 1.96 0 002.59 1.063l7.142-3.11a2.002 2.002 0 001.036-2.611l-4.92-11.894a1.958 1.958 0 00-2.588-1.064zM16 3a2 2 0 011.995 1.85L18 5v3.5a1 1 0 01-1.993.117L16 8.5V5h-1a1 1 0 01-.117-1.993L15 3h1zm3.08 2.61a1 1 0 011.31-.53c.257.108.505.21.769.314a2 2 0 011.114 2.479l-.056.146-2.298 5.374a1 1 0 01-1.878-.676l.04-.11 2.296-5.371-.366-.148-.402-.167a1 1 0 01-.53-1.312l.001.001z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default CardsFilledIcon;
/* prettier-ignore-end */
