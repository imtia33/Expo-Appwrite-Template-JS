import React from "react";
import { View, useColorScheme, Dimensions } from "react-native";

const GridBackground = ({
  spacing = 20,
  dotSize = 4,
  dotColorLight = "#d4d4d8",
  dotColorDark = "#2a2a2e",
  opacity = 0.2,
}) => {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === "dark";
  const screenWidth = Dimensions.get("window").width;
  const screenHeight = Dimensions.get("window").height;

  const dots = [];

  for (let x = 0; x <= screenWidth; x += spacing) {
    for (let y = 0; y <= screenHeight; y += spacing) {
      dots.push(
        <View
          key={`dot-${x}-${y}`}
          style={{
            position: "absolute",
            left: x - dotSize / 2,
            top: y - dotSize / 2,
            width: dotSize,
            height: dotSize,
            borderRadius: dotSize / 2,
            backgroundColor: isDark ? dotColorDark : dotColorLight,
            opacity,
          }}
        />
      );
    }
  }

  return <View style={{ position: "absolute", width: "100%", height: "100%" }}>{dots}</View>;
};

export default GridBackground;
