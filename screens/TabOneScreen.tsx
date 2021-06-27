import * as React from "react";
import { ImageBackground, SafeAreaView, StatusBar } from "react-native";
import globalStyles from "../styles/globalStyles";
const field = require("../assets/images/field.jpg");

export default function TabOneScreen() {
  return (
    <SafeAreaView style={globalStyles.droidSafeArea}>
      <StatusBar hidden={false} barStyle={"dark-content"} />
      <ImageBackground
        resizeMode="contain"
        source={field}
        style={{ width: "100%", aspectRatio: 2 / 3 }}
      ></ImageBackground>
    </SafeAreaView>
  );
}
