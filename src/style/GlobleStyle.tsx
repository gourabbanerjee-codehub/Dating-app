import {
  StyleSheet,
  PixelRatio,
  Appearance,
  Dimensions,
  Platform,
  useWindowDimensions,
} from "react-native";
import { useEffect, useState } from "react";
import { PRIMARY_COLOR } from "../config/Config";

const fontScale = PixelRatio.getFontScale();
const getFontScale = (size: number) => size / fontScale;
const { width, height } = Dimensions.get("window");
// const loadFonts = async () => {
//   await Font.loadAsync({
//     "SF-Pro": require("../assets/fonts/SF-Pro.ttf"), // Adjust the path and font file name as necessary
//   });
// };

export const globalStyleSheet = StyleSheet.create({
  imageModelStyle: {
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
  imageModelTopStyle: {
    width: width,
    height: 450,
    resizeMode: "stretch",
    position: "relative",
    top:-30
  },
  imageGoogleIcon: {
    width: 35,
    height: 35,
    resizeMode: "contain",
  },
  btnText: {
    fontSize: getFontScale(16),
    textAlign: "center",
    color: "#BABABA",
    fontWeight: "400",
  },
  txtSearch: {
    fontSize: getFontScale(16),
    textAlign: "center",
    color: "#BABABA",
    fontWeight: "400",
  },
  round: {
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    width: 260,
    borderRadius: 15,
    marginLeft: 24,
    marginTop: 20,
    marginRight: 10,
    marginBottom: 20,
  },
  roundNoWidth: {
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    borderRadius: 15,
    marginLeft: 10,
    marginTop: 20,
    marginRight: 24,
    marginBottom: 20,
    paddingLeft: 15,
    paddingRight: 15,
  },
  roundFullWidth: {
    justifyContent: "center",
    alignItems: "center",
    height: 60,
    borderRadius: 15,
    marginLeft: 24,
    marginTop: 20,
    marginRight: 24,
    marginBottom: 20,
    paddingLeft: 15,
    paddingRight: 15,
  },
  black: {
    backgroundColor: "#313131",
    zIndex: 2,
  },
  gray: {
    backgroundColor: "#EAECF0",
    zIndex: 2,
  },
  next: {
    backgroundColor: "#B1B1FF",
    zIndex: 2,
  },
  roundBg: {
    width: "100%",
    flexDirection: "column",
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 15,
    backgroundColor: "#F9F9F9",
  },
  white: {
    backgroundColor: "white",
    zIndex: 2,
  },
});
