import { KeyboardTypeOptions, Pressable, StyleSheet, Text, TextInput, TextInputProps, TextStyle, View, ViewStyle } from "react-native";
import React, { ReactNode } from "react";
import { AnimatedText } from "./AnimatedComponent";
import { CustomStyle } from "@app/Types";

type Mode = 'outlined' | 'underline'
const Height = 40

type TextIconProps = {
    onPress?: (() => void) | undefined;
    iconComponent?: ReactNode | ReactNode[] | undefined
}

interface CInputProps extends TextInputProps {
    lable: string | React.ReactNode
    error: string | React.ReactNode
    containerStyle?: CustomStyle
    lableStyle?: CustomStyle
    errorStyle?: CustomStyle
    inputContainerStyle?: CustomStyle
    icontContainerStyle?: CustomStyle
    multiline?: boolean
    value: string,
    onChangeText?: ((text: string) => void) | undefined;
    onLeftIconPress?: (() => void) | undefined;
    onRightIconPress?: (() => void) | undefined;
    mode?: Mode,
    rightIcon?: ReactNode | ReactNode[] | undefined
    leftIcon?: ReactNode | ReactNode[] | undefined

}

const CInput = ({
    mode,
    containerStyle,
    inputContainerStyle,
    icontContainerStyle,
    lableStyle,
    errorStyle,
    lable,
    error,
    multiline,
    value,
    leftIcon,
    rightIcon,
    onLeftIconPress,
    onRightIconPress,
    onChangeText,
    ...rest

}: CInputProps) => {
    const isUnderLine = mode === 'underline'

    const renderLabel = () => {
        return (
            <Text
                style={StyleSheet.flatten([styles.labelStyle, lableStyle])}
            >
                {lable}
            </Text>
        )
    }

    const renderError = () => {
        return (
            <AnimatedText
                animation="slideInLeft"
                easing={'ease-in'}
                direction="normal"
                style={StyleSheet.flatten([styles.errorStyle, errorStyle])}

            >
                {error}
            </AnimatedText>
        )
    }

    const TextInputIcon = ({
        onPress,
        iconComponent
    }: TextIconProps) => {
        return (
            <Pressable
                style={StyleSheet.flatten([
                    styles.iconContainer, icontContainerStyle
                ])}
                onPress={onPress}>
                {iconComponent}
            </Pressable>
        )
    }

    const renderInput = () => {
        return <View style={StyleSheet.flatten([
            styles.inputContainer, {
                borderWidth: isUnderLine ? 0 : 1,
                borderBottomWidth: 1
            },
            multiline && { height: 100 },
            inputContainerStyle
        ])}>
            {leftIcon ? <TextInputIcon iconComponent={leftIcon} onPress={onLeftIconPress} /> : null}
            <TextInput
                autoCapitalize="none"
                style={[
                    { flex: 1, paddingHorizontal: 10, },
                    multiline && { height: 100, textAlignVertical: 'top' },
                ]}
                multiline={multiline}
                numberOfLines={multiline ? 5 : 1}
                value={value}
                onChangeText={onChangeText}
                {...rest}
            />
            {rightIcon ? <TextInputIcon iconComponent={rightIcon} onPress={onRightIconPress} /> : null}
        </View>
    }

    return (
        <View
            style={[styles.container, containerStyle]}
        >
            {lable ? renderLabel() : null}
            {renderInput()}
            {error ? renderError() : null}
        </View>
    );
};

export default CInput;

CInput.defaultProps = {
    mode: "outlined",
};

const styles = StyleSheet.create({
    container: {
        margin: 5
    },
    inputContainer: {
        margin: 0,
        padding: 0,
        height: Height,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: 'space-between'
    },
    errorStyle: {
        color: "red",
        marginTop: 3
    },
    labelStyle: {
        color: "grey",
        marginBottom: 2
    },
    iconContainer: {
        backgroundColor: "#00000030",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
        width: Height
    }
});


/* 

        <CInput
          lable='FullName'
          error='Name is required'
          placeholder="Enter your name"
          value=""
          onChangeText={(text) => console.log(text)}
          rightIcon={<CIcon type={IconType.AntDesign} name="notification" size={20} color="green" ></CIcon>}
          leftIcon={<CIcon type={IconType.AntDesign} name="notification" size={20} color="green" ></CIcon>}

        />

*/