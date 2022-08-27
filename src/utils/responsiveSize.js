import { Dimensions } from "react-native";

export const windowWidth = Dimensions.get("window").width;
export const windowHeight = Dimensions.get("window").height;

export const responsiveWidth = (width) => {
  return (windowWidth * width) / 428;
};

export const responsiveHeight = (height) => {
  return (windowHeight * height) / 926;
};
