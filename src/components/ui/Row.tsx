import { StyleSheet, Text, View, ViewStyle } from "react-native";
import React, { ReactNode } from "react";
import { AlignItems, DimensionValue, FlexWrap, JustifyContent } from "@app/Types";

interface RowProps {
    children?: ReactNode | ReactNode[] | undefined,
    padding?: DimensionValue,
    margin?: DimensionValue,
    style?: ViewStyle,
    justifyContent?: JustifyContent,
    alignItems?: AlignItems
    flexWrap?: FlexWrap,
    backgroundColor?: string
}

const Row = ({
    children,
    style,
    padding,
    margin,
    justifyContent,
    alignItems,
    flexWrap,
    backgroundColor
}: RowProps) => {
    return (
        <View style={StyleSheet.flatten([
            styles.row,
            {
                justifyContent,
                margin,
                padding,
                alignItems,
                flexWrap,
                backgroundColor
            },
            style
        ])}>
            {children}
        </View>
    );
};

export default Row;

Row.defaultProps = {
    justifyContent: 'space-between',
    alignItems: "center",
    margin: 0,
    padding: 10,
    flexWrap: "wrap"
};

const styles = StyleSheet.create({
    row: {
        flexDirection: "row",

    }
});
