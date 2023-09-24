import { SafeAreaView, StyleSheet, View, ViewStyle } from 'react-native'
import React, { FC, ReactNode } from 'react'
import { CustomStyle, DimensionValue } from '@app/Types'

interface Props {
    useSafeArea: boolean,
    children: ReactNode,
    backgroundColor: string,
    padding: DimensionValue,
    margin: DimensionValue,
    style?: CustomStyle
}
const Container = ({
    useSafeArea,
    children,
    backgroundColor,
    padding,
    margin,
    style
}: Props) => {
    const Tag = useSafeArea ? SafeAreaView : View
    return (
        <Tag style={StyleSheet.flatten([
            styles.container,
            { backgroundColor, padding, margin },
            style
        ])}>
            {children}
        </Tag>
    )
}

export default Container

Container.defaultProps = {
    backgroundColor: "white",
    useSafeArea: true,
    padding: 0,
    margin: 0
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: "center",
        // alignItems: "center"
    }
})