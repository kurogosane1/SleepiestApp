import React from "react";
import Svg, { LinearGradient, Stop, Path } from "react-native-svg";

function Dialsvg(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      height={props.height}
      width={props.width}
      {...props}>
      <LinearGradient
        id="prefix__a"
        gradientUnits="userSpaceOnUse"
        x1={256}
        y1={514}
        x2={256}
        y2={2}
        gradientTransform="matrix(1 0 0 -1 0 514)">
        <Stop offset={0} stopColor={props.color ? "grey" : "#2af598"} />
        <Stop offset={1} stopColor={props.color ? "#747474" : "#009efd"} />
      </LinearGradient>
      <Path
        d="M433 56V20c0-11.046-8.954-20-20-20h-80c-11.046 0-20 8.954-20 20v36H0v40h313v34c0 11.046 8.954 20 20 20h80c11.046 0 20-8.954 20-20V96h79V56h-79zm-40 54h-40V40h40v70zm-186 90c0-11.046-8.954-20-20-20h-80c-11.046 0-20 8.954-20 20v35.878H0v40h87V310c0 11.046 8.954 20 20 20h80c11.046 0 20-8.954 20-20v-34.122h305v-40H207V200zm-40 90h-40v-70h40v70zm264 92c0-11.046-8.954-20-20-20h-80c-11.046 0-20 8.954-20 20v35H0v40h311v35c0 11.046 8.954 20 20 20h80c11.046 0 20-8.954 20-20v-35h81v-40h-81v-35zm-40 90h-40v-70h40v70z"
        fill="url(#prefix__a)"
      />
    </Svg>
  );
}

export default Dialsvg;
