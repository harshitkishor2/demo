import { StyleSheet, Text, View, ViewStyle } from "react-native";
import React from "react";

interface SpacerProps {
    height: number
    width?: number,
    backgroundColor?: string,
    style?: ViewStyle
}
const Spacer = ({
    height,
    width,
    backgroundColor,
    style
}: SpacerProps) => {
    return (
        <View style={StyleSheet.flatten([
            style,
            { height, width, backgroundColor }
        ])} />
    );
};

Spacer.defaultProps = {
    height: 10,
};

export default Spacer;

