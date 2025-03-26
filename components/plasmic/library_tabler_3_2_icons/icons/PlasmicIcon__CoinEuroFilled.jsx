// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function CoinEuroFilledIcon(props) {
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
          "M17 3.34A10 10 0 112 12l.005-.324A10 10 0 0117 3.34zM12 6C9.948 6 8.232 7.449 7.451 9.5H7a1 1 0 00-.117 1.993l.134.007a7.3 7.3 0 000 1H7a1 1 0 000 2h.452C8.232 16.553 9.948 18 12 18c1.141 0 2.217-.457 3.084-1.27a1 1 0 00-1.368-1.46c-.509.478-1.102.73-1.716.73-.922 0-1.776-.578-2.335-1.499L11 14.5a1 1 0 000-2H9.023a5.342 5.342 0 010-1H11a1 1 0 000-2H9.664C10.224 8.579 11.078 8 12 8c.615 0 1.208.252 1.717.73a1 1 0 001.368-1.46C14.218 6.458 13.142 6 12 6z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default CoinEuroFilledIcon;
/* prettier-ignore-end */
