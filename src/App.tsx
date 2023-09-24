import { AnimatedText, AnimatedView, CFastImage, CIcon, CInput, CScrollView, CText, Container, IconType, KeyboardAvoidView, Row, Spacer, SubmitButton } from "@app/components";
import React from "react";
import { StyleSheet } from "react-native";
import { ImageConst } from "./assets";
import FastImage from "react-native-fast-image";


const App = () => {
  return (
    <Container style={{
      paddingHorizontal: 10,
      justifyContent: "center",
    }}  >
      <KeyboardAvoidView>
        <CScrollView>
          <CFastImage
            source={ImageConst.PERSON}
            size={150}
            resizeMode={FastImage.resizeMode.cover}
          />
          <CFastImage
            source={ImageConst.PERSON}
            size={150}
            resizeMode={FastImage.resizeMode.cover}
          />
          <CFastImage
            source={ImageConst.PERSON}
            size={150}
            resizeMode={FastImage.resizeMode.cover}
          />
          <CFastImage
            source={ImageConst.PERSON}
            size={150}
            resizeMode={FastImage.resizeMode.cover}
          />
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

          <CInput
            value=""
            onChangeText={(val) => {
              console.log("Changed==", val)
            }}
            lable={'Name'}
            error={"Error text"}
            placeholder="Enter your name"
          />

          <SubmitButton label="Submit" onPress={() => console.log("Submit clicked")} />
        </CScrollView>
      </KeyboardAvoidView>
    </Container>
  );
};

export default App;

const styles = StyleSheet.create({});
