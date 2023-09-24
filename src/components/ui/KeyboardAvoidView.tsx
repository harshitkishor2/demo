import { KeyboardAvoidingView, Platform, StyleSheet, Text, View } from "react-native";
import React, { ReactNode } from "react";
import { CustomStyle } from "@app/Types";

type KeyboardAvoidViewProps = {
    children: ReactNode | ReactNode[] | undefined,
    style?: CustomStyle
}


const keyboardVerticalOffset = Platform.OS === 'ios' ? 40 : 0
const behaviour = Platform.OS === 'ios' ? 'padding' : 'height'

const KeyboardAvoidView = ({
    children,
    style
}: KeyboardAvoidViewProps) => {
    return (
        <KeyboardAvoidingView
            behavior={behaviour}
            // keyboardVerticalOffset={keyboardVerticalOffset}
            style={[styles.container, style]}
        >
            {children}
        </KeyboardAvoidingView>
    );
};

export default KeyboardAvoidView;

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});
