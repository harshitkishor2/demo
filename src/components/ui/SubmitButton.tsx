import { CustomStyle, DimensionValue } from "@app/Types";
import React from "react";
import { Easing } from "react-native";
import { ActivityIndicator, Animated, Pressable, StyleSheet, Text, TextStyle } from "react-native";


type SubmitButtonProps = {
    outlined?: boolean,
    label: string,
    labelStyle?: TextStyle,
    buttonStyle?: CustomStyle,
    onPress: () => void,
    width?: DimensionValue
    height?: DimensionValue
    loading: boolean
    disabled: boolean
    animated: boolean
}
const SubmitButton = ({
    outlined,
    onPress,
    label,
    labelStyle,
    buttonStyle,
    width,
    height,
    loading,
    disabled,
    animated
}: SubmitButtonProps) => {

    // This value is used for inputRange
    // Initial value set to 0, which maps to scale 1 in the following buttonScale
    // that means the initially the button is not scaled.
    const animatedValue = new Animated.Value(0);

    // This will be used for scale transform style in Animated.View
    // 0, 0.5 and 1 are animatedValue over a period of time specificed by duration.
    // 1, 1.25 and 1.5 are the scale value for the component at each inputRange values.
    // 0 mapes to 1, 0.5 maps to 1.25, and 1 maps to 1.5
    const buttonScale = animatedValue.interpolate({
        inputRange: [0, 0.5, 1],
        outputRange: [1, 1.05, 1.1]
    });

    // When button is pressed in, animate the animatedValue
    // to 1 in 250 milliseconds.
    const onPressIn = () => {
        Animated.timing(animatedValue, {
            toValue: 1,
            duration: 250,
            easing: Easing.linear,
            useNativeDriver: true
        }).start();
    }

    // When button is pressed out, animate the animatedValue
    // to 0 in 100 milliseconds.
    const onPressOut = () => {
        Animated.timing(animatedValue, {
            toValue: 0,
            duration: 100,
            easing: Easing.linear,
            useNativeDriver: true
        }).start();
    };

    // The animated style for scaling the button within the Animated.View
    const animatedScaleStyle = {
        transform: [{ scale: buttonScale }]
    };

    return (
        <Pressable
            onPress={(disabled || loading) ? null : onPress}
            onPressIn={(disabled || loading || !animated) ? null : onPressIn}
            onPressOut={(disabled || loading || !animated) ? null : onPressOut}
            style={{
                width: "100%",
                alignItems: "center",
                justifyContent: "center"
            }}
        >
            <Animated.View
                style={StyleSheet.flatten([
                    styles.buttonContainer,
                    {
                        width,
                        height,
                        backgroundColor: outlined ? "transparent" : "black",
                        borderWidth: outlined ? 1 : 0,
                        opacity: disabled ? 0.7 : 1,
                    },
                    animatedScaleStyle,
                    buttonStyle
                ])}
            >
                {loading ? <ActivityIndicator size={'small'} /> : null}
                <Text style={StyleSheet.flatten([
                    styles.label,
                    {
                        color: outlined ? "black" : "white"
                    },
                    labelStyle
                ])}>
                    {label}</Text>
            </Animated.View>

        </Pressable>
    );
};

export default SubmitButton;

SubmitButton.defaultProps = {
    label: "Submit",
    outlined: false,
    width: "95%",
    height: 50,
    loading: false,
    disabled: false,
    animated: true
};

const styles = StyleSheet.create({
    buttonContainer: {
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 15,
        marginVertical: 5,
        flexDirection: "row"
    },
    label: {
        fontSize: 15,
        fontWeight: "700",
        paddingHorizontal: 10
    }
});
