import React from "react";
import { StyleProp, StyleSheet } from "react-native";
import FastImage, { FastImageProps, ImageStyle } from "react-native-fast-image";
import { ImageConst } from "../assets";

interface CFastImageProps extends FastImageProps {
    source: FastImageProps['source'];
    style?: StyleProp<ImageStyle>;
    size?: number
    height?: number
    width?: number
}
const CFastImage = ({
    source,
    style,
    size,
    height,
    width,
    ...rest
}: CFastImageProps) => {
    return (
        <FastImage
            defaultSource={ImageConst.PERSON}
            source={source}
            style={
                StyleSheet.flatten([
                    style,
                    {
                        height: height ?? size,
                        width: width ?? size
                    }
                ])
            }

            {...rest}
        />
    );
};

export default CFastImage;

CFastImage.defaultProps = {
    size: 50,
};

{/* 

Use-

<CFastImage
source={{ uri: 'http://example.com/my_image.jpg' }}
size={150}
resizeMode={FastImage.resizeMode.cover}
/>

*/}