import React from "react";
import { StyleSheet, Text } from "react-native";
import { FontConst, LoginSvg, LottieConst, } from "./assets";
import { Container, Lottie } from "./components";
import ShakeText from "./components/ShakerText";
import RNBounceable from "./components/RNBounceable";

const App = () => {
  return (
    <Container >

      <ShakeText>
        Hellooooooooo
      </ShakeText>

    </Container>
  );
};

export default App;

const styles = StyleSheet.create({});
