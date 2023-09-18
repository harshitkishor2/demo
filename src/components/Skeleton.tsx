import React from 'react';
import { DimensionValue, StyleSheet } from 'react-native';
import * as Animatable from 'react-native-animatable';

interface SkeletonProps {
    height: DimensionValue | undefined;
    width: DimensionValue | undefined;
    borderRadius?: number;
    backgroundColor?: string;
}

const fadeIn = {
    0: { opacity: 0.3 },
    1: { opacity: 1 },
}

const Skeleton = ({
    height,
    width,
    borderRadius,
    backgroundColor
}: SkeletonProps) => {

    return <Animatable.View
        easing="ease-out"
        iterationCount="infinite"
        direction="alternate"
        animation={fadeIn}
        style={StyleSheet.flatten([
            styles.skeleton,
            {
                backgroundColor: backgroundColor,
                borderRadius,
                width,
                height,
            }
        ])}
    />;
}

export default Skeleton;

const styles = StyleSheet.create({
    skeleton: {
        borderRadius: 2,
    }
});

Skeleton.defaultProps = {
    width: '20%',
    height: '20%',
    backgroundColor: 'grey',
}


