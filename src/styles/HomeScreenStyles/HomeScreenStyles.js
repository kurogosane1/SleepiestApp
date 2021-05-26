import styles from "styled-components/native";
import { View, Animated, Text, Image } from "react-native";

export const HeaderImage = styles(Animated.Image).attrs()`
position:absolute;
top:-20;
left:0;
width:100%;
height:${(props) => props.maxheight};
border-radius:24;
overflow:hidden;
z-Index:9999;
transform:${(props) => `scale(props.headerScale)`};
`;

export const HeaderImageContainer = styles.View`
z-Index:999;
shadow-Color:#000;
shadow-offset:{
    width:0,
    height:15,
};
shadow-Opacity:0.9;
shadow-radius:25.0;
elevation:24;
`;
