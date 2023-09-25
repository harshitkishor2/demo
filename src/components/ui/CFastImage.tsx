import React from "react";
import { StyleProp, StyleSheet } from "react-native";
import FastImage, { FastImageProps, ImageStyle } from "react-native-fast-image";
import Skeleton from "../Skeleton";
import { ImageConst } from "@app/assets";


interface CFastImageProps extends FastImageProps {
    source: FastImageProps['source'];
    style?: StyleProp<ImageStyle>;
    size?: number
    height?: number
    width?: number,
    loading: boolean
    isAvatar: boolean
}
const CFastImage = ({
    source,
    style,
    size,
    height,
    width,
    loading,
    isAvatar,
    ...rest
}: CFastImageProps) => {

    if (loading) {
        return <Skeleton
            height={height ?? size}
            width={width ?? size}
            borderRadius={size ? size / 2 : 10}
        />
    }


    return (
        <FastImage
            defaultSource={ImageConst.PERSON}
            source={source}
            style={
                StyleSheet.flatten([{
                    height: height ?? size,
                    width: width ?? size,
                    borderRadius: (size && isAvatar) ? size / 2 : 0,
                }, style
                ])
            }
            {...rest}
        />
    );
};

export default CFastImage;

CFastImage.defaultProps = {
    size: 50,
    loading: false,
    isAvatar: false
};

{/* 

Use-

<CFastImage
source={{ uri: 'http://example.com/my_image.jpg' }}
size={150}
resizeMode={FastImage.resizeMode.cover}
/>

*/}