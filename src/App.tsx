import React from "react";
import { SafeAreaView, StyleSheet, Text } from "react-native";
import { FontConst } from "./assets";
import { CIcon, IconType } from "./components";
import { useAppState } from "./hooks";

const App = () => {
  const a = useAppState()
  console.log("App==>", a)

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
