import React from 'react';
import { ActivityIndicator, StyleSheet, ViewStyle } from 'react-native';
import Container from './Container';

type size = 'large' | 'small' | undefined;

interface Props {
    loading: boolean;
    size: size;
    color?: string;
    style?: ViewStyle;
    backgroundColor?: string
}

const SimpleLoader = ({ loading, size, style, color, backgroundColor }: Props) => {
    if (loading) {
        return (
            <Container style={[styles.loader, style]} backgroundColor={backgroundColor} >
                <ActivityIndicator size={size} color={color} />
            </Container>
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
        position: "absolute",
        top: 0,
        right: 0,
        left: 0,
        bottom: 0,
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1,
    }
})