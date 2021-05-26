import React from "react";
import Svg, { Path } from "react-native-svg";

function PlayButtonIcon(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      fill={"#F7D06E"}
      height={props.height}
      width={props.width}
      viewBox="0 0 512 512"
      {...props}>
      <Path d="M256 0C114.617 0 0 114.615 0 256s114.617 256 256 256 256-114.615 256-256S397.383 0 256 0zm88.48 269.57l-128 80a16.008 16.008 0 01-16.238.422A15.994 15.994 0 01192 336V176c0-5.82 3.156-11.172 8.242-13.992a15.957 15.957 0 0116.238.422l128 80c4.676 2.93 7.52 8.055 7.52 13.57s-2.844 10.641-7.52 13.57z" />
    </Svg>
  );
}

export default PlayButtonIcon;
