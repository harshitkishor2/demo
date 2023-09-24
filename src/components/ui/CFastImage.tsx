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
}
const CFastImage = ({
    source,
    style,
    size,
    height,
    width,
    loading,
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
    loading: false,
};

{/* 

Use-

<CFastImage
source={{ uri: 'http://example.com/my_image.jpg' }}
size={150}
resizeMode={FastImage.resizeMode.cover}
/>

*/}