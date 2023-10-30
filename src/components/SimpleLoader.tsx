import { CustomStyle } from '@app/Types';
import React from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';

type size = 'large' | 'small' | undefined;

interface Props {
    loading: boolean;
    size: size;
    color?: string;
    style?: CustomStyle
    backgroundColor?: string,
    isCenter?: boolean
}

const SimpleLoader = ({ loading, size, style, color, backgroundColor = '#fff', isCenter }: Props) => {
    if (loading) {
        return (
            <View
                style={[
                    StyleSheet.absoluteFill,
                    isCenter ? styles.loader : null,
                    { backgroundColor },
                    style
                ]}
            >
                <ActivityIndicator size={size} color={color} />
            </View>
        )
    } else {
        return null
    }
}


SimpleLoader.defaultProps = {
    size: 'large',
    loading: false
}

export default SimpleLoader

const styles = StyleSheet.create({
    loader: {
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1,
    }
})