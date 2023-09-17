import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { CIcon, IconType } from "./components";
import { FontConst } from "./assets";

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
