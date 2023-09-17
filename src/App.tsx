import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { CFastImage, CIcon, IconType } from "./components";
import { FontConst, ImageConst } from "./assets";
import CImage from "./components/CImage";
import FastImage from "react-native-fast-image";

const App = () => {
  return (
    <SafeAreaView>
      <Text style={{
        fontFamily: FontConst.Handlee.regular
      }}>App</Text>
      <CIcon name="profile" type={IconType.AntDesign} size={50} color="red" />

    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({});
