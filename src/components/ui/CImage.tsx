import { ImageConst } from "@app/assets";
import React from "react";
import { Image, ImageProps, ImageSourcePropType, ImageStyle, StyleProp, StyleSheet } from "react-native";

interface CImageProps extends ImageProps {
    source: ImageSourcePropType;
    style?: StyleProp<ImageStyle>
    size?: number
    height?: number
    width?: number
}
const CImage = ({
    source,
    style,
    size,
    height,
    width,
    ...rest
}: CImageProps) => {
    return (
        <Image
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

export default CImage;

CImage.defaultProps = {
    size: 50,
};


{/*

<CImage
source={{ uri: 'http://example.com/my_image.jpg' }}
size={150}
resizeMode="contain"
/> 

*/}

