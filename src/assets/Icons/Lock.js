import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgComponent(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={20}
      height={20}
      stroke="white"
      fill="orange"
      viewBox="0 0 24 24"
      {...props}>
      <Path d="M12 8a7.96 7.96 0 00-3 .587V5c0-1.654 1.346-3 3-3s3 1.346 3 3v1h2V5A5 5 0 107 5v4.761A7.98 7.98 0 004 16a8 8 0 108-8zm0 10a2 2 0 11.001-4.001A2 2 0 0112 18z" />
    </Svg>
  );
}

export default SvgComponent;
