import {
  AnimatedText, AnimatedView,
  CFastImage, CIcon, CInput, CScrollView, CText, Container, IconType, KeyboardAvoidView, Row, Spacer, SubmitButton
} from "@app/components";
import React from "react";
import { StyleSheet } from "react-native";
import { ImageConst } from "./assets";
import FastImage from "react-native-fast-image";
import AnimatedInput from "./components/ui/AnimatedInput";


const App = () => {
  return (
    <Container style={{
      paddingHorizontal: 10,
      justifyContent: "center",
    }} >
      <KeyboardAvoidView>
        <CScrollView>
          <CFastImage
            source={ImageConst.PERSON}
            size={150}
            resizeMode={FastImage.resizeMode.cover}
          />

          <AnimatedView
            animation="fadeInLeft"
            easing={'ease-in'}
            direction="normal"
          >
            <CText>Hello Mr. AnimatedView</CText>
          </AnimatedView>

          <Row justifyContent="flex-start">
            <CIcon type={IconType.AntDesign} name="notification" size={20} color="green" ></CIcon>
            <Spacer width={20} />
            <AnimatedText
              animation="fadeInLeft"
              easing={'ease-in'}
              direction="normal"
            >
              Hello Mr. AnimatedText
            </AnimatedText>
          </Row>
          <CFastImage
            // loading
            isAvatar
            size={150}
            resizeMode="cover"
            source={{ uri: 'data:image/jpeg;base64,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' }} />


          <CInput
            value=""
            onChangeText={(val) => {
              console.log("Changed==", val)
            }}
            lable={'Name'}
            error={"Error text"}
            placeholder="Enter your name"
            multiline
          />
          <AnimatedInput placeholder={'Hello Mr india'} value="" />

          <SubmitButton label="Submit" onPress={() => console.log("Submit clicked")} />

        </CScrollView>
      </KeyboardAvoidView>
    </Container>
  );
};

export default App;

const styles = StyleSheet.create({});
