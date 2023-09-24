import React from 'react'

import { StyleSheet, Text, TextProps, TextStyle } from 'react-native'

import Skeleton from '../Skeleton';
import { FontConst } from '@app/assets';
import { DimensionValue, TextAlign, TextTransform } from '@app/Types';



interface CTextProps {
    children?: React.ReactNode | string | undefined;
    align?: TextAlign;
    style?: TextStyle | TextStyle[] | undefined;
    loading?: boolean;
    skHeight?: DimensionValue;
    skWidth?: DimensionValue
    skBackground?: string;
    skBorderRadius?: number;
    numberOfLines?: number,
    textTransform?: TextTransform;
    adjustsFontSizeToFit?: boolean;
    props?: TextProps
}

const CText = ({
    children,
    align,
    style,
    loading,
    skHeight,
    skWidth,
    skBorderRadius,
    skBackground,
    textTransform,
    numberOfLines,
    adjustsFontSizeToFit,
    ...props
}: CTextProps) => {

    if (loading && skWidth && skHeight) {
        return <Skeleton
            height={skHeight}
            width={skWidth}
            borderRadius={skBorderRadius}
            backgroundColor={skBackground} />
    }

    return (
        <Text
            {...props}
            // ellipsizeMode='tail'
            adjustsFontSizeToFit={adjustsFontSizeToFit}
            numberOfLines={numberOfLines || 1}
            style={StyleSheet.flatten([
                styles.textStyle,
                style && style,
                {
                    textAlign: align,
                    textTransform,
                },
            ])}>
            {children}
        </Text>
    )
}

export default CText

CText.defaultProps = {
    align: 'auto',
    skHeight: 15,
    skWidth: '30%',
    loading: false,
    adjustsFontSizeToFit: true,
}

const styles = StyleSheet.create({
    textStyle: {
        fontFamily: FontConst.Handlee.regular,
        color: "black",
        fontWeight: 'normal',
        fontSize: 12
    }
});

