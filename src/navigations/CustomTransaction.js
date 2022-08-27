import React from "react";
import { Animated, Dimensions, Easing, Platform } from "react-native";
const { height, width } = Dimensions.get("screen");

export const VerticalSlide = ({ current, next, inverted, layouts: { screen } }) => {
  const progress = Animated.add(
    current.progress.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 1],
      extrapolate: "clamp",
    }),
    next
      ? next.progress.interpolate({
          inputRange: [0, 1],
          outputRange: [0, 1],
          extrapolate: "clamp",
        })
      : 0,
  );

  return {
    cardStyle: {
      transform: [
        {
          translateY: Animated.multiply(
            progress.interpolate({
              inputRange: [0, 1, 3],
              outputRange: [height, 0, -height * 2],
              extrapolate: "clamp",
            }),
            inverted,
          ),
        },
      ],
      backgroundColor: "#fff",
    },
  };
};

export const HorizontalSlide = ({ current, next, inverted, layouts: { screen } }) => {
  const progress = Animated.add(
    current.progress.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 1],
      extrapolate: "clamp",
    }),
    next
      ? next.progress.interpolate({
          inputRange: [0, 1],
          outputRange: [0, 1],
          extrapolate: "clamp",
        })
      : 0,
  );

  return {
    cardStyle: {
      transform: [
        {
          translateX: Animated.multiply(
            progress.interpolate({
              inputRange: [0, 1, 2],
              outputRange: [width, 0, -width],
              extrapolate: "clamp",
            }),
            inverted,
          ),
        },
      ],
      backgroundColor: "#fff",
    },
  };
};
