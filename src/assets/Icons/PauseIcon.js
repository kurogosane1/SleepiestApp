import React from "react";
import Svg, { Path } from "react-native-svg";
function PauseIcon(props) {
  return (
    <Svg
      height={props.height}
      viewBox="0 0 511.448 511.448"
      width={props.width}
      fill={"#F7D06E"}
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path d="M436.508 74.94c-99.913-99.913-261.64-99.927-361.567 0-99.913 99.913-99.928 261.64 0 361.567 99.913 99.913 261.64 99.928 361.567 0 99.912-99.912 99.927-261.639 0-361.567zM234.057 330.39c0 11.598-9.402 21-21 21s-21-9.402-21-21V181.057c0-11.598 9.402-21 21-21s21 9.402 21 21zm85.333 0c0 11.598-9.402 21-21 21s-21-9.402-21-21V181.057c0-11.598 9.402-21 21-21s21 9.402 21 21z" />
    </Svg>
  );
}

export default PauseIcon;
