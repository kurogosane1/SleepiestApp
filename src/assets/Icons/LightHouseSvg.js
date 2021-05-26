import React from "react";
import Svg, { Path, G } from "react-native-svg";
function LightHouseSvg(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      {...props}
      height={props.height}
      width={props.width}>
      <Path
        d="M376 439h-20v-20c0-11.05-8.95-20-20-20l-6.27-69.87-6.86-76.56L316 176H196l-5.63 62.82-7.52 83.76L176 399c-11.05 0-20 8.95-20 20v20h-20c-11.05 0-20 8.95-20 20v43h280v-43c0-11.05-8.95-20-20-20z"
        fill={props.color ? "#393939" : "#fd6244"}
      />
      <G fill={props.color ? "#9B9B9B" : "#e3e3e3"}>
        <Path d="M329.73 329.13L336 399H196zM316 136c11.05 0 20 8.95 20 20 0 5.52-2.24 10.52-5.86 14.14S321.52 176 316 176H196c-11.05 0-20-8.95-20-20 0-5.52 2.24-10.52 5.86-14.14S190.48 136 196 136h120zM316 176l6.87 76.57-140.02 70.01 7.52-83.76z" />
      </G>
      <Path
        d="M316 70H196c0-16.57 6.72-31.57 17.57-42.43C224.43 16.72 239.43 10 256 10c33.138 0 60 26.859 60 60z"
        fill={props.color ? "#1D0C09" : "#fd6244"}
      />
      <Path
        d="M196 70v66h120V70H196z"
        fill={props.color ? "#B1B1B1" : "#fed42d"}
      />
      <Path d="M256 429c-5.52 0-10 4.48-10 10s4.48 10 10 10 10-4.48 10-10-4.48-10-10-10z" />
      <Path d="M146 419v10h-10c-16.542 0-30 13.458-30 30v33H76c-5.523 0-10 4.478-10 10s4.477 10 10 10h360c5.523 0 10-4.478 10-10s-4.477-10-10-10h-30v-33c0-16.542-13.458-30-30-30h-10v-10c0-13.305-8.71-24.609-20.724-28.525l-18.517-206.464C337.854 179.751 346 168.957 346 156c0-13.036-8.361-24.152-20-28.28V80h10c5.523 0 10-4.478 10-10s-4.477-10-10-10h-10.713C320.503 26.368 291.593 0 256 0c-35.601 0-64.504 26.372-69.287 60H176c-5.523 0-10 4.478-10 10s4.477 10 10 10h10v47.703c-11.454 4.041-20 15.03-20 28.297 0 12.751 8.001 23.663 19.243 27.998l-18.518 206.477C154.71 394.391 146 405.695 146 419zm59.144-233h68.498l-71.714 35.86 3.216-35.86zm119.919 203h-88.328l84.375-44.084L325.063 389zM199.828 245.272l107.523-53.766 4.948 55.17-117.883 58.942 5.412-60.346zm-7.512 83.755l121.902-60.951 4.958 55.284L193.545 389h-6.608l5.379-59.973zM346 429h-49.58c-5.523 0-10 4.478-10 10s4.477 10 10 10H376c5.514 0 10 4.486 10 10v33H126v-33c0-5.514 4.486-10 10-10h79.58c5.523 0 10-4.478 10-10s-4.477-10-10-10H166v-10c0-5.514 4.486-10 10-10h19.979l.029.002.033-.002h139.927l.021.001.016-.001c5.512.003 9.995 4.488 9.995 10v10zM206 126V80h40v46h-40zm60-46h40v46h-40V80zm-10-60c24.45 0 44.439 17.411 49.002 40h-98.003C211.56 37.412 231.553 20 256 20zm-60 126h120c5.514 0 10 4.486 10 10 0 5.521-4.479 10-10 10H196c-5.514 0-10-4.486-10-10 0-5.521 4.479-10 10-10z" />
      <Path d="M365.813 188.879l68.28 28.28c5.124 2.119 10.959-.327 13.065-5.413 2.113-5.103-.31-10.952-5.412-13.065l-68.28-28.28c-5.103-2.111-10.953.311-13.065 5.413-2.113 5.102.31 10.952 5.412 13.065zM447.159 60.254c-2.113-5.104-7.963-7.524-13.065-5.413l-68.28 28.28c-5.103 2.113-7.525 7.963-5.412 13.065 2.11 5.093 7.95 7.53 13.065 5.413l68.28-28.28c5.102-2.113 7.525-7.963 5.412-13.065zM376 126c-5.523 0-10 4.478-10 10s4.477 10 10 10h40c5.523 0 10-4.478 10-10s-4.477-10-10-10h-40zM151.599 96.187c2.113-5.103-.31-10.952-5.412-13.065l-68.28-28.28c-5.104-2.111-10.952.31-13.065 5.413-2.113 5.103.31 10.952 5.412 13.065l68.28 28.28c5.123 2.119 10.959-.327 13.065-5.413zM64.841 211.746c2.11 5.095 7.952 7.529 13.065 5.413l68.28-28.28c5.103-2.113 7.525-7.963 5.412-13.065s-7.964-7.523-13.065-5.413l-68.28 28.28c-5.102 2.113-7.525 7.963-5.412 13.065zM96 126c-5.523 0-10 4.478-10 10s4.477 10 10 10h40c5.523 0 10-4.478 10-10s-4.477-10-10-10H96z" />
    </Svg>
  );
}

export default LightHouseSvg;
