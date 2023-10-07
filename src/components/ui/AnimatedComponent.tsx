import { Animation, CustomStyle, Direction, Easing } from "@app/Types";
import { duration } from "moment";
import React, { ReactNode } from "react";
import { StyleSheet, TextStyle } from "react-native";
import * as Animatable from 'react-native-animatable';

type AnimatedViewProps = {
    animation: Animation
    easing: Easing
    direction: Direction
    iterationCount?: number | 'infinite'
    children: ReactNode | ReactNode[] | undefined,
    style?: CustomStyle | TextStyle,
    duration?: number;
    delay?: number;
}

export const AnimatedView = ({
    animation,
    easing,
    direction,
    iterationCount,
    children,
    style,
    duration,
    delay
}: AnimatedViewProps) => {
    return (
        <Animatable.View
            easing={easing}
            iterationCount={iterationCount}
            direction={direction}
            animation={animation}
            duration={duration}
            delay={delay}
            style={StyleSheet.flatten([
                style
            ])}
            useNativeDriver={true}
        >
            {children}
        </Animatable.View>
    );
};



export const AnimatedText = ({
    animation,
    easing,
    direction,
    iterationCount,
    children,
    style,
}: AnimatedViewProps) => {
    return (
        <Animatable.Text
            easing={easing}
            iterationCount={iterationCount}
            direction={direction}
            animation={animation}
            style={StyleSheet.flatten([
                style
            ])}
        >
            {children}
        </Animatable.Text>
    );
};


/* 

<AnimatedView
animation="fadeInLeft"
easing={'ease-in'}
direction="normal"
>
<Text>Hello Mr. India</Text>
</AnimatedView>


<AnimatedText
animation="fadeInLeft"
easing={'ease-in'}
direction="normal"
>
Hello Mr. India
</AnimatedText>
 */